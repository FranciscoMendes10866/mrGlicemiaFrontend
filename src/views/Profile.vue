<template>
  <div>
    <section class="py-20">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <Form
            v-if="profileData == null"
            :firstNameValue="firstName"
            :lastNameValue="lastName"
            :countryValue="country"
            :cityValue="city"
            :ageValue="age"
            :pictureValue="picture"
            @firstNameInput="setFirstName"
            @lastNameInput="setLastName"
            @countryInput="setCountry"
            @cityInput="setCity"
            @ageInput="setAge"
            @pictureInput="setPicture"
            @submitForm="createProfile"
          />
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
      'setFetchData',
      'setFirstName',
      'setLastName',
      'setCountry',
      'setCity',
      'setAge',
      'setPicture'
    ]),
    ...mapActions('profile', [
      'fetchProfileData',
      'createProfile'
    ])
  },
  computed: {
    ...mapState('profile', [
      'profileData',
      'firstName',
      'lastName',
      'country',
      'city',
      'age',
      'picture'
    ])
  },
  components: {
    Form: () => import('../components/ProfileForm'),
    Data: () => import('../components/ProfileData')
  }
}
</script>
