<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="pt-16 md:pt-24 pb-48 md:pb-56">
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-full">
            <h1
              class="text-4xl font-black md:text-6xl ml-5 md:ml-0 text-left md:text-center tracking-wide leading-snug md:leading-normal animate__animated animate__fadeIn"
            >
              The Application for
              <br />
              <span class="text-indigo-700">Diabetic</span> people.
            </h1>
            <p
              class="leading-loose text-left ml-5 md:ml-0 md:text-center font-semi-bold text-sm md:text-lg text-gray-600 mt-8 animate__animated animate__fadeIn"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />Vivamus venenatis mi eget diam elementum, non condimentum.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Second section -->
    <section class="bg-purple-800 py-16 md:py-24">
      <div class="container mx-auto">
        <div class="grid grid-col-1"></div>
        <div class="flex justify-center">
          <img
            class="p-6 md:p-0 -mt-48 md:-mt-56 animate__animated animate__fadeInUp"
            src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1593900528/glicemiaLandingPage/image_bkwduh.png"
            alt
          />
        </div>
        <div class="flex justify-start">
          <div class="w-full">
            <h1
              class="text-white font-black text-left tracking-wide leading-snug md:leading-normal mt-8 md:mt-20 ml-5 md:ml-0 xl:ml-16 text-4xl md:text-6xl"
            >What's Included?</h1>
            <p
              class="text-ledt font-semi-bold text-sm md:text-lg text-white mt-8 leading-loose ml-5 md:ml-0 xl:ml-16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />Vivamus venenatis mi eget diam elementum, non condimentum.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Features Section -->
    <Features />
    <section class="bg-gray-50 py-20">
      <div class="container mx-auto">
        <div
          class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <h2
            class="text-3xl font-black md:text-4xl ml-5 md:ml-0 text-left md:text-left tracking-wide leading-snug md:leading-normal"
          >
            Ready to try it?
            <br />
            <span class="text-indigo-700">Start for free now.</span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <router-link
                to="/register"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >Get started</router-link>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <router-link
                to="/register"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >Learn more</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  components: {
    Features: () => import('../components/Features')
  }
}
</script>
