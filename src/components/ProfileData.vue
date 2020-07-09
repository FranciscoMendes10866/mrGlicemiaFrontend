<template>
  <div>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">Personal details</p>
      </div>
      <div>
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-500">Full name</dt>
            <dd
              class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
            >{{ profileData.firstName }}&nbsp;{{ profileData.lastName }}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-500">Country</dt>
            <dd
              class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
            >{{ profileData.country }}</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-500">City</dt>
            <dd
              class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
            >{{ profileData.city }}</dd>
          </div>
          <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-500">Age</dt>
            <dd
              class="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
            >{{ profileData.age }} years old</dd>
          </div>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-500">Picture</dt>
            <dd
              class="mt-1 text-sm leading-5 text-gray-500 sm:mt-0 sm:col-span-2"
            >Change your profile picture to another one of your choice, if you want to.</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'profileData'
  ]
}
</script>
