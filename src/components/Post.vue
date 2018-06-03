<template>
  <div class="post">
    <h2 class="post__title">{{ title }}</h2>
    <div class="post__date">{{ date }}</div>
    <div class="post__img">
      <img :src="img" alt="">
    </div>
    <div class="post__content">{{ content }}</div>
    <div class="post__more">
      <btn-more></btn-more>
    </div>
  </div>
</template>

<script>
import BtnMore from '@/components/BtnMore';
export default {
  name: 'Post',
  props: {
    title: String,
    content: String,
    date: String,
    img: String
  },
  components: {
    BtnMore
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../helpers/all'

.post
  text-align: center
  &:not(:last-child)
    padding-bottom: 45px
    margin-bottom: 45px
    border-bottom: 1px solid #e0e0e0
  &__title
    +lat-b
    font-size: 48px
    margin-bottom: 5px
  &__date
    font-size: 14px
    color: #777
    margin-bottom: 60px
  &__img
    margin-bottom: 40px
  &__content
    margin-bottom: 10px
    text-align: left
  &__more
    text-align: left

</style>
