<template lang="pug">
div
  hero-section

  tickets-section#tickets
  .container
    .container__inner.section.post-section
      h1 Mentors
      mentors-list(:mentors="mentors")
      .center
        nuxt-link(to="/mentors")
          button.button.speaker-button Get to know them
    faq-section
    venue-section
    sponsors-section
    organizers-section
</template>

<script>
import MentorsList from '~components/MentorsList'
import HeroSection from '~components/Hero'
import OrganizersSection from '~components/Organizers'
import TicketsSection from '~components/Tickets'
import VenueSection from '~components/Venue'
import FaqSection from '~components/Faq'
import SponsorsSection from '~components/Sponsors'
import mentors from '../content/mentors/mentor-list'

export default {
  components: {
    HeroSection,
    OrganizersSection,
    MentorsList,
    FaqSection,
    SponsorsSection,
    TicketsSection,
    VenueSection
  },
  head: {
    title: 'SDJS Community Code Challenge 2017'
  },
  data () {
    return {
      mentors
    }
  }
}
</script>

<style lang="sass" scoped>
  @import ~assets/css/base/helpers

  .speaker-button
    margin: 40px 0 10px

  .container
    padding-top: 50px

  .center
    margin-top: 20px

  h3
    margin: 50px 0 0
    font-size: 24px
    font-family: "Source Sans Pro", sans-serif
    font-weight: 300
    color: #35485E

    @media #{$medium-up}
      font-size: 32px
</style>
