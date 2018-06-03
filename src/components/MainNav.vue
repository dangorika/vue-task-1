<template>
  <nav class="main-nav">
    <router-link to="/"><home-icon /></router-link>
    <router-link to="/">News</router-link>
    <router-link to="/">Tutorials</router-link>
    <router-link to="/">Inspiration</router-link>
    <router-link to="/">Wordpress</router-link>
  </nav>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/home.vue';
export default {
  name: 'MainNav',
  components: {
    HomeIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'

.main-nav
  a
    opacity: .8
    color: #fff
    text-decoration: none
    text-transform: uppercase
    font-size: 16px
    margin-left: 28px
    +trans
    &:hover, &.is-active
      opacity: 1
</style>
