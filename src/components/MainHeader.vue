<template>
  <header class="header">
    <div class="l">
      <div class="header__in">
        <div class="header__logo">
          <router-link to="/">Classic</router-link>
        </div>

        <div class="header__nav">
          <main-nav></main-nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MainNav from '@/components/MainNav';
export default {
  name: 'MainHeader',
  components: {
    MainNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'

.header
  background: #000
  color: #fff
  &__in
    display: flex
    align-items: center
    min-height: 80px
  &__logo
    width: percentage(442/950)
    a
      text-decoration: none
      color: #fff
      +lat-bl
      font-size: 24px
  &__nav
    width: percentage(508/950)
</style>
