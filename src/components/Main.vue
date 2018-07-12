<template>
  <div class="main">
    <div class="top-bar"></div>
    <div class="schedule-bar">
      <div class="line">
        <div class="circle" :class="nowStep === 1 ? 'active' : steps[0] ? 'done' : '' "></div>
        <div class="circle" :class="nowStep === 2 ? 'active' : steps[1] ? 'done' : '' "></div>
        <div class="circle" :class="nowStep === 3 ? 'active' : steps[2] ? 'done' : '' "></div>
        <div class="circle" :class="nowStep === 4 ? 'active' : steps[3] ? 'done' : '' "></div>
      </div>
    </div>
    <keep-alive>
      <component :is="stepMap[nowStep]"></component>
    </keep-alive>
  </div>
</template>

<script>
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
    StepOne,
    StepTwo,
    StepThree
  },
  data() {
    return {
      stepMap: {
        1: 'StepOne',
        2: 'StepTwo',
        3: 'StepThree'
      }
    };
  },
  computed: {
    ...mapState(['nowStep', 'steps'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/components/main.scss";
</style>
