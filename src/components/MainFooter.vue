<template>
  <div class="l">
    <footer class="footer">
      <div class="footer__nav">
        <site-nav></site-nav>
      </div>

      <div class="header__socials">
        <social></social>
      </div>

      <div class="header__copyright">
        <p>© Copyright 2013 DesignerFirst.com</p>
      </div>
    </footer>
  </div>
</template>

<script>
import SiteNav from '@/components/SiteNav';
import Social from '@/components/Social';
export default {
  name: 'MainFooter',
  components: {
    SiteNav,
    Social
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'

.footer
  border-top: 1px solid #999
  padding: 15px 0
  display: flex
  align-items: center
  justify-content: space-between
  &__copyright
    +lat-b
    font-size: 14px
    color: #555


</style>
