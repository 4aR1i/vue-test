import type { Comment, Post, State, User } from '@/types/PostModuleTypes';
import axios from 'axios';
import type { Module } from 'vuex';

export const postsModule: Module<State, any> = {
  state: () => ({
    users: [],
    posts: [],
    comments: [],
  }),
  getters: {
    postById: (state) => (id: number) => {
      return state.posts.find((post: Post) => post.id === id);
    },
    commentsById: (state) => (id: number) => {
      return state.comments.filter((comment: Comment) => comment.postId === id);
    },
    messagesByUserId: (state) => (id: number) => {
      return state.posts.filter((message: Post) => message.userId === id);
    },
  },
  mutations: {
    setUsers(state, users: User[]): void {
      state.users = users;
    },
    setPosts(state, posts: Post[]): void {
      state.posts = posts;
    },
    updatePosts(state, data: Post): void {
      state.posts.splice(
        0,
        state.posts.length,
        ...state.posts.filter((post) => post.id != data.id),
      );
      state.posts.push(data);
    },
    setComments(state, comments: Comment[]): void {
      state.comments = comments;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('setUsers', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        commit('setPosts', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchComments({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        commit('setComments', response.data);
      } catch (error) {
        console.error(error);
      }
    },
    updatePostById: async ({ commit }, [id, data]) => {
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data, {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        commit('updatePosts', response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  namespaced: true,
};
