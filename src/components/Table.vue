<template>
  <div>
    <table class="min-w-full">
      <thead>
        <tr>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Glucose</th>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Insulin</th>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Date</th>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Medication</th>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Edit</th>
          <th
            class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
          >Delete</th>
        </tr>
      </thead>
      <tbody class="bg-white" v-if="recordsList !== undefined || recordsList.length !== 0">
        <tr v-for="record in recordsList" :key="record.key">
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm leading-5 font-medium text-gray-900">{{ record.glucose }}</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900 text-center">{{ record.insulin }}</div>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">{{ record.dateTime }}</div>
          </td>
          <td
            class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
          >
            <span
              v-if="record.medication == true"
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            >Took</span>
            <span
              v-else
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
            >Didn't take</span>
          </td>
          <td
            class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
          >
            <a href="#" class="text-yellow-600 hover:text-yellow-900">
              <i class="bx bx-edit text-xl" />
            </a>
          </td>
          <td
            class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
          >
            <button
              @click="deleteRecord(record)"
              class="bg-transparent hover:bg-transparent text-red-600 hover:text-red-900"
            >
              <i class="bx bx-trash text-xl" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h1
      v-if="recordsList === undefined || recordsList.length == 0"
      class="ml-4 py-6 text-center text-sm leading-5 font-medium text-gray-600"
    >
      <span class="text-red-500 font-semibold">It's empty.</span> Start by
      <strong>adding new data</strong> to the platform.
    </h1>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.fetchRecords()
  },
  methods: {
    ...mapMutations('records', [
      'setFetchRecords',
      'setDeleteRecord'
    ]),
    ...mapActions('records', [
      'fetchRecords',
      'deleteRecord'
    ])
  },
  computed: {
    ...mapState('records', [
      'recordsList'
    ])
  }
}
</script>
