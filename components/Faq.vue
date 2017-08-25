<template lang="pug">
.section.faq-section
  .container__inner
    .nav-target#tickets
    h1 Got Questions?
    p Check out our frequently asked questions:
    a.button(href="/faq") FAQ
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.faq-section
  background-color: $color-green--dark
  text-align: center

  h1, p
    color: #fff
    margin-top: 0
    margin-bottom: 30px

  p
    font-size: 24px
    margin-bottom: 40px

.button
  background-color: #fff
  color: $color-green--dark

  &:hover
    background-color: lighten($color-text, 50%)
</style>
