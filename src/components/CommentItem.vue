<template >
  <div class="comment">
    <div class="comment__name">{{ comment.name }}</div>
    <div class="comment__email">{{ comment.email }}</div>
    <div class="comment__body">{{ comment.body }}</div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.comment {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f3f3f3;
}

.comment__name {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 17px;
}

.comment__email {
  color: rgb(18, 162, 229);
  font-size: 14px;
  font-weight: 500;
  line-height: 13px;
  margin: 10px 0;
}
</style>