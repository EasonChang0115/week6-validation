<template>
  <div class="done slideInRight">
    <div class="title">Congratulations</div>
    <div class="sub-title">Now you’re one of us! </div>
    <div class="smile">
      <i class="fas fa-smile"></i>
    </div>
    <div class="notice">Redirected to homepage after {{ time }} seconds…</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Done',
  data() {
    return {
      time: 6
    };
  },
  mounted() {
    let timer = setInterval(() => {
      this.time -= 1;
      if (this.time === 0) {
        clearInterval(timer);
        this.initAllData();
      }
    }, 1000);
  },
  methods: {
    ...mapMutations(['initAllData'])
  }
};
</script>
