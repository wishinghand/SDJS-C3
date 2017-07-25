<template lang="pug">
.container
  .container__inner.post-section
    h1.agenda__header Sponsor the Community Code Challenge
    h2 Why Sponsor?
    p.body-text San Diego JavaScript Community is the biggest programming meetup in the San Diego area. We connect newcomers to established talent in the Javascript community. Sponsorship enables companies and organizations to interact directly with this talent pool through branded exposure opportunities. Contributing towards the success of our community challenge enables us to create bigger and better events in the years to come, so companies who partner with us can reach an increasingly wider pool of talent.

    p.body-text San Diego JavaScript Community is a 501(c)(3) nonprofit charity. Contributions to the San Diego JavaScript Community Bot Challenge are tax-deductible.

    h2 How Can We Sponsor?

    p.body-text We are seeking companies to help build this event through financial support and mentorship. We also welcome donations of shirts, software licenses, programming eBooks, bags, stickers, and other “swag” for attendees

    p.body-text Below are the different ways in which you can contribute to the San Diego JavaScript Community Bot Challenge.


    div
      table
        thead
          tr
            th
            th Giga
            th Mega
            th Kilo
        tbody
          tr
            td.left-align Featured Logo
            td X
            td X
            td X
          tr
            td.left-align Social Media Mentions
            td X
            td X
            td X
          tr
            td.left-align Company Banners & Signs at Event
            td X
            td X
            td X
          tr
            td.left-align Tech Talk
            td X
            td X
            td
          tr
            td.left-align Sponsored Booth
            td X
            td
            td
          tr
            td.left-align Time on Stage at Kickoff
            td X
            td
            td

    h3 Featured Logo
    p.body-text Company name and logo will be prominently featured on all promotional materials including website, advertising images, and printed brochures. The size and prominence/placement of your logo will correspond with the sponsorship level (Giga sponsors will have the largest logo and be placed at the top of the sponsors list),

    h3 Social Media Mentions
    p.body-text Company name and product will be mentioned in social media postings. Higher sponsorship tiers will be featured more prominently.

    h3 Company Banners & Signs at Event
    p.body-text Companies may display banners and signs to promote their product or service at the event.

    h3 Tech Talk
    p.body-text Host a talk for interested attendees about your company and the technologies you use.

    h3 Sponsored Booth
    p.body-text Set up a booth at the community challenge for attendees to visit and get information about your company.

    h3 Time on Stage at Kickoff
    p.body-text Come on stage at the event kickoff ceremony for a quick 5 minute introduction to your company. Sponsors may distribute free product trials or marketing materials during this time.

    h3 Special Benefits
    p.body-text Companies at the Mega and Giga levels will be able to customize their sponsorship packages. Companies at these levels may request to add their own perks as well. Giga and mega sponsors may also donate prizes in addition to the prizes awarded below.

    a.post-section__button.button(
        href="mailto:sandiegojavascript@gmail.com"
      )
        | Sponsor Us!
</template>

<script>

export default {
  head: {
    title: 'Become a Sponsor | SDJS Community Code Challenge'
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers

.agenda__card
  height: 100px
  width: 100%

.agenda__header
  margin-bottom: 20px

h3
  text-align: left
  margin-bottom: .25em

.body-text
  margin: 0 0 32px
  text-align: justify

table
  width: 65%
  margin: 0 auto

th,
td
  min-width: 72px
  border: 1px solid #ccc
  font-size: 1.4rem

  @media screen and (max-width: 560px)
    min-width: 36px
    font-size: 1rem
    padding: 2px

.left-align
  text-align: left
</style>
