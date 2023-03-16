import PostsList from '@/components/PostsList.vue';
import PostEditor from '@/components/PostEditor.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PostsList,
    },
    {
      path: '/message/:id',
      component: PostEditor,
    },
  ],
});

export default router;
