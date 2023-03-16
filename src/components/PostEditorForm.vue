<template>
  <div class="editor-form">
    <input class="editor-form__title" type="text" v-model="data.title" placeholder="Title">
    <textarea class="editor-form__body" type="text" v-model="data.body" placeholder="Body"></textarea>
    <button class="editor-form__btn" :onClick="updatePost">Отправить</button>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      data: {
        id: this.post?.id,
        title: '',
        body: '',
        userId: this.post?.userId,
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      updatePostById: 'posts/updatePostById'
    }),
    updatePost() {
      this.updatePostById([(this.post?.id).toString(), this.data])
    }
  }
}
</script>

<style>
.editor-form {
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.editor-form__title {
  width: 100%;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #c5bcbc;
  border-radius: 9px;
  padding: 8px 10px;
}

.editor-form__body {
  width: 100%;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #c5bcbc;
  border-radius: 9px;
  padding: 8px 10px;
}

.editor-form__btn {
  width: 100px;
  height: 40px;
  background: #fff;
  border: 1px solid rgb(18, 162, 229);
  color: rgb(18, 162, 229);
  margin-left: auto;
  cursor: pointer;
}

.editor-form__btn:hover {
  box-shadow: 0 0 4px rgb(18, 162, 229);
}
</style>