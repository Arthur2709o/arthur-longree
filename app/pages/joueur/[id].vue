<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

const activeTab = ref('overview')

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
    .map(([name, value]: any) => ({ name, ...value }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 5)
})

const opponentLevels = computed(() => {
  return Object.entries(stats.value?.byOpponentPoints || {})
    .map(([level, value]: any) => ({ level, ...value }))
    .sort((a, b) => b.total - a.total)
})

const winRateSeries = computed(() => [
  stats.value?.summary?.winRate || 0
])

const winRateOptions = computed(() => ({
  chart: {
    type: 'radialBar',
    sparkline: { enabled: true }
  },
  colors: ['#B7F34D'],
  plotOptions: {
    radialBar: {
      hollow: { size: '62%' },
      track: { background: 'rgba(255,255,255,0.08)' },
      dataLabels: {
        name: { show: false },
        value: {
          color: '#ffffff',
          fontSize: '34px',
          fontWeight: 900,
          formatter: (val: number) => `${val}%`
        }
      }
    }
  },
  stroke: { lineCap: 'round' }
}))

const winLossSeries = computed(() => [
  stats.value?.summary?.wins || 0,
  stats.value?.summary?.losses || 0
])

const winLossOptions = computed(() => ({
  chart: {
    type: 'donut'
  },
  labels: ['Victoires', 'Défaites'],
  colors: ['#B7F34D', '#ef4444'],
  legend: {
    position: 'bottom',
    labels: { colors: '#ffffff' }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    colors: ['#07110b']
  }
}))

const tournamentSeries = computed(() => [
  {
    name: 'Victoires',
    data: tournaments.value.map((t: any) => t.wins)
  },
  {
    name: 'Défaites',
    data: tournaments.value.map((t: any) => t.losses)
  }
])

const tournamentOptions = computed(() => ({
  chart: {
    type: 'bar',
    toolbar: { show: false },
    foreColor: '#ffffff'
  },
  colors: ['#B7F34D', '#ef4444'],
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 6
    }
  },
  xaxis: {
    categories: tournaments.value.map((t: any) => t.name),
    labels: { style: { colors: '#ffffff' } }
  },
  yaxis: {
    labels: { style: { colors: '#ffffff' } }
  },
  grid: {
    borderColor: 'rgba(255,255,255,0.08)'
  },
  legend: {
    labels: { colors: '#ffffff' }
  }
}))

