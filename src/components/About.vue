<template>
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
    </section>
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
      text: 'Bienvenido a mi sitio oficial, donde podrás saber más sobre mí y mi desarrollo profesional como ingeniero en TI, mi gusto por la tecnología especialmente el desarrollo web y la programación, verás más de lo que me gusta hacer y algunos de los proyectos que he realizado y he colaborado profesionalmente hasta ahora.',
      img: img,
      title: 'Desarrollador Full Stack',
      text2: 'Mis datos de contacto.',
    }
  },

}
</script>

<style>

</style>