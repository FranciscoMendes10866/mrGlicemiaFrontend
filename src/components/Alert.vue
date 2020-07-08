<template>
  <div>
    <div
      class="p-2 bg-purple-700 items-center leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span class="flex rounded-full bg-white uppercase px-2 py-1 text-xs font-bold mr-3">Alert</span>
      <span
        class="font-semibold mr-2 text-left flex-auto text-white"
      >A new Record was created with success.</span>
      <a class="cursor-pointer" @click="CloseIt">
        <i class="bx bx-check text-2xl text-white align-middle" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    CloseIt () {
      this.$emit('closeAlert')
    }
  }
}
</script>
