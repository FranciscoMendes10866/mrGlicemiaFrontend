<template>
  <div>
    <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
      <div class="flex-1 flex justify-between items-center">
        <router-link to="/">
          <i class="bx bx-fingerprint text-4xl text-indigo-700"></i>
        </router-link>
      </div>

      <label for="menu-toggle" class="pointer-cursor lg:hidden block">
        <i class="bx bx-menu text-4xl text-gray-700"></i>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
        <nav>
          <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li>
              <router-link
                v-show="!isLoggedIn"
                to="/"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-700"
              >Home</router-link>
            </li>
            <li>
              <router-link
                v-show="isLoggedIn"
                to="/dashboard"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-700"
              >Table</router-link>
            </li>
            <li>
              <router-link
                v-show="!isLoggedIn"
                to="/register"
                class="px-5 py-3 shadow-md lg:ml-5 block bg-white hover:bg-gray-100 text-indigo-700 font-bold rounded"
              >Get started</router-link>
            </li>
          </ul>
        </nav>
        <router-link
          v-show="isLoggedIn"
          to="/profile"
          class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor text-gray-600"
        >
          <p>Francisco Mendes</p>
        </router-link>
        <router-link
          v-show="isLoggedIn"
          to="/profile"
          class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
        >
          <img
            class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
            src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1593786122/glicemiaPics/rtuho4lmn4vhdqjh4uno.jpg"
            alt="Profile Picture"
          />
        </router-link>
        <button
          class="px-5 py-3 shadow-md lg:ml-5 block bg-white hover:bg-gray-100 text-indigo-700 font-bold rounded"
          v-show="isLoggedIn"
          @click.prevent="logoutAccount"
        >Logout</button>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  },
  methods: {
    ...mapActions('auth', [
      'logoutAccount'
    ])
  }
}
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
