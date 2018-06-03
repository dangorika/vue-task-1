<template>
  <div class="post-page">
    <main-layout>
      <div class="l">
        <div class="post">
          <h2 class="post__title">Year in Review: Our Favourite Apps from 2012</h2>
          <div class="post__date">Posted on March 3, 2013</div>
          <div class="post__content">
            <img src="http://via.placeholder.com/220x220" alt="">
            <p>Looking to showcase your latest Android based mobile application? Author, Ondrej Lechan, designed three highly detailed and customizable HTC branded phone mockups to meet that specific need. The HTC One X, S, and V series phones can be the perfect sidekick to showcase your mobile design work. Looking to showcase your latest Android based mobile application?</p>
            <p>Author, Ondrej Lechan, designed three highly detailed and customizable HTC branded phone mockups to meet that specific need.</p>
            <p>Intent is a unique PSD template that’s ideal for design agencies and design professionals to illustrate their portfolio. A fantastic replica of the 13” MacBook Air by Koy Carraway. This is a fully layered & scalable MacBook Air made almost entirely from vector shapes in Photoshop.</p>
            <img src="http://via.placeholder.com/350x250" alt="">
            <h3>Features of Wunderlist</h3>
            <p>Looking to showcase your latest Android based mobile application? Author, Ondrej Lechan, designed three highly detailed and customizable HTC branded phone mockups to meet that specific need. The HTC One X, S, and V series phones can be the perfect sidekick to showcase your mobile design work. Looking to showcase your latest Android based mobile application?</p>
            <p>Author, Ondrej Lechan, designed three highly detailed and customizable HTC branded phone mockups to meet that specific need.</p>
            <img src="http://via.placeholder.com/300x300" alt="">
            <p>Looking to showcase your latest Android based mobile application? Author, Ondrej Lechan, designed three highly detailed and customizable HTC branded phone mockups to meet that specific need. The HTC One X, S, and V series phones can be the perfect sidekick to showcase your mobile design work. Looking to showcase your latest Android based mobile application? </p>
          </div>

        </div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
export default {
  name: 'PostPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'

.post
  padding: 70px 0
  &__title
    text-align: center
    +lat-b
    font-size: 48px
    margin-bottom: 5px
  &__date
    text-align: center
    font-size: 14px
    color: #777
    margin-bottom: 60px
  &__content
    h3
      font-size: 28px
      margin-bottom: 20px
    img
      display: block
      margin: 0 auto 40px
    p
      margin-bottom: 30px
</style>
