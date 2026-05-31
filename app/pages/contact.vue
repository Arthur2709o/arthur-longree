<script setup>
const form = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
})

function submitForm() {
  console.log(form)
  alert('Message envoyé !')
}
</script>

<template>
  <UContainer class="py-24">
    <div class="max-w-3xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-5xl font-bold">
          Me contacter
        </h1>

        <p class="mt-6 text-lg text-muted">
          Une question ? Laissez-moi un message et je vous répondrai rapidement.
        </p>
      </div>

      <UCard class="p-6 md:p-10">
        <form class="flex flex-col gap-6" @submit.prevent="submitForm">
          <UFormField label="Nom complet">
            <UInput
              v-model="form.name"
              placeholder="Votre nom"
              size="xl"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Adresse email">
            <UInput
              v-model="form.email"
              type="email"
              placeholder="vous@email.com"
              size="xl"
              class="w-full"
            />
          </UFormField>

          <UFormField label="Message">
            <UTextarea
              v-model="form.message"
              placeholder="Expliquez votre besoin, votre projet ou votre question..."
              :rows="8"
              size="xl"
              class="w-full"
            />
          </UFormField>

          <UButton
            type="submit"
            size="xl"
            block
            class="mt-4"
          >
            Envoyer le message
          </UButton>
        </form>
      </UCard>
    </div>
  </UContainer>
</template>