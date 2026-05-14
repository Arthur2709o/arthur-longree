<!-- INTRO PAGE ACCUEIL -->

<template>
  <div>
<section class="relative overflow-hidden">
  <!-- Fond moderne -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
    <div class="absolute right-20 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
  </div>

  <UPageHero
    title="Arthur Longrée"
    description="Passionné par le marketing digital, je vulgarise et t'aide à développer la présence en ligne de ton entreprise gratuitement. Découvre l'ensemble de mes conseils."
    :links="[{
      label: 'Découvrir mes expertises',
      to: '/expertises',
      trailingIcon: 'i-lucide-arrow-right',
      size: 'xl'
    }, {
      label: 'Me contacter',
      to: '/contact',
      icon: 'i-lucide-mail',
      size: 'xl',
      color: 'neutral',
      variant: 'subtle'
    }]"
  />
</section>

<!-- INTRO DOMAINES -->

    <UPageSection
      id="features"
      title="Mes domaines de prédilection"
      description="Démarre l'aventure digitale de ton entreprise avec de solides conseils sur ces différents points."
      :features="[{
  icon: 'i-lucide-search',
  title: 'Search Engine Optimization',
  description: 'Optimisation du référencement naturel afin d’améliorer la visibilité de ton entreprise sur Google et attirer des visiteurs qualifiés.'
}, {
  icon: 'i-lucide-badge-dollar-sign',
  title: 'Search Engine Advertising',
  description: 'Création et gestion de campagnes Google Ads performantes pour générer rapidement des leads, appels et conversions.'
}, {
  icon: 'i-lucide-monitor-smartphone',
  title: 'Création de site internet',
  description: 'Conception de sites modernes, rapides et optimisés pour l’expérience utilisateur, le référencement et la conversion.'
}]"
    />
    <!-- CERTIFICATIONS -->
<UPageSection>
  <div class="max-w-4xl mx-auto text-center mb-12">
    <p class="text-primary font-semibold uppercase tracking-wider">
      Certifications
    </p>

    <h2 class="mt-4 text-4xl font-bold tracking-tight">
      Des compétences validées par des plateformes reconnues
    </h2>

    <p class="mt-6 text-lg text-muted">
      SEO, SEA, publicité digitale, IA, email marketing et création de contenu :
      mes certifications renforcent une approche à la fois stratégique, technique et orientée performance.
    </p>
  </div>

  <div class="overflow-hidden">
    <div class="flex gap-4 animate-[scroll_35s_linear_infinite] w-max">
      <UCard
        v-for="certification in [
          'Google Ads - Réseau de Recherche',
          'Google Ads - Réseau Display',
          'Google Ads - Mesures',
          'Annonces axées sur les performances et optimisées par l’IA',
          'Microsoft Advertising Search',
          'Semrush - Principes de SEO',
          'Semrush - Cours accéléré SEO',
          'Meta - Advertising with Meta',
          'Reddit Ads Fundamentals',
          'AI SEO - Generative Engine Optimization',
          'Mailchimp - E-mail Marketing Campaign',
          'Canva - Les indispensables de l’enseignement'
        ]"
        :key="certification"
        class="min-w-[280px] p-5"
      >
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <UIcon name="i-lucide-award" class="h-5 w-5 text-primary" />
          </div>

          <div>
            <p class="font-semibold leading-snug">
              {{ certification }}
            </p>
            <p class="mt-2 text-sm text-muted">
              Certification validée
            </p>
          </div>
        </div>
      </UCard>

      <UCard
        v-for="certification in [
          'Google Ads - Réseau de Recherche',
          'Google Ads - Réseau Display',
          'Google Ads - Mesures',
          'Annonces axées sur les performances et optimisées par l’IA',
          'Microsoft Advertising Search',
          'Semrush - Principes de SEO',
          'Semrush - Cours accéléré SEO',
          'Meta - Advertising with Meta',
          'Reddit Ads Fundamentals',
          'AI SEO - Generative Engine Optimization',
          'Mailchimp - E-mail Marketing Campaign',
          'Canva - Les indispensables de l’enseignement'
        ]"
        :key="`duplicate-${certification}`"
        class="min-w-[280px] p-5"
      >
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <UIcon name="i-lucide-award" class="h-5 w-5 text-primary" />
          </div>

          <div>
            <p class="font-semibold leading-snug">
              {{ certification }}
            </p>
            <p class="mt-2 text-sm text-muted">
              Certification validée
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </div>

  <div class="mt-12 flex justify-center">
    <UButton
      to="/expertises"
      size="xl"
      trailing-icon="i-lucide-arrow-right"
    >
      Découvrir mes expertises
    </UButton>
  </div>
</UPageSection>

    <UPageSection>
<UPageCTA
  title="Prêt à développer votre présence digitale ?"
  description="SEO, publicité Google, création de site internet, visibilité locale, expérience utilisateur, conversions… Découvrez gratuitement mes conseils et analyses autour du marketing digital moderne."
  variant="subtle"
  :links="[{
  label: 'Me contacter',
  to: '/contact',
  trailingIcon: 'i-lucide-arrow-right',
  color: 'neutral'
}]"
      />
    </UPageSection>
  </div>
</template>
<style>
@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
