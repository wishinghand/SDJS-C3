<template lang="pug">
.container
  .container__inner.post-section
    h1
      | Mentors

    mentors-list(:mentors="mentors", :adjust-img-url="true")

    .center
      nuxt-link(to="/program")
        //- button.button.speaker-button Read about the talks

    h2
      | And more to come!

    .post-section.center.cfp-section#apply

      include:markdown-it ../content/mentors/cfp.md

      a.post-section__button.button(
         href="sandiegojavascript@gmail.com"
      )
        | Apply as a mentor

      p.post-section__paragraph
        | We get back to you within a few days.
</template>

<script>
import MentorsList from '../components/MentorsList'
import mentors from '../content/mentors/mentor-list'

export default {
  head: {
    title: 'Mentors | SDJS Community Code Challenge'
  },
  components: { MentorsList },
  data () {
    return {
      mentors
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

h2
  margin: 60px 0 100px

.container__inner
  text-align: center
  z-index: 2

.cfp-section
  border-top: 1px solid #ddd
  padding-top: 60px

.speaker-button
  margin-top: 30px
</style>
