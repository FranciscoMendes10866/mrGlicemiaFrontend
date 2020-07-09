<template>
  <div>
    <!-- Modal Component -->
    <section class="z-20">
      <div class="container mx-auto">
        <div class="flex justify-center h-screen items-center z-20 absolute">
          <Modal
            class="animate__animated animate__bounceIn"
            @closed="closeModal"
            @sendForm="createRecord"
            v-show="modal === true"
            :insulinValue="insulin"
            :glucoseValue="glucose"
            :dateTimeValue="dateTime"
            :medicationValue="medication"
            @insulinInput="setInsulin"
            @glucoseInput="setGlucose"
            @dateTimeInput="setDateTime"
            @medicationInput="setMedication"
          />
        </div>
      </div>
    </section>
    <!-- Alert Section -->
    <section class="z-10">
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
    <section class="z-0">
      <div class="container mx-auto">
        <div class="flex flex-col justify-center align-middle items-center py-32">
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
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

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
    },
    ...mapMutations('records', [
      'setInsulin',
      'setGlucose',
      'setDateTime',
      'setMedication'
    ]),
    ...mapActions('records', [
      'createRecord'
    ])
  },
  components: {
    Modal: () => import('../components/Modal'),
    Alert: () => import('../components/Alert'),
    Table: () => import('../components/Table')
  },
  computed: {
    ...mapState('records', [
      'insulin',
      'glucose',
      'dateTime',
      'medication'
    ])
  }
}
</script>
