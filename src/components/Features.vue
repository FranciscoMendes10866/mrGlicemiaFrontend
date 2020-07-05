<template>
  <div>
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto">
        <!-- Head -->
        <div class="flex flex-auto">
          <div class="w-full">
            <h1
              class="mb-4 text-4xl font-black md:text-6xl ml-5 md:ml-0 text-left md:text-center tracking-wide leading-snug md:leading-normal"
            >Features.</h1>
            <p
              class="leading-loose text-left ml-5 md:ml-0 md:text-center font-semi-bold text-sm md:text-lg text-gray-600 mb-10"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <!-- Tabs -->
        <div class="flex flex-wrap justify-center mb-10">
          <button
            @click.prevent="selectTab(1)"
            :class="{ 'bg-purple-800 text-white': currentTab == 1 }"
            class="py-4 px-4 font-bold tracking-wide rounded hover:shadow-lg"
          >Mobile</button>
          <button
            @click.prevent="selectTab(2)"
            :class="{ 'bg-purple-800 text-white': currentTab == 2 }"
            class="py-4 px-4 font-bold tracking-wide rounded hover:shadow-lg ml-4"
          >Secure</button>
          <button
            @click.prevent="selectTab(3)"
            :class="{ 'bg-purple-800 text-white': currentTab == 3 }"
            class="py-4 px-4 font-bold tracking-wide rounded hover:shadow-lg ml-4"
          >Data</button>
          <button
            @click.prevent="selectTab(4)"
            :class="{ 'bg-purple-800 text-white': currentTab == 4 }"
            class="py-4 px-4 font-bold tracking-wide rounded hover:shadow-lg ml-4"
          >More</button>
        </div>
        <!-- Cards -->
        <!-- Card Mobile -->
        <div
          v-if="currentTab == 1"
          class="flex flex-wrap justify-around md:justify-start lg:justify-start xl:justify-evenly"
        >
          <div
            class="max-w-sm rounded shadow-md md:shadow lg:shadow-md xl:shadow-lg mt-8 md:mt-6 lg:mt-6 xl:mt-0 lg:ml-8 animate__animated animate__bounceInUp"
            v-for="item in mobile"
            :key="item.id"
          >
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                <i :class="item.icon">
                  <span class="font-black text-black text-3xl tracking-wide">&nbsp;{{ item.title }}</span>
                </i>
              </div>
              <p
                class="text-gray-700 text-base mt-4 leading-loose tracking-wide mb-4"
              >{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- Card Secure -->
        <div
          v-if="currentTab == 2"
          class="flex flex-wrap justify-around md:justify-start lg:justify-start xl:justify-evenly"
        >
          <div
            class="max-w-sm rounded shadow-md md:shadow lg:shadow-md xl:shadow-lg mt-8 md:mt-6 lg:mt-6 xl:mt-0 lg:ml-8 animate__animated animate__bounceInUp"
            v-for="item in secure"
            :key="item.id"
          >
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                <i :class="item.icon">
                  <span class="font-black text-black text-3xl tracking-wide">&nbsp;{{ item.title }}</span>
                </i>
              </div>
              <p
                class="text-gray-700 text-base mt-4 leading-loose tracking-wide mb-4"
              >{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      currentTab: 1,
      mobile: [
        {
          id: 1,
          icon: 'bx bx-mobile-alt text-3xl text-indigo-700',
          title: 'PWA',
          content: 'You can have access to the platform in any device. You can use your browser or you can install the app in your system.'
        },
        {
          id: 2,
          icon: 'bx bx-wifi-off text-3xl text-indigo-700',
          title: 'Offline',
          content: 'You can access all your content that was already viewed by you without having any internet connection.'
        },
        {
          id: 3,
          icon: 'bx bx-fast-forward text-3xl text-indigo-700',
          title: 'Fast',
          content: 'You can access all your content that was already viewed by you without having any internet connection.'
        }
      ],
      secure: [
        {
          id: 1,
          icon: 'bx bx-mobile-alt text-3xl text-indigo-700',
          title: 'Asdads',
          content: 'You can have access to the platform in any device. You can use your browser or you can install the app in your system.'
        },
        {
          id: 2,
          icon: 'bx bx-wifi-off text-3xl text-indigo-700',
          title: 'asdadada',
          content: 'You can access all your content that was already viewed by you without having any internet connection.'
        }
      ]
    }
  },
  methods: {
    selectTab (selectedTab) {
      this.currentTab = selectedTab
    }
  }
}
</script>

<style scoped>
</style>
