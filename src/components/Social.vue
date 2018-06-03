<template>
  <div class="socials">
    <a href=""><facebook-icon /></a>
    <a href=""><twitter-icon /></a>
    <a href=""><pinterest-icon /></a>
    <a href=""><google-plus-icon /></a>
  </div>
</template>

<script>
import FacebookIcon from 'vue-material-design-icons/facebook.vue';
import TwitterIcon from 'vue-material-design-icons/twitter.vue';
import PinterestIcon from 'vue-material-design-icons/pinterest.vue';
import GooglePlusIcon from 'vue-material-design-icons/google-plus.vue';
export default {
  name: 'Social',
  components: {
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    GooglePlusIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'

.socials
  display: flex
  a
    text-decoration: none
    color: #fff
    width: 40px
    height: 40px
    background: #000
    border-radius: 50%
    display: block
    margin-right: 10px
    position: relative
    span
      +vcenter
      font-size: 20px

</style>
