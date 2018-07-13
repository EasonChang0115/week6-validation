<template>
  <div class="main">
    <div class="top-bar"></div>
    <div class="schedule-bar">
      <div class="outline">
        <div class="line" :style="{width: `${doneLength * 80}px`}">
          <div class="circle" :class="nowStep === 1 ? 'active' : steps[0].type ? 'done' : '' "></div>
          <div class="circle" :class="nowStep === 2 ? 'active' : steps[1].type ? 'done' : '' "></div>
          <div class="circle" :class="nowStep === 3 ? 'active' : steps[2].type ? 'done' : '' "></div>
          <div class="circle" :class="nowStep === 4 ? 'active' : steps[3].type ? 'done' : '' "></div>
        </div>
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
import StepFour from './StepFour';
import Done from './Done';
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    Done
  },
  data() {
    return {
      stepMap: {
        1: 'StepOne',
        2: 'StepTwo',
        3: 'StepThree',
        4: 'StepFour',
        5: 'Done'
      }
    };
  },
  computed: {
    ...mapState(['nowStep', 'steps']),
    doneLength() {
      let length = 0;
      this.steps.forEach(item => {
        if (item.type) length += 1;
      });
      if (length >= 4) {
        return 3;
      }
      return length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/components/main.scss";
</style>
