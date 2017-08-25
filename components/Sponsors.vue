<template lang="pug">
.section.sponsors-section.center
  .container__inner
    h1 Sponsors
    .sponsors__container
      .div
        a(href="https://codeship.com/", target="_BLANK")
          img.sponsor__image.microsoft(src="~assets/img/Microsoft-logo.png")

    p We’re also still looking for sponsors.
    p Help us make it the best possible event for the community.
    a.button(href="mailto:sandiegojavascript@gmail.com") Contact us
    br
    a.button(href="/sponsorship") Why Become A Sponsor?
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers
  .button
    margin-top: 40px
    background-color: $color-white
    color: $color-green--dark

    &:hover
      background-color: lighten($color-text, 50%)

  .sponsors-section
    background-color: $color-green--dark

    h1, p
      color: #fff
      margin-top: 0
      margin-bottom: 30px
    h2
      margin-top: 40px
      margin-bottom: 40px
  .sponsors__container
    margin: 60px 0
  .sponsor__image
    max-width: 90%
    width: 280px
    height: auto
    // max-height: 100px
    margin: 0 20px 20px 20px
    vertical-align: middle
    display: inline-block

  .microsoft
    background-color: white;
</style>
