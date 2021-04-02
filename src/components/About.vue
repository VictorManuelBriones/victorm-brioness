<template>
      <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <Heading :heading="heading"/>
          <Text :text="text"/>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <Image :src="img"/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <Title :title="title"/>
            <Text :text="text2"/>
            <div class="row">
              <Data/>
            </div>
            <Text :text="text2"/>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->
</template>

<script>
import Heading from './atoms/Heading.vue'
import Image from './atoms/Image.vue'
import Text from './atoms/Text.vue'
import Data from './molecules/Data.vue'

import img from '../assets/img/2.png'
import Title from './atoms/Title.vue'
export default {
  components: { 
    Heading,
    Text,
    Image,
    Title,
    Data
  },
  data() {
    return {
      heading: "Sobre mí",
      text: "Conoce un poco sobre mi",
      img: img,
      title: 'Desarrollador Full Stack',
      text2: 'Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.'
    }
  },

}
</script>

<style>

</style>