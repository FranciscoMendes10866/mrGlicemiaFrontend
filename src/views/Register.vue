<template>
  <div class="about">
    <div class="py-48 flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h2
            class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
          >Create an account.</h2>
        </div>
        <!-- Register Form Component -->
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    RegisterForm: () => import('../components/RegisterForm')
  }
}
</script>
