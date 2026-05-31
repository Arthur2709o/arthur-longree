import * as cheerio from 'cheerio'

type MatchResult = {
  type: 'victory' | 'defeat'
  tournament: string
  date: string
  category: string
  opponent: string
  opponentId: string | null
  opponentPoints: number | null
  score: string
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const query = getQuery(event)

  const singleValue = String(query.singleValue || '30')
  const ordinal = String(query.ordinal || '0')

  const html = await $fetch<string>(
    `https://tennis.tppwb.be/MyAFT/Players/VictoryDefeat?numFed=${id}&singleValue=${singleValue}&ordinal=${ordinal}`,
    {
      responseType: 'text'
    }
  )

  const $ = cheerio.load(html)

  function parseSection(selector: string, type: 'victory' | 'defeat') {
    const matches: MatchResult[] = []

    $(`${selector} dl.grid-data-item`).each((_, element) => {
      const rows = $(element)
        .find('dd')
        .map((__, dd) => $(dd).text().replace(/\s+/g, ' ').trim())
        .get()
        .filter(Boolean)

      const tournamentLine = rows[0] || ''
      const category = rows[1] || ''
      const opponentLine = rows[2] || ''
      const score = rows[3] || ''

      const tournamentMatch = tournamentLine.match(
        /Tournoi\s+(.+?)\s+le\s+(\d{2}\/\d{2}\/\d{4})/i
      )

      const opponentLink = $(element)
        .find('a[data-url*="/MyAFT/Players/Detail/"]')
        .first()

      const opponentUrl = opponentLink.attr('data-url') || ''

      const opponentId =
        opponentUrl.match(/Detail\/(\d+)/)?.[1] || null

      const opponentText = opponentLink
        .text()
        .replace(/\s+/g, ' ')
        .trim()

      const pointsMatch = opponentText.match(/\((\d+)\s*pts\)/i)

      matches.push({
        type,
        tournament: tournamentMatch?.[1]?.trim() || tournamentLine,
        date: tournamentMatch?.[2] || '',
        category,
        opponent: opponentText
          .replace(/\s*\(\d+\s*pts\)/i, '')
          .trim(),
        opponentId,
        opponentPoints: pointsMatch
          ? Number(pointsMatch[1])
          : null,
        score
      })
    })

    return matches
  }

  const victories = parseSection(
    '#collapse_player_vicdef_victory_S',
    'victory'
  )

  const defeats = parseSection(
    '#collapse_player_vicdef_defeat_S',
    'defeat'
  )

  const matches = [...victories, ...defeats]

  const total = matches.length
  const wins = victories.length
  const losses = defeats.length

  const winRate =
    total > 0
      ? Math.round((wins / total) * 1000) / 10
      : 0

  const byTournament = matches.reduce<
    Record<string, { wins: number; losses: number; total: number }>
  >((acc, match) => {
    const key = match.tournament || 'Non renseigné'

    if (!acc[key]) {
      acc[key] = {
        wins: 0,
        losses: 0,
        total: 0
      }
    }

    const current = acc[key]

    current.total += 1

    if (match.type === 'victory') {
      current.wins += 1
    } else {
      current.losses += 1
    }

    return acc
  }, {})

  const byOpponentPoints = matches.reduce<
    Record<string, { wins: number; losses: number; total: number }>
  >((acc, match) => {
    const key =
      match.opponentPoints !== null
        ? `${match.opponentPoints} pts`
        : 'Non renseigné'

    if (!acc[key]) {
      acc[key] = {
        wins: 0,
        losses: 0,
        total: 0
      }
    }

    const current = acc[key]

    current.total += 1

    if (match.type === 'victory') {
      current.wins += 1
    } else {
      current.losses += 1
    }

    return acc
  }, {})

  return {
    playerId: id,

    summary: {
      total,
      wins,
      losses,
      winRate
    },

    matches,

    byTournament,

    byOpponentPoints
  }
})