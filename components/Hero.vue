<template lang="pug">
  .hero-banner
    .hero-banner__content
      .hero
        //- logo-type
        .robot-emoji
          img(src="~static/img/robot.png")
        h1 #[strong Community Code Challenge]
        h2 Rise of the (chat)Bots!
        .robot-emoji
          img(src="~static/img/woman-programmer.png")
          img(src="~static/img/alien.png")
          img(src="~static/img/man-programmer.png")
        br
        h2.hero-banner__subheader The first official SanDiegoJS Community Code Challenge!
        hr


      h2.hero-banner__subheader Hosted By:
      a(href="https://www.learnacademy.org/")
        img.host_logo(src="~static/img/LEARN_logo.png" alt="Learn Academy logo")
      h2.hero-banner__subheader
        br
        | 9:30 AM to 9:30 PM
        br
        | San Diego, California • September 16, 2017
      a.post-section__button.button(href="https://www.eventbrite.com/e/sandiegojs-community-code-challenge-2017-tickets-36116433224")
        | Get the tickets!
</template>

<script>
import LogoType from './LogoType.vue'

export default {
  components: { LogoType },
  methods: {
    trackTicketsEvent (event) {
      ga('send', 'event', {
        eventAction: 'click',
        eventLabel: event.target.href,
        eventCategory: 'Tickets link - hero',
        transport: 'beacon'
      })
      _pq.push(['track', 'GoToTickets'])
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.hero
  margin-top: 2rem

hr
  width: 25%
  height: 0
  border: 2px solid $color-green--dark
  margin: 3rem auto

h1
  margin-bottom: 2rem

.robot-emoji
  img
    width: 30%

    @media #{$medium-up}
      width: 10%

.hero-banner
  text-align: center
  position: relative
  transform: translateZ(0)

  @media #{$medium-up}
    background-size: contain
    background-position: center

  @media only screen and (min-width: 1900px)
    background-size: cover

  .post-section__button
    margin: 25px 0

.host_logo
  width: 50%

  @media #{$medium-up}
    width: 20%

.hero-banner__content
  padding-top: 100px

  // @media #{$large-up}
  //   padding-top: 480px
  //
  // @media #{$xlarge-up}
  //   padding-top: 520px

.hero-banner__image
  display: block
  margin: auto
  width: 167px

.hero-banner__header
  font-family: $font
  font-size: 40px
  color: $color-white
  font-weight: 300
  display: inline-block
  position: relative
  margin:
    top: 0
    bottom: 5px

  @media #{$medium-up}
    font-size: 62px

  @media #{$large-up}
    font-size: 82px

  .hero-banner__header__place
    color: $color-green--dark
    font-size: 28px
    position: absolute
    bottom: -15px
    right: 15px

.hero-banner__subheader
  font-family: $font
  font-size: 18px
  color: $color-text
  font-weight: 300
  letter-spacing: 1pt
  text-transform: uppercase
  margin-top: 0

  &--last
    margin-top: 45px
    text-transform: none

  @media #{$medium-up}
    font-size: 22px

  @media #{$large-up}
    font-size: 26px
</style>
