<template>
  <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
    <div class="container mx-auto px-4">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
        <div class="sm:w-full px-4 md:w-1/6">
          <router-link to="/">
            <i class="bx bx-fingerprint text-4xl text-indigo-700"></i>
          </router-link>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 class="font-bold mb-2">Made by:</h6>
          <a
            href="https://francisco-mendes.tk/"
            target="blank"
            class="not-italic mb-4 text-sm text-indigo-700"
          >Francisco Mendes</a>
        </div>
        <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
          <h6 class="font-bold mb-2">Source code:</h6>
          <a
            href="https://github.com/FranciscoMendes10866/mrGlicemiaFrontend"
            target="blank"
            class="not-italic mb-4 text-sm text-indigo-700"
          >Github</a>
        </div>
        <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
          <button
            to="/"
            class="px-5 py-3 shadow-md lg:ml-5 block bg-white hover:bg-gray-100 text-indigo-700 font-bold rounded"
          >Getting Started</button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
