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
        <AuthForm
          email="Email address"
          :emailValue="registerEmail"
          @emailInput="setRegisterEmail"
          password="Password"
          :passwordValue="registerPassword"
          @passwordInput="setRegisterPassword"
          @submitForm="createAccount"
          :myProps="myProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      myProps: {
        button: 'Register',
        callToAction: 'If you already have an account. Then ',
        link: 'login',
        url: '/login'
      }
    }
  },
  components: {
    AuthForm: () => import('../components/AuthForm')
  },
  methods: {
    ...mapMutations('auth', [
      'setRegisterEmail',
      'setRegisterPassword',
      'setRegisterError'
    ]),
    ...mapActions('auth', [
      'createAccount'
    ])
  },
  computed: {
    ...mapState('auth', [
      'registerEmail',
      'registerPassword'
    ])
  }
}
</script>
