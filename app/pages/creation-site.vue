<template>
  <UContainer class="py-24">
    <div class="max-w-4xl mx-auto text-center mb-20">
      <p class="text-primary font-semibold uppercase tracking-wider">
        Création de site internet
      </p>

      <h1 class="mt-4 text-5xl font-bold tracking-tight">
        Nuxt.js ou Shopify : deux approches, un même objectif
      </h1>

      <p class="mt-6 text-lg text-muted">
        Créer un site moderne, performant et aligné avec les objectifs de votre activité.
        Selon le projet, je peux orienter la solution vers une vitrine rapide et optimisée SEO,
        ou vers un écosystème e-commerce complet.
      </p>
    </div>

    <div class="relative grid md:grid-cols-2 gap-8 items-stretch">
      <!-- Nuxt -->
      <UCard class="p-8 md:p-10">
        <div class="mb-10">
          <UIcon
            name="i-simple-icons-nuxtdotjs"
            class="h-40 w-40 text-primary/80"
          />
        </div>

        <p class="text-sm text-primary font-semibold uppercase tracking-wider">
          Site vitrine performant
        </p>

        <h2 class="mt-3 text-3xl font-bold">
          Nuxt.js
        </h2>

        <p class="mt-5 text-muted leading-relaxed">
          Idéal pour construire un site vitrine moderne, rapide et parfaitement pensé pour le SEO.
          Nuxt.js permet de créer des interfaces élégantes, performantes et très personnalisables,
          avec une excellente base technique pour la visibilité sur Google.
        </p>

        <div class="mt-8 space-y-3">
          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Performance et rapidité de chargement</p>
          </div>

          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Structure idéale pour le référencement naturel</p>
          </div>

          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Design totalement sur mesure</p>
          </div>

          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Parfait pour un portfolio, une agence, une PME ou un site expert</p>
          </div>
        </div>
      </UCard>

      <!-- Shopify -->
      <UCard class="p-8 md:p-10">
        <div class="mb-10">
          <UIcon
            name="i-simple-icons-shopify"
            class="h-40 w-40 text-primary/80"
          />
        </div>

        <p class="text-sm text-primary font-semibold uppercase tracking-wider">
          E-commerce & CRM
        </p>

        <h2 class="mt-3 text-3xl font-bold">
          Shopify
        </h2>

        <p class="mt-5 text-muted leading-relaxed">
          Shopify est une excellente solution lorsqu’un projet nécessite une boutique en ligne,
          une gestion produit, des paiements, des commandes, des clients et un écosystème commercial
          structuré autour de l’e-commerce.
        </p>

        <div class="mt-8 space-y-3">
          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Boutique en ligne complète</p>
          </div>

          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Gestion des produits, commandes et clients</p>
          </div>

          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Intégration avec CRM, email marketing et outils de conversion</p>
          </div>

          <div class="flex gap-3">
            <UIcon name="i-lucide-check" class="text-primary mt-1" />
            <p class="text-muted">Idéal pour une marque, un e-shop ou une activité commerciale</p>
          </div>
        </div>
      </UCard>

      <!-- VS -->
      <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div class="h-20 w-20 rounded-full border border-primary/20 bg-background/80 backdrop-blur flex items-center justify-center shadow-xl">
          <span class="text-xl font-bold text-primary">
            VS
          </span>
        </div>
      </div>
    </div>

    <UCard class="mt-12 p-8 text-center">
      <p class="text-sm uppercase tracking-wider text-primary font-semibold">
        Autres environnements
      </p>

      <p class="mt-4 text-lg text-muted max-w-3xl mx-auto leading-relaxed">
        Je peux également travailler, dans une autre mesure, sur des solutions comme
        Wix, WordPress ou sur des projets plus spécifiques en développement full stack.
        L’objectif reste toujours le même : choisir la technologie la plus cohérente
        avec le besoin réel du projet.
      </p>
    </UCard>

    <div class="mt-16 flex justify-center">
      <UButton
        to="/contact"
        size="xl"
        trailing-icon="i-lucide-arrow-right"
      >
        Discuter de mon projet
      </UButton>
    </div>
  </UContainer>
</template>