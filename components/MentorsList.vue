<template lang="pug">
.speakers-list
  transition-group(name="fade", tag="div")
    mentor.fade(v-for="mentor of mentorsList", :mentor="mentor", :key="mentor", :adjust-img-url="adjustImgUrl")
</template>

<script>
import Mentor from './Mentor'

export default {
  components: { Mentor },
  props: {
    limit: {
      type: Number,
      default: 999
    },
    mentors: {
      type: Array,
      required: true
    },
    adjustImgUrl: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mentorsList () {
      return this.mentors.slice(0, this.limit)
    }
  }
}
</script>

<style lang="sass">
@import ~assets/css/base/helpers

.speakers-list
  margin: 0 -10px
  
.fade
  opacity: 1
  transition: opacity 0.2s ease-in-out

.fade-enter-active,
.fade-leave-active
  opacity: 0
</style>
