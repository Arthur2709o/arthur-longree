<script setup lang="ts">
const search = ref('')
const players = ref<any[]>([])
const loadingSearch = ref(false)

let searchTimeout: ReturnType<typeof setTimeout>

async function searchPlayers() {
  if (search.value.length < 3) {
    players.value = []
    return
  }

  loadingSearch.value = true

  try {
    players.value = await $fetch('/api/players/search', {
      query: { text: search.value }
    })
  } finally {
    loadingSearch.value = false
  }
}

watch(search, () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(searchPlayers, 300)
})

async function selectPlayer(player: any) {
  await navigateTo(`/joueur/${player.NumFed}`)
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#07110b] text-white">
    <!-- Background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-lime-300/25 blur-3xl" />
      <div class="absolute right-[-120px] top-40 h-[420px] w-[420px] rounded-full bg-yellow-300/20 blur-3xl" />
      <div class="absolute left-[-120px] bottom-20 h-[420px] w-[420px] rounded-full bg-emerald-500/20 blur-3xl" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
    </div>

    <UContainer class="py-20">
      <!-- HERO -->
      <section class="relative mx-auto max-w-6xl rounded-[2rem] border border-lime-300/30 bg-white/10 p-8 shadow-2xl backdrop-blur md:p-16">
        <div class="absolute right-8 top-8 hidden rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm font-semibold text-lime-200 md:block">
          Live tennis data
        </div>

        <div class="mx-auto max-w-4xl text-center">
          <p class="font-semibold uppercase tracking-[0.35em] text-lime-300">
            Hawk by Arthur Longrée
          </p>

          <h1 class="mt-5 text-5xl font-black tracking-tight md:text-6xl">
            Chaque joueur a une histoire,
            <span class="block text-lime-300">
              Les statistiques la racontent.
            </span>
          </h1>

          <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Recherchez un joueur affilié, consultez son classement, son club et ses informations principales dans une interface plus moderne et lisible.
          </p>

          <!-- Search -->
          <div class="relative mx-auto mt-10 max-w-2xl">
            <UInput
              v-model="search"
              icon="i-lucide-search"
              size="xl"
              placeholder="Tape un nom, ex : Longrée, Englebert, Dupont..."
              class="w-full"
              :ui="{
                base: 'h-14 rounded-2xl bg-white text-slate-900 ring-2 ring-lime-300/40 placeholder:text-slate-400'
              }"
            />

            <div
              v-if="players.length"
              class="absolute z-50 mt-4 max-h-[360px] w-full overflow-auto rounded-3xl border border-lime-300/30 bg-[#101b12]/95 p-2 text-left shadow-2xl backdrop-blur"
            >
              <button
                v-for="player in players"
                :key="player.NumFed"
                class="flex w-full items-center justify-between rounded-2xl px-5 py-4 transition hover:bg-lime-300/10"
                @click="selectPlayer(player)"
              >
                <div>
                  <p class="font-bold text-white">
                    {{ player.Prenom }} {{ player.Nom }}
                  </p>
                  <p class="text-sm text-white/50">
                    N° {{ player.NumFed }}
                  </p>
                </div>

                <UBadge color="primary" variant="solid">
                  {{ player.ClasmtSimple?.trim() }}
                </UBadge>
              </button>
            </div>
          </div>

          <p v-if="loadingSearch" class="mt-4 text-sm text-lime-200">
            Recherche en cours...
          </p>
        </div>
      </section>

      <!-- Loading -->
      <div v-if="loadingPlayer" class="mt-12 text-center text-white/70">
        Chargement de la fiche joueur...
      </div>

      <!-- Player result -->
      <section
        v-if="selectedPlayer"
        class="mt-12 grid gap-6 lg:grid-cols-[360px_1fr]"
      >
        <UCard class="border-lime-300/20 bg-white/10 backdrop-blur">
          <div class="text-center">
            <div class="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-lime-300/20">
              <UIcon name="i-lucide-user-round" class="h-16 w-16 text-lime-300" />
            </div>

            <h2 class="mt-6 text-3xl font-black text-white">
              {{ selectedPlayer.pageTitle }}
            </h2>

            <UBadge color="primary" size="lg" class="mt-5">
              {{ selectedPlayer.fiche['Classement simple :'] || selectedPlayer.fiche['Classement simple  :'] }}
            </UBadge>
          </div>
        </UCard>

        <div class="grid gap-5 md:grid-cols-2">
          <UCard class="bg-white/10 backdrop-blur">
            <p class="text-sm text-lime-200">Club</p>
            <p class="mt-2 text-2xl font-black text-white">
              {{ selectedPlayer.fiche['Club:'] || 'Non renseigné' }}
            </p>
          </UCard>

          <UCard class="bg-white/10 backdrop-blur">
            <p class="text-sm text-lime-200">Classement interclubs</p>
            <p class="mt-2 text-2xl font-black text-white">
              {{ selectedPlayer.fiche['Classement simple interclubs :'] || 'Non renseigné' }}
            </p>
          </UCard>

          <UCard class="bg-white/10 backdrop-blur">
            <p class="text-sm text-lime-200">Nationalité</p>
            <p class="mt-2 text-2xl font-black text-white">
              {{ selectedPlayer.fiche['Nationalité:'] || 'Non renseignée' }}
            </p>
          </UCard>

          <UCard class="bg-white/10 backdrop-blur">
            <p class="text-sm text-lime-200">Valeur double</p>
            <p class="mt-2 text-2xl font-black text-white">
              {{ selectedPlayer.fiche['Valeur double:'] || 'Non renseignée' }}
            </p>
          </UCard>

          <UCard class="bg-white/10 backdrop-blur">
            <p class="text-sm text-lime-200">Première affiliation</p>
            <p class="mt-2 text-2xl font-black text-white">
              {{ selectedPlayer.fiche['Première affiliation:'] || 'Non renseignée' }}
            </p>
          </UCard>

          <UCard class="bg-white/10 backdrop-blur">
            <p class="text-sm text-lime-200">Actif depuis</p>
            <p class="mt-2 text-2xl font-black text-white">
              {{ selectedPlayer.fiche['Actif depuis le:'] || 'Non renseigné' }}
            </p>
          </UCard>
        </div>
      </section>
    </UContainer>
  </div>
</template>