const tabs = [
  { id: 'overview', label: 'Vue d’ensemble' },
  { id: 'matches', label: 'Matchs' },
  { id: 'tournaments', label: 'Tournois' },
  { id: 'opponents', label: 'Adversaires' }
]
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#07110b] text-white">
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#B7F34D]/20 blur-3xl" />
      <div class="absolute right-[-120px] bottom-0 h-[420px] w-[420px] rounded-full bg-yellow-300/10 blur-3xl" />
    </div>

    <UContainer class="py-16">
      <div v-if="pending" class="text-center text-white/70">
        Chargement de la fiche joueur...
      </div>

      <div v-else-if="error" class="text-center text-red-300">
        Impossible de charger ce joueur.
      </div>

      <template v-else-if="player">
        <section class="rounded-[2rem] border border-[#B7F34D]/20 bg-white/10 p-8 backdrop-blur md:p-10">
          <div class="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <p class="font-semibold uppercase tracking-[0.35em] text-[#B7F34D]">
                Hawk player profile
              </p>

              <h1 class="mt-4 text-5xl font-black tracking-tight md:text-7xl">
                {{ playerName }}
              </h1>

              <div class="mt-5 flex flex-wrap gap-3">
                <UBadge class="bg-[#B7F34D] px-4 py-2 text-black font-black">
                  {{ ranking }}
                </UBadge>

                <UBadge class="bg-white/10 px-4 py-2 text-white">
                  {{ player.fiche['Club:'] || 'Club non renseigné' }}
                </UBadge>

                <UBadge class="bg-white/10 px-4 py-2 text-white">
                  N° {{ id }}
                </UBadge>
              </div>
            </div>

            <UCard class="border-[#B7F34D]/20 bg-black/20">
              <ClientOnly>
                <apexchart
                  type="radialBar"
                  height="220"
                  :options="winRateOptions"
                  :series="winRateSeries"
                />
              </ClientOnly>

              <p class="text-center text-sm uppercase tracking-[0.25em] text-white/50">
                Win rate
              </p>
            </UCard>
          </div>
        </section>

        <section v-if="stats" class="mt-6 grid gap-4 md:grid-cols-4">
          <UCard class="border-[#B7F34D]/20 bg-white/10 backdrop-blur">
            <p class="text-sm text-white/50">Victoires</p>
            <p class="mt-2 text-4xl font-black text-[#B7F34D]">
              {{ stats.summary.wins }}
            </p>
          </UCard>

          <UCard class="border-white/10 bg-white/10 backdrop-blur">
            <p class="text-sm text-white/50">Défaites</p>
            <p class="mt-2 text-4xl font-black text-red-400">
              {{ stats.summary.losses }}
            </p>
          </UCard>

          <UCard class="border-white/10 bg-white/10 backdrop-blur">
            <p class="text-sm text-white/50">Matchs analysés</p>
            <p class="mt-2 text-4xl font-black">
              {{ stats.summary.total }}
            </p>
          </UCard>

          <UCard class="border-white/10 bg-white/10 backdrop-blur">
            <p class="text-sm text-white/50">Forme récente</p>
            <div class="mt-3 flex gap-1">
              <span
                v-for="(match, index) in recentForm.slice(0, 8)"
                :key="index"
                class="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black"
                :class="match.type === 'victory' ? 'bg-[#B7F34D] text-black' : 'bg-red-500 text-white'"
              >
                {{ match.type === 'victory' ? 'V' : 'D' }}
              </span>
            </div>
          </UCard>
        </section>

        <section class="mt-8">
          <div class="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="rounded-xl px-4 py-2 text-sm font-bold transition"
              :class="activeTab === tab.id
                ? 'bg-[#B7F34D] text-black'
                : 'text-white/60 hover:bg-white/10 hover:text-white'"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="mt-6">
            <div v-if="activeTab === 'overview'" class="grid gap-6 lg:grid-cols-[360px_1fr]">
              <UCard class="border-white/10 bg-white/10 backdrop-blur">
                <h2 class="text-2xl font-black">
                  Profil
                </h2>

                <div class="mt-6 space-y-4">
                  <div>
                    <p class="text-sm text-[#B7F34D]">Club</p>
                    <p class="font-bold">{{ player.fiche['Club:'] || 'Non renseigné' }}</p>
                  </div>

                  <div>
                    <p class="text-sm text-[#B7F34D]">Classement interclubs</p>
                    <p class="font-bold">{{ player.fiche['Classement simple interclubs :'] || 'Non renseigné' }}</p>
                  </div>

                  <div>
                    <p class="text-sm text-[#B7F34D]">Nationalité</p>
                    <p class="font-bold">{{ player.fiche['Nationalité:'] || 'Non renseignée' }}</p>
                  </div>

                  <div>
                    <p class="text-sm text-[#B7F34D]">Actif depuis</p>
                    <p class="font-bold">{{ player.fiche['Actif depuis le:'] || 'Non renseigné' }}</p>
                  </div>
                </div>
              </UCard>

              <UCard class="border-white/10 bg-white/10 backdrop-blur">
                <h2 class="text-2xl font-black">
                  Victoires / défaites
                </h2>

                <ClientOnly>
                  <apexchart
                    type="donut"
                    height="300"
                    :options="winLossOptions"
                    :series="winLossSeries"
                  />
                </ClientOnly>
              </UCard>
            </div>

            <UCard v-if="activeTab === 'matches'" class="border-white/10 bg-white/10 backdrop-blur">
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
                  v-for="match in stats.matches.slice(0, 14)"
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

            <UCard v-if="activeTab === 'tournaments'" class="border-white/10 bg-white/10 backdrop-blur">
              <h2 class="text-2xl font-black">
                Performance par tournoi
              </h2>

              <ClientOnly>
                <apexchart
                  class="mt-6"
                  type="bar"
                  height="360"
                  :options="tournamentOptions"
                  :series="tournamentSeries"
                />
              </ClientOnly>
            </UCard>

            <UCard v-if="activeTab === 'opponents'" class="border-white/10 bg-white/10 backdrop-blur">
              <h2 class="text-2xl font-black">
                Niveau des adversaires
              </h2>

              <div class="mt-6 grid gap-4 md:grid-cols-2">
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
        </section>
      </template>
    </UContainer>
  </div>
</template>