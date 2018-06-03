<template>
  <router-link to="/post" class="btn-more">
    <arrow-right-icon />
    <span class="btn-more__text">read more</span>
  </router-link>
</template>

<script>
import ArrowRightIcon from 'vue-material-design-icons/arrow-right.vue';
export default {
  name: 'BtnMore',
  components: {
    ArrowRightIcon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../helpers/all'

.btn-more
  text-decoration: none
  &__text
    margin-left: 14px
  span
    display: inline-block
    vertical-align: middle
    color: #000
    +lat-b
    text-transform: capitalize
    &:not(.btn-more__text)
      border: 1px solid #000
      border-radius: 50%
      width: 20px
      height: 20px
      font-size: 12px
      position: relative
</style>
