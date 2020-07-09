<template>
  <div>
    <section class="py-20">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <Form />
        </div>
      </div>
    </section>
    <section class="py-20">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <Data />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
    Form: () => import('../components/ProfileForm'),
    Data: () => import('../components/ProfileData')
  }
}
</script>
