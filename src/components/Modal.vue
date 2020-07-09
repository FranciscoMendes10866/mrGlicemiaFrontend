<template>
  <div>
    <form method="POST" @submit.prevent="$emit('sendForm')">
      <div
        class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >Create New Record</h3>
              <div class="mt-6">
                <div class="w-full mb-6 md:mb-0">
                  <input
                    :value="glucoseValue"
                    @input="$emit('glucoseInput', $event.target.value)"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="number"
                    placeholder="Glucose"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div class="w-full mb-6 md:mb-0">
                  <input
                    :value="insulinValue"
                    @input="$emit('insulinInput', $event.target.value)"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="number"
                    placeholder="Insulin"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div class="w-full mb-6 md:mb-0">
                  <input
                    :value="dateTimeValue"
                    @input="$emit('dateTimeInput', $event.target.value)"
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="date"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div class="mt-2">
                <div class="w-full mb-6 md:mb-0">
                  <div class="relative">
                    <select
                      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                      :value="medicationValue"
                      @input="$emit('medicationInput', $event.target.value)"
                    >
                      <option value="true">Took medicine</option>
                      <option value="false">Didn't take</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="submit"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-purple-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-purple-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Submit</button>
          </span>
          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              @click="Cancel"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Close</button>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'insulinValue',
    'glucoseValue',
    'dateTimeValue',
    'medicationValue'
  ],
  methods: {
    Cancel () {
      this.$emit('closed')
    }
  }
}
</script>
