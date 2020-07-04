<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style src="./assets/css/styles.main.css"></style>

<script>
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar,
    Footer: () => import('./components/Footer')
  }
}
</script>
