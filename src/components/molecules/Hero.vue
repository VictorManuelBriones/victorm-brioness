<template>
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <ImageCover :src="img"/>
      <Headline :headline="text"/>
      <Text :text="description"/>
    </div>
  </section>
</template>

<script>
import Headline from '../atoms/Headline.vue'
import ImageCover from '../atoms/ImageCover.vue'
import Text from '../atoms/Text.vue'

import img from '../../assets/img/programmer.svg'

export default {
    components: { 
      Headline,
        Text,
        ImageCover
    },
    data() {
        return {
            img: img,
            text: 'Victor Manuel Briones',
            description: 'Desarrollador Full Stack'
        }
    },

}
</script>

<style>

</style>