<template >
  <div class="posts__editor editor">
    <div class="editor__post">
      <div class="editor__title">#{{ post?.id }}.{{ post?.title }}</div>
      <div class="editor__body">{{ post?.body }}</div>
    </div>
    <PostEditorForm :post="post" />
    <div class="editor__comments comments">
      <div class="comments__title">Comments:</div>
      <div class="comments__list">
        <CommentItem v-for="comment in comments" :key="comment.id" :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Comment, Post } from '@/types/PostModuleTypes';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import CommentItem from './CommentItem.vue'
import PostEditorForm from './PostEditorForm.vue';

export default defineComponent({
  components: {
    CommentItem,
    PostEditorForm
  },
  computed: {
    ...mapGetters({
      postById: 'posts/postById',
      commentsById: 'posts/commentsById'
    }),
    post(): Post {
      return this.postById(Number(this.$route.params.id))
    },
    comments(): Comment[] {
      return this.commentsById(this.post?.id)
    }
  },
})

</script>

<style>
.editor {
  padding: 0 60px 45px;
}

.editor__post {
  min-height: 120px;
}

.editor__title {
  color: #000;
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 10px;
}

.editor__body {
  font-size: 18px;
}

.comments {
  margin-top: 30px;
  width: 85%;
}

.comments__title {
  color: #000;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
}

@media screen and (max-width:550px) {
  .editor {
    padding: 0 40px 25px;
  }

  .comments {
    width: 100%;
  }
}
</style>