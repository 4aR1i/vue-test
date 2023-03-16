<template>
  <div class="posts__list list">
    <PostItem v-for="user in users" :user="user" :key="user.id" />
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import PostItem from './PostItem.vue';
export default {
  components: {
    PostItem
  },
  computed: {
    ...mapState({
      users: (state: any) => state.posts.users
    }),
  }
}
</script>

<style>
.posts__list {
  padding: 0 60px 45px;
}

@media screen and (max-width: 550px) {
  .posts__list {
    padding: 0px 40px 25px;
  }
}
</style>