<template>
  <div class="profile">
        <ImageProfile :src="img"/>
        <h1 class="text-light"><a href="index.html">Victor Manuel Briones</a></h1>
        <div class="social-links mt-3 text-center">
          <Social v-for="(item, index) in social" :key="index" :image="item.image"/>
        </div>
      </div>
</template>

<script>
import img from '../../assets/img/2.png'
import ImageProfile from '../atoms/ImageProfile.vue'
import Social from '../atoms/Social.vue'

import { mapState } from "vuex";
export default {
    components: {
        ImageProfile,
        Social
    },
    data() {
        return {
            img: img
        }
    },
    computed: {
      ...mapState(['social'])
    },
}
</script>

<style>
  
</style>