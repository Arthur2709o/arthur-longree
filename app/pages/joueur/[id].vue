<script setup lang="ts">
const route = useRoute()
const id = route.params.id as string

const { data: player, pending, error } = await useFetch(`/api/players/${id}`)

const playerName = computed(() => {
  return player.value?.pageTitle?.replace(`(${id})`, '').trim() || 'Joueur'
})

const ranking = computed(() => {
  return player.value?.fiche['Classement simple :'] ||
    player.value?.fiche['Classement simple  :'] ||
    'NC'
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#07110b] text-white">
    <!-- Background -->
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
        <!-- HERO JOUEUR -->
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
              <UBadge
                class="bg-[#B7F34D] px-5 py-2 text-base font-black text-black"
              >
                {{ ranking }}
              </UBadge>

              <p class="text-sm text-white/50">
                Classement simple actuel
              </p>
            </div>
          </div>
        </section>

        <!-- CONTENT -->
        <section class="grid gap-6 lg:grid-cols-[360px_1fr]">
          <!-- PROFIL -->
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

          <!-- INFOS -->
          <div class="grid gap-5 md:grid-cols-2">
            <UCard class="group border-white/10 bg-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#B7F34D]/40">
              <p class="text-sm text-[#B7F34D]">Club</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Club:'] || 'Non renseigné' }}
              </p>
            </UCard>

            <UCard class="group border-white/10 bg-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#B7F34D]/40">
              <p class="text-sm text-[#B7F34D]">Classement interclubs</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Classement simple interclubs :'] || 'Non renseigné' }}
              </p>
            </UCard>

            <UCard class="group border-white/10 bg-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#B7F34D]/40">
              <p class="text-sm text-[#B7F34D]">Nationalité</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Nationalité:'] || 'Non renseignée' }}
              </p>
            </UCard>

            <UCard class="group border-white/10 bg-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#B7F34D]/40">
              <p class="text-sm text-[#B7F34D]">Valeur double</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Valeur double:'] || 'Non renseignée' }}
              </p>
            </UCard>

            <UCard class="group border-white/10 bg-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#B7F34D]/40">
              <p class="text-sm text-[#B7F34D]">Première affiliation</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Première affiliation:'] || 'Non renseignée' }}
              </p>
            </UCard>

            <UCard class="group border-white/10 bg-white/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#B7F34D]/40">
              <p class="text-sm text-[#B7F34D]">Actif depuis</p>
              <p class="mt-2 text-2xl font-black text-white">
                {{ player.fiche['Actif depuis le:'] || 'Non renseigné' }}
              </p>
            </UCard>
          </div>
        </section>
      </template>
    </UContainer>
  </div>
</template>