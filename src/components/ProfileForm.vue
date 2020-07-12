<template>
  <div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <div class="px-6 py-4">
        <form
          class="w-full max-w-lg"
          method="post"
          enctype="multipart/form-data"
          @submit.prevent="$emit('submitForm')"
        >
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >First Name</label>
              <input
                :value="firstNameValue"
                @input="$emit('firstNameInput', $event.target.value)"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >Last Name</label>
              <input
                :value="lastNameValue"
                @input="$emit('lastNameInput', $event.target.value)"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >Country</label>
              <input
                :value="countryValue"
                @input="$emit('countryInput', $event.target.value)"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >City</label>
              <input
                :value="cityValue"
                @input="$emit('cityInput', $event.target.value)"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >Age</label>
              <input
                :value="ageValue"
                @input="$emit('ageInput', $event.target.value)"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
              />
            </div>
          </div>
          <div class="py-4">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >Picture</label>
            <input
              :value="pictureValue"
              @input="$emit('pictureInput', $event.target.files[0])"
              accept="image/*"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
            />
          </div>
          <div class="py-4">
            <span class="flex w-full rounded-md shadow-sm sm:w-auto">
              <button
                type="submit"
                class="inline-flex justify-center font-bold w-full rounded-sm border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 text-white shadow-sm hover:bg-purple-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >Submit</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'firstNameValue',
    'lastNameValue',
    'countryValue',
    'cityValue',
    'ageValue',
    'pictureValue'
  ]
}
</script>
