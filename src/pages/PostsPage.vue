<template >
  <div class="posts-page">
    <div class="posts-page__wrapper posts">
      <div class="posts__title" @click="$router.push('/')">Posts</div>
      <div class="posts__line"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import PostsList from '@/components/PostsList.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    PostsList
  },
  methods: {
    ...mapActions({
      fetchUsers: 'posts/fetchUsers',
      fetchPosts: 'posts/fetchPosts',
      fetchComments: 'posts/fetchComments'
    })
  },
  mounted() {
    this.fetchUsers();
    this.fetchPosts();
    this.fetchComments();
  },
}
</script>

<style>
.posts-page {
  width: 100%;
  min-height: 100vh;
}

.posts-page__wrapper {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .04);
  margin: 50px auto;
  max-width: 1080px;
  min-height: 100vh;
  width: 90vw;
}

.posts__title {
  color: #000;
  font-size: 32px;
  font-weight: 700;
  line-height: 39px;
  padding: 45px 60px 0;
  cursor: pointer;
}

.posts__line {
  background-color: #eaeaea;
  height: 1px;
  margin: 45px 0;
  width: 100%;
}

@media screen and (max-width: 550px) {
  .posts__title {
    padding: 25px 40px 0;
  }

  .posts__line {
    margin: 20px 0;
  }
}
</style>