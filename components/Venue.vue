<template lang="pug">
.section.post-section
  .nav-target#venue
  .container__inner
    h1
      | Venue
    .half
      img(src="~static/img/learnAcademy-1.jpg" alt="Learn Academy, San Diego")
      img(src="~static/img/learnAcademy-2.jpg" alt="Learn Academy, San Diego")
    .half.text-left
      h2: strong Learn Academy
      p
        | The Community Code Challenge (September 16) will take place in the
        strong  Learn Academy 
        | Campus, near the heart of downtown San Diego.

      p
        strong Address:
        br
        | 704 J St
        br
        | San Diego, CA 92101
      a.button.button--dark(href="https://www.google.com/maps/place/LEARN/@32.70961,-117.1579991,15z/data=!4m2!3m1!1s0x0:0x4cb38acc42b18a7e?sa=X&ved=0ahUKEwj62ou2rcbUAhUIzGMKHZE-A5sQ_BIIswUwaQ", target="_BLANK") SEE THE MAP
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .half
    display: inline-block
    max-width: 100%
    vertical-align: middle
    text-align: left
    padding: 0 20px

    img
      max-width: 100%

    @media #{$medium-up}
      max-width: calc(50% - 40px)

  .button
    margin-top: 20px
    font-weight: 400
    font-size: 16px
</style>
