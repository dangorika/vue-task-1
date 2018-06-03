<template>
  <div class="about">
    <main-layout>
      <div class="about__in">
        <div class="l">
          <div class="section">
            <h2 class="section__title">What We Are All About</h2>
            <div class="section__text">
              <p>It’s not always easy to filter out noise and purely focus on the content. Too many blogs and news sites are filled with colourful and distracting advertisement left right and centre. This is where we do things differently! Rather than just focusing purely and generating revenue, we focus on great user experience.</p>
              <p>You will notice that our news articles are content focused and free of any distractions. On top of that, we deliver content revolving design on a daily basis. Offering you insightful tutorials, techniques, design inspirations, mobile app development, coding, unique advertisements, and freebies.</p>
              <p>Our focus is and forever will be to bring high quality resources to lean from and to be inspired. Visit us daily for new design related articles!</p>
            </div>
          </div>

          <div class="section">
            <h2 class="section__title">Meet Our Team!</h2>
            <div class="team">
              <person
                v-for="person in people"
                v-bind:key="person.id"
                v-bind:name="person.name"
                v-bind:pos="person.pos"
                v-bind:desc="person.desc"
                v-bind:img="person.img"
              ></person>
            </div>
          </div>
        </div>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
import Person from '@/components/Person';
export default {
  name: 'About',
  data () {
    return {
      people: [
        {
          id: 1,
          name: 'Kimberly Thompson',
          pos: 'Founder & CEO',
          desc: 'Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.',
          img: 'http://via.placeholder.com/220x220'
        },
        {
          id: 2,
          name: 'Kimberly Thompson',
          pos: 'Founder & CEO',
          desc: 'Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.',
          img: 'http://via.placeholder.com/220x220'
        },
        {
          id: 3,
          name: 'Kimberly Thompson',
          pos: 'Founder & CEO',
          desc: 'Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.',
          img: 'http://via.placeholder.com/220x220'
        },
        {
          id: 4,
          name: 'Kimberly Thompson',
          pos: 'Founder & CEO',
          desc: 'Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.',
          img: 'http://via.placeholder.com/220x220'
        },
        {
          id: 5,
          name: 'Kimberly Thompson',
          pos: 'Founder & CEO',
          desc: 'Kimberly is the founder and the CEO of our company. With 10 years of experience in the tech industry, she ensures all operations are running smoothly.',
          img: 'http://via.placeholder.com/220x220'
        }
      ]
    }
  },
  components: {
    MainLayout,
    Person
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
@import '../helpers/all'
.about
  &__in
    padding-top: 70px
.section
  margin-bottom: 70px
  &__title
    font-size: 48px
    +lat-b
    margin-bottom: 60px
    text-align: center
  &__text
    p
      margin-bottom: 30px

.team
  display: flex
  justify-content: center
  flex-wrap: wrap
.person
  width: percentage(300/950)
  margin-bottom: 75px
</style>
