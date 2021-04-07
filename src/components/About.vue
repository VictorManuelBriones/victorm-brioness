<template>
      <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <Heading :heading="heading"/>
          <Text :text="text3"/>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <Image :src="img"/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <Title :title="title"/>
            <Text :text="text"/>
            <div class="row">
              <Data/>
            </div>
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

import img from '../assets/img/customerreview.svg'
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
      text: 'Entre las cosas que más me apasionan ' +
      'hacer están los deportes de equipo como el fútbol y el basquetbol así también disfruto de la música tanto escucharla' +
      ' como estar dentro de su desarrollo, es mis tiempos libres le dedico a producir variantes de música electrónica como' +
      ' Trap, Hardstyle y EDM.',
      img: img,
      title: 'Desarrollador Full Stack',
      text2: 'Mis datos de contacto.',
      text3: 'Hola, soy Victor Manuel Briones, me apasiona el desarrollo web y la tecnología, la música y los deportes, aquí en mi' +
      ' portafolio personal encontraras más sobre mí y de lo más me gusta hacer.'
    }
  },

}
</script>

<style>

</style>