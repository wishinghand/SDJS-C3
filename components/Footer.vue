<template lang="pug">
footer.footer
  .container__inner
    .footer__top
      ul.footer__list
        h3.footer__header Contact
        li
          | Twitter:
          a(href="https://twitter.com/sandiegojs" target="_blank")
            span @sandiegojs
        li
          | Email:
          a(href="mailto:sandiegojavascript@gmail.com")  sandiegojavascript@gmail.com
      ul.footer__list.footer__list--small
        h3.footer__header Useful links
        li: nuxt-link(to="/mentors") Mentors
        li: nuxt-link(to="/sponsorship") Sponsorship
        li: nuxt-link(to="/codeofconduct") Code of Conduct
        li: nuxt-link(to="/terms") Terms & Conditions
        li: nuxt-link(to="/privacypolicy") Privacy Policy

    .footer__bottom
      | Proudly supported by
      //- strong  SPONSORING COMPANY
      //- |  and
      a(href="http://sandiegojs.org/").footer__logo
        | sandiego
        span.logo-accent .js
      .footer__copyright
        | Copyright 2016-2017 San Diego JavaScript Community  All rights reserved.
</template>

<style lang="sass">
@import ~assets/css/base/helpers

.footer
  margin-top: 80px
  padding-top: 70px
  padding-bottom: 30px
  background: #fff
  border-top: 1px solid #e6e6e6

.footer__top
  padding-bottom: 40px

  @media #{$medium-up}
    display: flex
    justify-content: space-around

.footer__logo
  display: inline-block
  font-size: 1.25em
  font-weight: 700
  color: #777777
  padding-left: 5px

.logo-accent
  color: #1884C3

.footer__list
  list-style: none
  padding: 0
  margin: 0
  font-size: 22px

  li
    line-height: 1.4
    font-weight: 300

  a
    font-weight: 400
    color: $color-link
    text-decoration: none

  &.footer__list--small
    font-size: 20px

.footer__header
  margin: 15px 0
  font-size: 36px
  font-weight: 300
  color: $color-text

.footer__bottom
  font-size: 20px
  font-weight: 400
  line-height: 36px
  text-align: center
  color: $color-text

  a
    text-decoration: none
    color: $color-text
    white-space: nowrap

.footer__img
  height: 24px
  display: inline-block
  margin-bottom: -3px
  margin-left: 4px

.footer__copyright
  font-size: 13px
  margin-top: 0
  color: #9D9D9D

.footer__legal
  font-size: 11px
  line-height: 1
  margin-top: 0
  color: #9D9D9D
</style>
