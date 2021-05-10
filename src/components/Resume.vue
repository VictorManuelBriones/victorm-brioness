<template>
    <section id="resume" class="resume">
      <div class="container">
        <div class="section-title">
          <Heading :heading="heading"/>
          <Text :text="text"/>
        </div>
        <div class="row">
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Currículum Vitae</h3>
            <div class="resume-item pb-0">
              <h4>Victor Manuel Briones Sánchez</h4>
              <p><em>Desarrollador web Full Stack</em></p>
              <ul>
                <li>Tlaxcala, México</li>
                <li>(+52) 241-104-5853</li>
                <li>victorm140399@gmail.com</li>
              </ul>
            </div>
            <h3 class="resume-title">Formación</h3>
            <div class="resume-item">
              <h4>T.S.U. Tecnológias de la información y comunicación área multimedia y comercio electrónico</h4>
              <h5>2017 - 2019</h5>
              <p><em>Universidad Tecnológica de Tlaxcala</em></p>
            </div>
            <div class="resume-item">
              <h4>Ingeniero en Tecnológias de la información y comunicación</h4>
              <h5>2019 - 2021</h5>
              <p><em>Universidad Tecnológica de Tlaxcala</em></p>
            </div>
            <h3 class="resume-title">Descarga mi CV</h3>
            <div class="resume-item">
              <h4>Backend</h4>
              <Download :href="back"/>
            </div>
            <div class="resume-item">
              <h4>Frontend</h4>
              <Download :href="front"/>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Experiencia profesional</h3>
            <div v-for="(item, index) in resume" :key="index" class="resume-item">
              <h4>{{item.title}}</h4>
              <h5>{{item.year}}</h5>
              <p><em>{{item.enterprice}}</em></p>
              <ul>
                <li v-for="(item, i) in item.skills" :key="i">{{item.skill}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import Heading from './atoms/Heading.vue'
import Text from './atoms/Text.vue';
import back from '../assets/img/cv/Backend.png';
import front from '../assets/img/cv/Frontend.png';
import Download from './atoms/Download.vue';
import { mapState } from "vuex";
export default {
  components: { Heading, Text, Download},
  data() {
      return {
          heading: 'Experiencia',
          text: 'Mi experiencia hasta ahora es académica y proyectos desarrollados a micro negocios y a dos empresas ' + 
          'dentro del estado, una multinacional y la otra local durante mis estadías profesionales para obtener mis títulos, ' + 
          'desenvolviéndome como líder de equipo en su mayoría y participando en la parte frontend y backend ahora estoy en una etapa freelance y emprendimiento.',
          back: back,
          front: front
      }
  },
  computed: {
    ...mapState(['resume'])
  },

}
</script>

<style>

</style>