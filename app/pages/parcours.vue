<template>
  <UContainer class="py-24">
    <div class="max-w-3xl mx-auto">
      <div class="max-w-4xl mx-auto text-center mb-20">
  <p class="text-primary font-semibold uppercase tracking-wider">
    Parcours
  </p>

  <h1 class="mt-4 text-5xl font-bold tracking-tight">
    Une évolution portée par le digital et le web
  </h1>

  <p class="mt-6 text-lg text-muted">
    De l’E-Business au marketing digital, en passant par une expérience internationale et des projets web concrets.
  </p>
</div>

      <div class="relative border-l border-primary/30 pl-8 space-y-12">
        <!-- Bachelier -->
        <div class="relative">
          <div class="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-8 ring-primary/10" />
          <p class="text-sm text-primary font-semibold">2022 — 2025</p>
          <h2 class="mt-2 text-2xl font-bold">
            Bachelier en E-Business
          </h2>
          <p class="mt-3 text-muted">
            Formation Bac+3 en E-Business, obtenue avec distinction. Un parcours orienté vers le marketing digital, la stratégie web, l’expérience utilisateur, le référencement et la création de projets numériques.
          </p>
        </div>

        <!-- Erasmus -->
        <div class="relative">
          <div class="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-8 ring-primary/10" />
          <p class="text-sm text-primary font-semibold">Février 2024 — Juillet 2024</p>
          <h2 class="mt-2 text-2xl font-bold">
            Erasmus à Maribor, Slovénie
          </h2>
          <p class="mt-3 text-muted">
            Expérience internationale à l’Université de Maribor, au sein de la Faculty of Electrical Engineering and Computer Science. Une immersion enrichissante dans un environnement technique, multiculturel et anglophone.
          </p>
        </div>

        <!-- Stage -->
        <div class="relative">
          <div class="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-8 ring-primary/10" />
          <p class="text-sm text-primary font-semibold">Février 2025 — Mai 2025</p>
          <h2 class="mt-2 text-2xl font-bold">
            E-Business Analyst chez Col&MacArthur
          </h2>
          <p class="mt-3 text-muted">
            Stage réalisé chez Col&MacArthur, maison horlogère belge basée à Ans. Travail autour de l’écosystème digital, du site e-commerce, du contenu, de l’analyse UX et de l’amélioration du parcours client.
          </p>
        </div>

        <!-- Webup -->
        <div class="relative">
          <div class="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-8 ring-primary/10" />
          <p class="text-sm text-primary font-semibold">Depuis 2025</p>
          <h2 class="mt-2 text-2xl font-bold">
            Création de sites web & SEO chez Webup
          </h2>
          <p class="mt-3 text-muted">
            Accompagnement de PME et d’indépendants dans la création de sites internet, l’optimisation SEO et le développement de leur visibilité en ligne, au sein de Webup, agence du Groupe Expansion à Namur.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-24">
  <UCard class="overflow-hidden">
    <div class="grid md:grid-cols-2 items-center">
      
      <!-- Photo -->
      <div class="h-full">
        <img
          src="/arthur.jpeg"
          alt="Arthur Longrée"
          class="w-full h-full object-cover"
        >
      </div>

      <!-- Texte -->
      <div class="p-8 md:p-12">
        <p class="text-sm font-semibold text-primary uppercase tracking-wider">
          À propos
        </p>

        <h2 class="mt-4 text-4xl font-bold tracking-tight">
          Salut, c’est Arthur 👋
        </h2>

        <p class="mt-6 text-lg text-muted leading-relaxed">
          Passionné par le marketing digital, le web et les nouvelles technologies,
          j’aime comprendre comment les entreprises peuvent développer leur présence
          en ligne de manière moderne, claire et performante.

          Entre SEO, publicité digitale, création de sites internet et expérience
          utilisateur, je cherche constamment à apprendre, tester et construire
          des projets concrets.
        </p>

        <p class="mt-4 text-lg text-muted leading-relaxed">
          Aujourd’hui, j’accompagne principalement des PME et indépendants dans
          leur visibilité digitale tout en continuant à approfondir mes compétences
          techniques et stratégiques.
        </p>
      </div>
    </div>
  </UCard>
</div>
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
  </UContainer>
</template>