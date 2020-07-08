<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="flex flex-col justify-center align-middle items-center py-48">
          <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
            >
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
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div class="flex items-center">
                        <div class="ml-4">
                          <div class="text-sm leading-5 font-medium text-gray-900">120</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div class="text-sm leading-5 text-gray-900">1</div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div class="text-sm leading-5 text-gray-900">20-04-2020</div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >
                      <div class="text-sm leading-5 text-gray-900">True</div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                    >
                      <a href="#" class="text-yellow-600 hover:text-yellow-900">Edit</a>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                    >
                      <a href="#" class="text-red-600 hover:text-red-900">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>
