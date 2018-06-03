<template>
  <transition name="fade">
    <div v-show="isActive">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    name: { required: true },
    selected: { default: false}
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    href() {
      return '#';
      // return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },
  mounted() {
    this.isActive = this.selected;
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
