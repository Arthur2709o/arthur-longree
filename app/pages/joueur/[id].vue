<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

const { data: player, pending, error } = await useFetch(`/api/players/${id}`)
const { data: stats } = await useFetch(`/api/players/${id}/matches`)

const playerName = computed(() => {
  return player.value?.pageTitle?.replace(`(${id})`, '').trim() || 'Joueur'
})

const ranking = computed(() => {
  return player.value?.fiche['Classement simple :'] ||
    player.value?.fiche['Classement simple  :'] ||
    'NC'
})

const recentForm = computed(() => {
  return stats.value?.matches?.slice(0, 10) || []
})

const tournaments = computed(() => {
  return Object.entries(stats.value?.byTournament || {})
    .map(([name, value]: any) => ({
      name,
      ...value
    }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5)
})

const opponentLevels = computed(() => {
  return Object.entries(stats.value?.byOpponentPoints || {})
    .map(([level, value]: any) => ({
      level,
      ...value
    }))
    .sort((a, b) => b.total - a.total)
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#07110b] text-white">
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#B7F34D]/20 blur-3xl" />
      <div class="absolute right-[-120px] bottom-0 h-[420px] w-[420px] rounded-full bg-yellow-300/10 blur-3xl" />
    </div>

    <UContainer class="py-20">
      <div v-if="pending" class="text-center text-white/70">
        Chargement de la fiche joueur...
      </div>

      <div v-else-if="error" class="text-center text-red-300">
        Impossible de charger ce joueur.
      </div>

      <template v-else-if="player">
        <section class="mb-10 rounded-[2rem] border border-[#B7F34D]/20 bg-white/10 p-8 backdrop-blur md:p-12">
          <div class="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="font-semibold uppercase tracking-[0.35em] text-[#B7F34D]">
                Fiche joueur
              </p>

              <h1 class="mt-4 text-5xl font-black tracking-tight md:text-7xl">
                {{ playerName }}
              </h1>

              <p class="mt-4 text-lg text-white/60">
                Numéro d’affiliation {{ id }}
              </p>
            </div>

            <div class="flex flex-col items-start gap-3 md:items-end">
              <UBadge class="bg-[#B7F34D] px-5 py-2 text-base font-black text-black">
                {{ ranking }}
              </UBadge>

              <p class="text-sm text-white/50">
                Classement simple actuel
              </p>
            </div>
          </div>
        </section>

        <section class="grid gap-6 lg:grid-cols-[360px_1fr]">
          <UCard class="border-white/10 bg-white/10 backdrop-blur">
            <div class="text-center">
              <div class="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#B7F34D]/20 ring-1 ring-[#B7F34D]/30">
                <UIcon name="i-lucide-user-round" class="h-16 w-16 text-[#B7F34D]" />
              </div>

              <h2 class="mt-6 text-3xl font-black text-white">
                {{ playerName }}
              </h2>

              <p class="mt-2 text-white/50">
                {{ player.fiche['Club:'] || 'Club non renseigné' }}
              </p>

              <div class="mt-8 grid grid-cols-2 gap-3">
                <div class="rounded-2xl bg-black/20 p-4">
                  <p class="text-xs text-white/40">Simple</p>
                  <p class="mt-1 text-xl font-black text-[#B7F34D]">
                    {{ ranking }}
                  </p>
                </div>

                <div class="rounded-2xl bg-black/20 p-4">
                  <p class="text-xs text-white/40">Double</p>
                  <p class="mt-1 text-xl font-black text-[#B7F34D]">
                    {{ player.fiche['Valeur double:'] || '-' }}
                  </p>
                </div>
              </div>
            </div>
          </UCard>

          <div class="grid gap-5 md:grid-cols-2">
            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <p class="text-sm text-[#B7F34D]">Club</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Club:'] || 'Non renseigné' }}
              </p>
            </UCard>

            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <p class="text-sm text-[#B7F34D]">Classement interclubs</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Classement simple interclubs :'] || 'Non renseigné' }}
              </p>
            </UCard>

            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <p class="text-sm text-[#B7F34D]">Nationalité</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Nationalité:'] || 'Non renseignée' }}
              </p>
            </UCard>

            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <p class="text-sm text-[#B7F34D]">Actif depuis</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Actif depuis le:'] || 'Non renseigné' }}
              </p>
            </UCard>
          </div>
        </section>

        <section v-if="stats" class="mt-10 space-y-6">
          <div class="grid gap-5 md:grid-cols-4">
            <UCard class="border-[#B7F34D]/20 bg-white/10 backdrop-blur">
              <p class="text-sm text-white/50">Win rate</p>
              <p class="mt-2 text-4xl font-black text-[#B7F34D]">
                {{ stats.summary.winRate }}%
              </p>
            </UCard>

            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <p class="text-sm text-white/50">Victoires</p>
              <p class="mt-2 text-4xl font-black text-white">
                {{ stats.summary.wins }}
              </p>
            </UCard>

            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <p class="text-sm text-white/50">Défaites</p>
              <p class="mt-2 text-4xl font-black text-white">
                {{ stats.summary.losses }}
              </p>
            </UCard>

            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <p class="text-sm text-white/50">Matchs analysés</p>
              <p class="mt-2 text-4xl font-black text-white">
                {{ stats.summary.total }}
              </p>
            </UCard>
          </div>

          <UCard class="border-white/10 bg-white/10 backdrop-blur">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#B7F34D]">
                  Forme récente
                </p>
                <h2 class="mt-2 text-2xl font-black">
                  Les 10 derniers matchs
                </h2>
              </div>

              <div class="flex gap-2">
                <span
                  v-for="(match, index) in recentForm"
                  :key="index"
                  class="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black"
                  :class="match.type === 'victory' ? 'bg-[#B7F34D] text-black' : 'bg-red-500 text-white'"
                >
                  {{ match.type === 'victory' ? 'V' : 'D' }}
                </span>
              </div>
            </div>
          </UCard>

          <div class="grid gap-6 lg:grid-cols-2">
            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <h2 class="text-2xl font-black">
                Performance par tournoi
              </h2>

              <div class="mt-6 space-y-4">
                <div
                  v-for="tournament in tournaments"
                  :key="tournament.name"
                  class="rounded-2xl bg-black/20 p-4"
                >
                  <div class="flex items-center justify-between">
                    <p class="font-bold">
                      {{ tournament.name }}
                    </p>
                    <p class="text-sm text-white/50">
                      {{ tournament.wins }}V / {{ tournament.losses }}D
                    </p>
                  </div>

                  <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      class="h-full rounded-full bg-[#B7F34D]"
                      :style="{ width: `${(tournament.wins / tournament.total) * 100}%` }"
                    />
                  </div>
                </div>
              </div>
            </UCard>

            <UCard class="border-white/10 bg-white/10 backdrop-blur">
              <h2 class="text-2xl font-black">
                Niveau des adversaires
              </h2>

              <div class="mt-6 space-y-4">
                <div
                  v-for="level in opponentLevels"
                  :key="level.level"
                  class="rounded-2xl bg-black/20 p-4"
                >
                  <div class="flex items-center justify-between">
                    <p class="font-bold text-[#B7F34D]">
                      {{ level.level }}
                    </p>
                    <p class="text-sm text-white/50">
                      {{ level.wins }}V / {{ level.losses }}D
                    </p>
                  </div>

                  <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      class="h-full rounded-full bg-[#B7F34D]"
                      :style="{ width: `${(level.wins / level.total) * 100}%` }"
                    />
                  </div>
                </div>
              </div>
            </UCard>
          </div>

          <UCard class="border-white/10 bg-white/10 backdrop-blur">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.25em] text-[#B7F34D]">
                  Historique
                </p>
                <h2 class="mt-2 text-2xl font-black">
                  Derniers résultats
                </h2>
              </div>
            </div>

            <div class="mt-6 divide-y divide-white/10">
              <div
                v-for="match in stats.matches.slice(0, 12)"
                :key="`${match.date}-${match.opponent}-${match.score}`"
                class="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p class="font-bold text-white">
                    {{ match.opponent }}
                  </p>
                  <p class="text-sm text-white/50">
                    {{ match.tournament }} · {{ match.category }} · {{ match.date }}
                  </p>
                </div>

                <div class="flex items-center gap-3">
                  <UBadge
                    :class="match.type === 'victory'
                      ? 'bg-[#B7F34D] text-black'
                      : 'bg-red-500 text-white'"
                  >
                    {{ match.type === 'victory' ? 'Victoire' : 'Défaite' }}
                  </UBadge>

                  <span class="font-mono text-sm text-white/70">
                    {{ match.score }}
                  </span>
                </div>
              </div>
            </div>
          </UCard>
        </section>
      </template>
    </UContainer>
  </div>
</template>