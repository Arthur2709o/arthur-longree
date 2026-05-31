import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  const html = await $fetch(
    `https://tennis.tppwb.be/MyAFT/Players/Detail/${id}`,
    {
      responseType: 'text'
    }
  )

  const $ = cheerio.load(html)

  const pageTitle = $('#player-title').text().trim()

  const fiche: Record<string, string> = {}

  $('dt').each((_, element) => {
    const key = $(element).text().trim()
    const value = $(element).next('dd').text().trim()

    fiche[key] = value
  })

  return {
    id,
    pageTitle,
    fiche
  }
})