<template>
  <div class="home">
    <main-layout>
      <div class="home__tabs">
      <tabs>
        <tab
          name="Business"
          :selected="true"
        >
          <post
            v-for="post in posts"
            v-bind:key="post.id"
            v-bind:title="post.title"
            v-bind:content="post.brief"
            v-bind:date="post.date"
            v-bind:img="post.img"
          ></post>

        </tab>
        <tab
          name="Mobile"
        >

            <post
              v-for="post in posts"
              v-bind:key="post.id"
              v-bind:title="post.title"
              v-bind:content="post.brief"
              v-bind:date="post.date"
              v-bind:img="post.img"
            ></post>

        </tab>
        <tab
          name="Social media"
        >

            <post
              v-for="post in posts"
              v-bind:key="post.id"
              v-bind:title="post.title"
              v-bind:content="post.brief"
              v-bind:date="post.date"
              v-bind:img="post.img"
            ></post>

        </tab>
        <tab
          name="Technology"
        >

            <post
              v-for="post in posts"
              v-bind:key="post.id"
              v-bind:title="post.title"
              v-bind:content="post.brief"
              v-bind:date="post.date"
              v-bind:img="post.img"
            ></post>

        </tab>
      </tabs>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout';
import Tabs from '@/components/Tabs';
import Tab from '@/components/Tab';
import Post from '@/components/Post';
export default {
  name: 'Home',
  data() {
    return {
      tabs: [],
      posts: []
    }
  },
  components: {
    MainLayout,
    Tabs,
    Tab,
    Post
  },
  mounted() {
    let _this = this;

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        _this.posts = data;
      }
    };
    xhr.open('GET', 'https://api.myjson.com/bins/z6hli', true);
    xhr.send();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
</style>
