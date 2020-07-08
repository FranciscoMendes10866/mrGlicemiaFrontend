<template>
  <div class="about">
    <div class="py-48 flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">Sign in.</h2>
        </div>
        <!-- Register Form Component -->
        <AuthForm
          email="Email address"
          :emailValue="loginEmail"
          @emailInput="setLoginEmail"
          password="Password"
          :passwordValue="loginPassword"
          @passwordInput="setLoginPassword"
          @submitForm="loginAccount"
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
        button: 'Login',
        callToAction: 'If you don\'t have an account. Then ',
        link: 'register',
        url: '/register'
      }
    }
  },
  components: {
    AuthForm: () => import('../components/AuthForm')
  },
  methods: {
    ...mapMutations('auth', [
      'setLoginEmail',
      'setLoginPassword',
      'setLoginError'
    ]),
    ...mapActions('auth', [
      'loginAccount'
    ])
  },
  computed: {
    ...mapState('auth', [
      'loginEmail',
      'loginPassword'
    ])
  }
}
</script>
