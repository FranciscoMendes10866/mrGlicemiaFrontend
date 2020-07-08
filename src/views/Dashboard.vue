<template>
  <div>
    <!-- Alert Section -->
    <section>
      <div class="container mx-auto">
        <div class="flex flex-col justify-center align-middle items-center">
          <!-- Alert Component -->
          <Alert
            class="animate__animated animate__bounceInDown"
            @closeAlert="alert = false"
            v-show="alert === true"
          />
        </div>
      </div>
    </section>
    <!-- Table Section -->
    <section>
      <div class="container mx-auto">
        <div class="flex flex-col justify-center align-middle items-center py-48">
          <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
            >
              <button
                @click="openModal"
                class="mb-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                <i class="bx bx-list-plus text-2xl text-indigo-700 align-middle"></i>&nbsp;
                <span class="text-sm">Add</span>
              </button>
              <!-- Table Component -->
              <Table />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Modal Component -->
    <Modal
      class="animate__animated animate__bounceIn"
      @closed="closeModal"
      @send="createRecord"
      v-show="modal === true"
    />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      modal: false,
      alert: false
    }
  },
  methods: {
    openModal () {
      this.modal = true
    },
    closeModal () {
      this.modal = false
    },
    createRecord () {
      this.alert = true
      this.modal = false
    }
  },
  components: {
    Modal: () => import('../components/Modal'),
    Alert: () => import('../components/Alert'),
    Table: () => import('../components/Table')
  }
}
</script>
