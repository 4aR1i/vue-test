<template>
  <PostsPage></PostsPage>
</template>

<script  lang="ts">
import PostsPage from './pages/PostsPage.vue';
export default {
  components: {
    PostsPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  width: 100%;
  min-height: 100vh;
  background: #e7f6ff;
}
</style>
