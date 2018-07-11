<template>
  <div class="main">
    <div class="top-bar"></div>
    <div class="schedule-bar">
      <div class="line">
        <div class="circle active"></div>
        <div class="circle done"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/components/main.scss";
</style>
