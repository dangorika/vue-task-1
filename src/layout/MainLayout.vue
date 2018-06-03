<template>
  <div>
    <main-header></main-header>
    <transition name="fade">
      <div>
        <slot></slot>
      </div>
    </transition>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader';
import MainFooter from '@/components/MainFooter';
export default {
  name: 'MainLayout',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.fade-enter-active, .fade-leave-active
  transition: opacity .25s
.fade-enter-active
  transition-delay: .25s
.fade-enter, .fade-leave-to
  opacity: 0
</style>
