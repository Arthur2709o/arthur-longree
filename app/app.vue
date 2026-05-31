<script setup>
const mobileMenuOpen = ref(false)

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'noindex, nofollow' }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'fr' }
})

const title = 'Hawk | Tennis Stats'
const description = 'Recherche et analyse moderne des joueurs de tennis affiliés.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#07110b]/95 backdrop-blur">
      <UContainer>
        <div class="flex h-16 items-center justify-between">
          <NuxtLink
            to="/"
            class="text-xl font-black tracking-wide text-white"
            @click="mobileMenuOpen = false"
          >
            Hawk
          </NuxtLink>

          <nav class="hidden items-center gap-3 md:flex">
            <UButton
              to="/"
              class="bg-[#B7F34D] text-black hover:bg-[#C9FF63] border-0 font-semibold"
            >
              Accueil
            </UButton>

            <UButton
              to="/contact"
              variant="ghost"
              class="text-white/80 hover:text-[#B7F34D] hover:bg-white/5 font-semibold"
            >
              Contact
            </UButton>
          </nav>

          <button
            class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <UIcon
              :name="mobileMenuOpen ? 'i-lucide-x' : 'i-lucide-menu'"
              class="h-5 w-5"
            />
          </button>
        </div>

        <div
          v-if="mobileMenuOpen"
          class="border-t border-white/10 py-4 md:hidden"
        >
          <div class="flex flex-col gap-3">
            <UButton
              to="/"
              block
              class="bg-[#B7F34D] text-black hover:bg-[#C9FF63] border-0 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Accueil
            </UButton>

            <UButton
              to="/contact"
              block
              class="bg-white/10 text-white hover:bg-white/15 border border-white/10 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Contact
            </UButton>
          </div>
        </div>
      </UContainer>
    </header>

    <UMain>
      <NuxtPage />
    </UMain>

<UFooter class="border-t border-white/10 bg-[#07110b]">
  <template #left>
    <p class="text-sm text-white/50">
      © {{ new Date().getFullYear() }} Hawk. Tous droits réservés.
    </p>
  </template>

  <template #right>
    <NuxtLink
      to="/politique-confidentialite"
      class="text-sm text-white/50 transition hover:text-[#B7F34D]"
    >
      Politique de confidentialité
    </NuxtLink>
  </template>
</UFooter>
  </UApp>
</template>