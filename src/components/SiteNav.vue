<template>
  <nav class="site-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/">Archive</router-link>
    <router-link to="/">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: 'SiteNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'

.site-nav
  a
    color: #999
    text-decoration: none
    font-size: 14pz
    margin-right: 28px
    +trans
    &:hover, &.is-active
      color: #000

</style>
