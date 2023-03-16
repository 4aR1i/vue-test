import { createStore } from 'vuex';
import { postsModule } from './postsModule';

export const store = createStore({
  modules: {
    posts: postsModule,
  },
});
