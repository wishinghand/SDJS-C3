<template>
<div>
  <navbar></navbar>

  <nuxt></nuxt>

  <footer-section></footer-section>
</div>
</template>

<script>
import Navbar from '~components/Navbar'
import FooterSection from '~components/Footer'

export default {
  components: { Navbar, FooterSection},
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  }
}
</script>

<style lang="sass">
@import ~assets/css/style

</style>
