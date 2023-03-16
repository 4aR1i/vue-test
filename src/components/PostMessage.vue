<template>
  <div class="message" @click="$router.push(`/message/${message.id}`)">
    <div class="message__title">#{{ message.id }}.{{ message.title }}
    </div>
    <div class="message__words"></div>
    <div class="messages__chars"></div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    message: {
      type: Object,
      required: true
    },
  },
}
</script>

<style>
.message {
  border-bottom: 1px solid #f3f3f3;
  margin-bottom: 5px;
  padding: 5px;
}
</style>