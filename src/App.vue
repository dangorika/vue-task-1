<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700,900')
@import 'helpers/all'
#app
  +lat-r
  font-size: 16px
  line-height: 1.4
  color: #000
  +smooth-font
.l
  max-width: 950px
  margin: 0 auto
</style>
