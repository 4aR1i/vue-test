<template>
  <div class="list__user user" :onClick="toggleGroup">
    <div class="user__info">#{{ user.id }}.{{ user.username }}</div>
    <div class="user__name">{{ user.name }}</div>
    <div class="user__company">{{ user.company.name }}</div>
    <div class="user__website">
      <a href="">{{ user.website }}</a>
    </div>
    <div class="user__icon">
      <svg width="15" height="9" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.90008 0.601167L9.39911 0.100235C9.33236 0.0333416 9.25546 0 9.16853 0C9.08181 0 9.00494 0.0333416 8.93819 0.100235L5.00005 4.03816L1.06209 0.100341C0.995301 0.033447 0.918439 0.000105232 0.831611 0.000105232C0.744747 0.000105232 0.667886 0.033447 0.601132 0.100341L0.100235 0.601308C0.0333416 0.668061 0 0.744922 0 0.831786C0 0.91858 0.0334469 0.995441 0.100235 1.06219L4.76957 5.73164C4.83633 5.79843 4.91322 5.8318 5.00005 5.8318C5.08688 5.8318 5.16364 5.79843 5.23036 5.73164L9.90008 1.06219C9.96683 0.995406 10 0.918545 10 0.831786C10 0.744922 9.96683 0.668061 9.90008 0.601167Z"
          fill="#ADBFDF" />
      </svg>
    </div>
    <div v-if="activeGroup === true" class="user__messages">
      <PostMessage v-for="message in messages" :key="message.id" :message="message" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import PostMessage from './PostMessage.vue';
export default {
  data() {
    return {
      activeGroup: false
    }
  },
  components: {
    PostMessage
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleGroup() {
      this.activeGroup = !this.activeGroup
    }
  },
  computed: {
    ...mapGetters({
      messagesByUserId: 'posts/messagesByUserId'
    }),
    messages() {
      return this.messagesByUserId(this.user.id)
    }
  }
}
</script>

<style>
.user {
  position: relative;
  background: #fff;
  border: 1px solid #f3f3f3;
  border-radius: 30px;
  padding: 15px 25px;
  margin-bottom: 15px;
  transition: .2s scale ease-in-out;
  cursor: pointer;
}

.user:hover {
  scale: 1.01;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .04);
}

.user__info {
  color: #bdbdbd;
  font-size: 14px;
  font-weight: 500;
  line-height: 13px;
}

.user__name {
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 17px;
  margin: 10px 0;
}

.user__company {
  font-size: 14px;
}

.user__website a {
  color: rgb(18, 162, 229);
  font-size: 14px;
}

.user__icon {
  position: absolute;
  top: 48px;
  right: 40px;
}

.user__messages {
  margin-top: 20px;
}
</style>