<template>
  <div>
    <form class="mt-8" method="POST" @submit.prevent="$emit('submitForm')">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm">
        <div>
          <input
            aria-label="Email address"
            name="email"
            type="email"
            :value="emailValue"
            @input="$emit('emailInput', $event.target.value)"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            :placeholder="email"
          />
        </div>
        <div class="-mt-px">
          <input
            aria-label="Password"
            name="password"
            :value="passwordValue"
            @input="$emit('passwordInput', $event.target.value)"
            type="password"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
            :placeholder="password"
          />
        </div>
      </div>

      <div class="mt-6">
        <button
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          {{ myProps.button }}
        </button>
      </div>

      <p class="mt-3 text-center text-sm leading-5 text-gray-600">
        {{ myProps.callToAction }}
        <router-link
          :to="myProps.url"
          class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
        >{{ myProps.link }}</router-link>.
      </p>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'email',
    'password',
    'emailValue',
    'passwordValue',
    'myProps'
  ]
}
</script>
