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
                to="/"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-700"
              >Product</router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-700"
              >Features</router-link>
            </li>
            <li>
              <router-link
                to="/"
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-700"
              >Project</router-link>
            </li>
            <li>
              <button
                to="/"
                class="px-5 py-3 shadow-md lg:ml-5 block bg-white hover:bg-gray-100 text-indigo-700 font-bold rounded"
              >Get started</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}
</style>
