<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})

const title = 'Arthur Longrée | Marketing digital'
const description = 'Conseils en SEO, SEA et création de sites internet pour développer une présence digitale plus claire, plus moderne et plus performante.'

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
    <UHeader>
      <template #left>
        <NuxtLink to="/" class="text-xl font-bold">
          Arthur Longrée
        </NuxtLink>
      </template>

      <template #right>
      <UButton to="/parcours" variant="ghost" color="neutral">
      Parcours
      </UButton>

        <UButton to="/expertises" variant="ghost" color="neutral">
        Expertises
        </UButton>

        <UButton to="/contact" color="primary">
        Contact
        </UButton>

        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          © {{ new Date().getFullYear() }} Arthur Longrée. Tous droits réservés.
        </p>
      </template>
    </UFooter>
  </UApp>
</template>