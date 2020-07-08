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
            :class="{ 'bg-indigo-700 text-white': currentTab == 1 }"
            class="py-4 px-4 font-bold tracking-wide rounded hover:shadow-lg"
          >Mobile</button>
          <button
            @click.prevent="selectTab(2)"
            :class="{ 'bg-indigo-700 text-white': currentTab == 2 }"
            class="py-4 px-4 font-bold tracking-wide rounded hover:shadow-lg ml-4"
          >Secure</button>
          <button
            @click.prevent="selectTab(3)"
            :class="{ 'bg-indigo-700 text-white': currentTab == 3 }"
            class="py-4 px-4 font-bold tracking-wide rounded hover:shadow-lg ml-4"
          >Data</button>
          <button
            @click.prevent="selectTab(4)"
            :class="{ 'bg-indigo-700 text-white': currentTab == 4 }"
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
              <div class="font-bold text-sm md:text-xl mb-2">
                <i :class="item.icon">
                  <span
                    class="font-black text-black text-2xl md:text-3xl tracking-wide"
                  >&nbsp;{{ item.title }}</span>
                </i>
              </div>
              <p
                class="text-gray-700 text-sm md:text-base mt-4 leading-loose tracking-wide mb-4"
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
              <div class="font-bold text-sm md:text-xl mb-2">
                <i :class="item.icon">
                  <span
                    class="font-black text-black text-2xl md:text-3xl tracking-wide"
                  >&nbsp;{{ item.title }}</span>
                </i>
              </div>
              <p
                class="text-gray-700 text-sm md:text-base mt-4 leading-loose tracking-wide mb-4"
              >{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- Card Data -->
        <div
          v-if="currentTab == 3"
          class="flex flex-wrap justify-around md:justify-start lg:justify-start xl:justify-evenly"
        >
          <div
            class="max-w-sm rounded shadow-md md:shadow lg:shadow-md xl:shadow-lg mt-8 md:mt-6 lg:mt-6 xl:mt-0 lg:ml-8 animate__animated animate__bounceInUp"
            v-for="item in data"
            :key="item.id"
          >
            <div class="px-6 py-4">
              <div class="font-bold text-sm md:text-xl mb-2">
                <i :class="item.icon">
                  <span
                    class="font-black text-black text-2xl md:text-3xl tracking-wide"
                  >&nbsp;{{ item.title }}</span>
                </i>
              </div>
              <p
                class="text-gray-700 text-sm md:text-base mt-4 leading-loose tracking-wide mb-4"
              >{{ item.content }}</p>
            </div>
          </div>
        </div>
        <!-- Card More -->
        <div
          v-if="currentTab == 4"
          class="flex flex-wrap justify-around md:justify-start lg:justify-start xl:justify-evenly"
        >
          <div
            class="max-w-sm rounded shadow-md md:shadow lg:shadow-md xl:shadow-lg mt-8 md:mt-6 lg:mt-6 xl:mt-0 lg:ml-8 animate__animated animate__bounceInUp"
            v-for="item in more"
            :key="item.id"
          >
            <div class="px-6 py-4">
              <div class="font-bold text-sm md:text-xl mb-2">
                <i :class="item.icon">
                  <span
                    class="font-black text-black text-2xl md:text-3xl tracking-wide"
                  >&nbsp;{{ item.title }}</span>
                </i>
              </div>
              <p
                class="text-gray-700 text-sm md:text-base mt-4 leading-loose tracking-wide mb-4"
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
          icon: 'bx bx-check-shield text-3xl text-indigo-700',
          title: 'Authentication',
          content: 'The auth strategy used makes it safer and simples for you to create and login into an account.'
        },
        {
          id: 2,
          icon: 'bx bx-shield-quarter text-3xl text-indigo-700',
          title: 'Authorization',
          content: 'The backend is always validating if you have the access and the permission to a certain functionality.'
        }
      ],
      data: [
        {
          id: 1,
          icon: 'bx bx-server text-3xl text-indigo-700',
          title: 'Rest API',
          content: 'The API was built in Node.js with TypeScript, making all the code more consistent and it was deployed on Heroku.'
        },
        {
          id: 2,
          icon: 'bx bx-data text-3xl text-indigo-700',
          title: 'Postgres',
          content: 'The database toolkit used was Prisma and the database dialect chosen was Postgres.'
        },
        {
          id: 3,
          icon: 'bx bx-pyramid text-3xl text-indigo-700',
          title: 'Prisma',
          content: 'A database toolkit that replaces tradicional ORM\'s, making easy the access to the database.'
        }
      ],
      more: [
        {
          id: 1,
          icon: 'bx bx-cuboid text-3xl text-indigo-700',
          title: 'Vuex',
          content: 'To have maximum control of the data present in the frontend, it was necessary to use a state manager such as Vuex.'
        },
        {
          id: 2,
          icon: 'bx bx-diamond text-3xl text-indigo-700',
          title: 'Tailwind',
          content: 'To make all the styling as close as it should be from the UI Design, Tailwind was the best choice for being so esasy and intuitive.'
        },
        {
          id: 3,
          icon: 'bx bx-sticker text-3xl text-indigo-700',
          title: 'Animate.css',
          content: 'To make the UX better, it was used an animation library to make the job easier in this field.'
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
