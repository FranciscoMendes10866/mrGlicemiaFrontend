<template>
  <div>
    <section class="py-20">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <Form v-if="profileData == null" />
          <Data v-else :profileData="profileData" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.fetchProfileData()
  },
  methods: {
    ...mapMutations('profile', [
      'setFetchData'
    ]),
    ...mapActions('profile', [
      'fetchProfileData'
    ])
  },
  computed: {
    ...mapState('profile', [
      'profileData'
    ])
  },
  components: {
    Form: () => import('../components/ProfileForm'),
    Data: () => import('../components/ProfileData')
  }
}
</script>
