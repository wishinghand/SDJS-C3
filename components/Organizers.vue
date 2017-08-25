<template lang="pug">
.section.organizers-section.post-section
  .container__inner
    h1
      | People behind the conference

    .organizers
      .organizer
        img.organizer__image(src="~static/img/jason.jpg" alt="Jason Land")
        .organizer__title
          | Jason Land
        .organizer__social
          a.icon.icon--github(href="https://github.com/wishinghand" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/wishinghand" target="_blank")

      .organizer
        img.organizer__image(src="~static/img/sarah.jpg" alt="Sarah Haroon")
        .organizer__title
          | Sarah Haroon
        .organizer__social
          a.icon.icon--github(href="https://github.com/sharo-0n" target="_blank")
          //- a.icon.icon--twitter(href="https://twitter.com/wishinghand" target="_blank")

      .organizer.organizer--last
        img.organizer__image(src="~static/img/valerie.jpg" alt="Valerie Smith")
        .organizer__title
          | Valerie Smith
        .organizer__social
          a.icon.icon--github(href="https://github.com/ValHalla358" target="_blank")
          //- a.icon.icon--twitter(href="https://twitter.com/damiandulisz" target="_blank")

      .organizer
        img.organizer__image(src="~static/img/sunny.jpg" alt="Sunny Datko")
        .organizer__title
          | Sunny Datko
        .organizer__social
          a.icon.icon--github(href="https://github.com/sunnydatko" target="_blank")
          a.icon.icon--twitter(href="https://twitter.com/sunnydatko" target="_blank")

      .organizer__company
        .organizer__content
          p.post-section__paragraph
            | Organized and supported by

          a.organizers__logo(href="http://sandiegojs.org" target="_blank")
            | sandiego
            span.logo-accent .js

    .organizers-more
      .organizers-more__text
        | #[a(href="http://sandiegojs.org" target="_blank") SDJS] is a 2700+ member strong community full of some amazing people who love JavaScript.
</template>

<script>
export default {
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.organizers
  display: flex
  justify-content: space-between
  flex-wrap: wrap

.section.organizers-section
  padding-bottom: 0

.organizer
  width: 100%
  margin: 10px 0 40px 0

  @media #{$medium-up}
    width: 50%

  @media #{$large-up}
    width: 25%
    margin: 10px 0

.organizer__title
  font-size: 24px
  font-weight: 600
  color: $color-text

.organizer__subtitle
  font-size: 18px
  font-weight: 300
  color: $color-blue

.organizer__image
  max-width: 202px
  margin-bottom: 15px
  border-radius: 300px

.organizer__social
  margin-top: 15px

  .icon--twitter
    margin-left: 15px

.organizer__company
  width: 100%
  margin: 10px auto

  @media #{$large-up}
    width: 35%

.organizers__logo
  color: $color-text
  font-size: 2rem
  font-weight: 700

  @media screen and (min-width:639px)
    font-size: 3rem

  .logo-accent
    color: #1884C3

.organizer__content
  display: inline-block

  @media #{$large-up}
    display: flex
    flex-direction: column
    margin-top: 45px

  .post-section__paragraph
    text-align: center

.organizers-more
  margin-top: 60px

.organizers-more__text,
.organizers-more__button
  margin: 10px 0

  @media #{$large-up}
    display: inline-block
    vertical-align: middle

.organizers-more__text
  font-size: 18px
  font-weight: 300
  color: $color-text
  line-height: 1.4
  text-align: left

  a
    font-weight: 600
    text-decoration: none
    color: black

  @media #{$large-up}
    font-size: 20px
    text-align: center

.organizers-more__button
  background-color: $color-red

  &:hover
    background-color: lighten($color-red, 10%)
</style>
