<template>
  <div class="person">
    <div class="person__img">
      <img :src="img" alt="">
    </div>
    <div class="person__name">{{ name }}</div>
    <div class="person__pos">{{ pos }}</div>
    <div class="person__desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    img: String,
    name: String,
    pos: String,
    desc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'

.person
  text-align: center
  &__img
    border-radius: 50%
    overflow: hidden
    max-width: 220px
    max-height: 220px
    margin: 0 auto 30px
    img
      width: 100%
      height: 100%
      object-fit: contain
  &__name
    font-size: 18px
    +lat-b
    margin-bottom: 5px
  &__pos
    margin-bottom: 30px
  &__desc
    max-width: 220px
    margin: 0 auto

</style>
