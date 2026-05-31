<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

function submitForm() {
  console.log(form)
  alert('Message envoyé !')
}
</script>

<template>
  <div class="min-h-screen bg-[#07110b] text-white">
    <UContainer class="py-24">
      <div class="max-w-3xl mx-auto">

        <div class="mb-12 text-center">
          <p class="font-semibold uppercase tracking-[0.35em] text-[#B7F34D]">
            HAWK
          </p>

          <h1 class="mt-4 text-5xl font-black">
            Me contacter
          </h1>

          <p class="mt-6 text-lg text-white/60">
            Une question ? Laissez-moi un message et je vous répondrai rapidement.
          </p>
        </div>

        <UCard
          class="p-8 md:p-10 border border-[#B7F34D]/30 bg-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(183,243,77,0.10)]"
        >
          <form
            class="flex flex-col gap-6"
            @submit.prevent="submitForm"
          >
            <UFormField>
              <template #label>
                <span class="text-white/80 font-medium">
                  Nom complet
                </span>
              </template>

              <UInput
                v-model="form.name"
                placeholder="Votre nom"
                size="xl"
                class="w-full"
                :ui="{
                  base: 'bg-white/10 text-white placeholder:text-white/40 border border-[#B7F34D]/40 ring-0 focus:ring-2 focus:ring-[#B7F34D]/60'
                }"
              />
            </UFormField>

            <UFormField>
              <template #label>
                <span class="text-white/80 font-medium">
                  Adresse email
                </span>
              </template>

              <UInput
                v-model="form.email"
                type="email"
                placeholder='vous@email.com'
                size="xl"
                class="w-full"
                :ui="{
                  base: 'bg-white/10 text-white placeholder:text-white/40 border border-[#B7F34D]/40 ring-0 focus:ring-2 focus:ring-[#B7F34D]/60'
                }"
              />
            </UFormField>

            <UFormField>
              <template #label>
                <span class="text-white/80 font-medium">
                  Message
                </span>
              </template>

              <UTextarea
                v-model="form.message"
                placeholder="Expliquez votre besoin, votre projet ou votre question..."
                :rows="8"
                size="xl"
                class="w-full"
                :ui="{
                  base: 'bg-white/10 text-white placeholder:text-white/40 border border-[#B7F34D]/40 ring-0 focus:ring-2 focus:ring-[#B7F34D]/60'
                }"
              />
            </UFormField>

            <UButton
              type="submit"
              size="xl"
              block
              class="mt-4 bg-[#B7F34D] hover:bg-[#C9FF63] text-black font-semibold border-0"
            >
              Envoyer le message
            </UButton>

          </form>
        </UCard>

      </div>
    </UContainer>
  </div>
</template>