<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'noindex, nofollow' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})

const title = 'Hawk | Tennis Stats'
const description =
  'Recherche et analyse moderne des joueurs de tennis affiliés.'

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
    <UHeader
      class="border-b border-white/10 bg-[#07110b]/95 backdrop-blur"
    >
      <template #left>
        <NuxtLink
          to="/"
          class="text-xl font-black tracking-wide text-white hover:text-[#B7F34D] transition-colors"
        >
          Hawk
        </NuxtLink>
      </template>

      <template #right>
        <div class="flex items-center gap-3">
          <UButton
            to="/"
            class="bg-[#B7F34D] text-black hover:bg-[#c8ff63] border-0 font-semibold"
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

        </div>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter
      class="border-t border-white/10 bg-[#07110b]"
    >
      <template #left>
        <p class="text-sm text-white/50">
          © {{ new Date().getFullYear() }} Hawk. Tous droits réservés.
        </p>
      </template>
    </UFooter>
  </UApp>
</template>