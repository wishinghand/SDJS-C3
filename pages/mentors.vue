<template lang="pug">
.container
  .container__inner.post-section
    h1
      | Mentors

    mentors-list(:mentors="mentors", :adjust-img-url="true")

    .center
      nuxt-link(to="/program")
        button.button.speaker-button Read about the talks

    h2
      | More announcements soon!

    .post-section.center.cfp-section#apply

      include:markdown-it ../content/mentors/cfp.md

      a.post-section__button.button(
        href="https://docs.google.com/forms/d/e/1FAIpQLSdtbxBpV0j_zCnELXQuIkeGH8x6gaOWE0J8tTsAdpa0O5MYOw/viewform"
        target="_blank"
      )
        | Apply as a speaker

      p.post-section__paragraph
        | We will come back to you within a few days.
</template>

<script>
import MentorsList from '../components/MentorsList'
import mentors from '../content/mentors/mentor-list'

export default {
  head: {
    title: 'VueConf 2017 | Mentors'
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
