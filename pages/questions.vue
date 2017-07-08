<template lang="pug">
.container
  .container__inner
    :markdown-it
      # Frequently Asked Questions

      - Question
        - Answer

</template>
<script>
export default {
  head: {
    title: 'Code of Conduct | SDJS Community Code Challenge'
  }
}
</script>

<style lang="sass" scoped>
h1, h2, h3
  text-align: center

h1, h2
  margin-bottom: 0

h3
  margin-top: 0
</style>
