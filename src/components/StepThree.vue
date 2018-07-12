<template>
  <div class="step-two slideInRight">
    <div class="title">Update Profile Picture</div>
    <div class="sub-title">We wanna know you more!</div>
    <form @submit="stepThreeSubmit" class="step-three-form">
      <div class="Upload-btn" @click="opendFile">
        <i class="fas fa-images"></i>
        <div class="text">
          <div class="form-title">UPLOAD UP TO 3 PHOTOS</div>
          <div class="img-notice">MAXIMUM SIZE: 150*150px</div>
        </div>
      </div>
      <div class="img-alert bounceIn2" :class="shake ? 'shake': ''" :style="{display: imageError ? 'block' : 'none'}"><i class="fas fa-exclamation-triangle"></i>{{ errorNumber }} FILE IS OVER THE MAXIMUM SIZE</div>
      <input type="file" name="" id="image-file" @change="selectedImg">
      <div class="imgs-block">
        <div class="img-block" v-for="(img,index) in imgFile"
          :key="index"
          :style="{backgroundImage: `url(${img})`}"
        >
          <div class="delete" @click="localRemoveImage(index)">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      <button class="btn submit">SUBMIT & NEXT</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Step3',
  data () {
    return {
      msg: 'Step3',
      shake: false,
      errorArray: [{
        type: false
      }, {
        type: false
      }, {
        type: false
      }]
    };
  },
  computed: {
    ...mapState(['nowStep', 'imgFile']),
    errorNumber() {
      return this.errorArray.filter(e => {
        return e.type === true;
      }).length;
    },
    imageError() {
      if (this.errorArray.some(item => item.type)) {
        return true;
      }
      return false;
    }
  },
  watch: {
    imgFile: {
      handler: function (val, oldVal) {
        val.forEach((img, index) => {
          this.validateImage(img, index);
        });
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations(['changeStep', 'completeStep', 'addImage', 'removeImage']),
    stepThreeSubmit() {
      if (this.errorArray.some(item => item.type)) {
        this.setErrorTime('shake');
        return;
      }
      this.completeStep({step: this.nowStep});
      this.changeStep({step: this.nowStep + 1});
    },
    opendFile() {
      document.querySelector('#image-file').click();
    },
    selectedImg(evt) {
      const file = evt.target.files.item(0);
      if (!file) return;
      const reader = new FileReader();
      reader.addEventListener('load', this.imageLoaded);
      reader.readAsDataURL(file);
    },
    imageLoaded(evt) {
      this.addImage({img: evt.target.result});
      document.querySelector('#image-file').value = '';
    },
    validateImage(img, index) {
      var image = new Image();
      image.onload = () => {
        var width = image.width;
        var height = image.height;
        if (width > 150 || height > 150) {
          this.errorArray[index].type = true;
        }
      };
      image.src = img;
    },
    localRemoveImage(index) {
      this.errorArray[index].type = false;
      this.removeImage({index: index});
    },
    setErrorTime(type) {
      this.$data[type] = true;
      setTimeout(() => {
        this.$data[type] = false;
      }, 50);
    }
  }
};
</script>
