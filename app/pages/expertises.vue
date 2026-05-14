<template>
  <UContainer class="py-24">
    <div class="max-w-4xl mx-auto text-center mb-20">
      <p class="text-primary font-semibold uppercase tracking-wider">
        Expertises
      </p>

      <h1 class="mt-4 text-5xl font-bold tracking-tight">
        Trois leviers pour développer votre présence digitale
      </h1>

      <p class="mt-6 text-lg text-muted">
        J’accompagne les entreprises autour de trois piliers essentiels : être visible sur Google,
        générer du trafic qualifié et construire une présence web moderne, claire et performante.
      </p>
    </div>

    <div class="grid gap-8">
      <!-- SEO -->
      <UCard class="p-8 md:p-10">
        <div class="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div class="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <UIcon name="i-lucide-search" class="text-primary h-8 w-8" />
          </div>

          <div>
            <p class="text-sm text-primary font-semibold uppercase tracking-wider">
              Référencement naturel
            </p>

            <h2 class="mt-2 text-3xl font-bold">
              SEO
            </h2>

            <p class="mt-4 text-muted leading-relaxed">
              J’ai travaillé le référencement naturel pour de nombreux clients, avec une approche
              complète qui combine stratégie, technique, contenu et popularité. Je maîtrise les
              optimisations on-page et off-page afin d’améliorer la visibilité organique d’un site
              sur Google.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <UBadge color="primary" variant="subtle">SEO technique</UBadge>
              <UBadge color="primary" variant="subtle">On-page</UBadge>
              <UBadge color="primary" variant="subtle">Off-page</UBadge>
              <UBadge color="primary" variant="subtle">Contenu</UBadge>
              <UBadge color="primary" variant="subtle">2 certifications Semrush</UBadge>
            </div>
          </div>
        </div>
      </UCard>

      <!-- SEA -->
      <UCard class="p-8 md:p-10">
        <div class="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div class="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <UIcon name="i-lucide-badge-dollar-sign" class="text-primary h-8 w-8" />
          </div>

          <div>
            <p class="text-sm text-primary font-semibold uppercase tracking-wider">
              Publicité digitale
            </p>

            <h2 class="mt-2 text-3xl font-bold">
              SEA
            </h2>

            <p class="mt-4 text-muted leading-relaxed">
              J’accompagne la mise en place et l’optimisation de campagnes publicitaires sur les
              moteurs de recherche. Mon objectif : générer du trafic qualifié, améliorer les
              conversions et piloter les performances avec une lecture claire des données.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <UBadge color="primary" variant="subtle">Google Ads</UBadge>
              <UBadge color="primary" variant="subtle">Microsoft Ads</UBadge>
              <UBadge color="primary" variant="subtle">Suivi des conversions</UBadge>
              <UBadge color="primary" variant="subtle">Optimisation budget</UBadge>
              <UBadge color="primary" variant="subtle">4 certifications Google Ads</UBadge>
            </div>
          </div>
        </div>
      </UCard>

      <!-- Sites web -->
        <UCard
         class="p-8 md:p-10 hover:ring-2 hover:ring-primary/30 transition cursor-pointer"
        @click="navigateTo('/creation-site')"
        >
        <div class="grid md:grid-cols-[auto_1fr] gap-8 items-start">
          <div class="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <UIcon name="i-lucide-monitor-smartphone" class="text-primary h-8 w-8" />
          </div>

          <div>
            <p class="text-sm text-primary font-semibold uppercase tracking-wider">
              Création web
            </p>

            <h2 class="mt-2 text-3xl font-bold">
              Création de sites internet
            </h2>

            <p class="mt-4 text-muted leading-relaxed">
              J’ai de l’expérience dans la création de sites modernes, performants et pensés pour
              l’utilisateur. Je travaille aussi bien sur des CMS comme Shopify et WordPress que sur
              des technologies plus modernes comme Nuxt.js, avec une compréhension full stack des
              projets web.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <UBadge color="primary" variant="subtle">Nuxt.js</UBadge>
              <UBadge color="primary" variant="subtle">Shopify</UBadge>
              <UBadge color="primary" variant="subtle">WordPress</UBadge>
              <UBadge color="primary" variant="subtle">Full stack</UBadge>
              <UBadge color="primary" variant="subtle">UX & conversion</UBadge>
            </div>
          </div>
        </div>
      </UCard>
    </div>
    <div class="mt-12 text-center">
  <p class="text-sm uppercase tracking-wider text-primary font-semibold">
    Compétences complémentaires
  </p>

  <p class="mt-4 text-lg text-muted max-w-3xl mx-auto leading-relaxed">
    Je possède également des compétences en GEO (Generative Engine Optimization),
    en e-mail marketing via des outils comme Mailchimp et Mailjet, ainsi qu’en
    paid media et stratégies publicitaires digitales orientées performance.
  </p>
</div>

    <UPageSection>
      <UPageCTA
        title="Un projet à développer ?"
        description="SEO, SEA ou création de site internet : discutons de votre présence digitale et des leviers les plus pertinents pour avancer."
        variant="subtle"
        :links="[{
          label: 'Me contacter',
          to: '/contact',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral'
        }]"
      />
    </UPageSection>
  </UContainer>
</template>