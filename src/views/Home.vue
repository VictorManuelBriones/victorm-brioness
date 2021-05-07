<template>
  <body>
    <Header/>
    <Hero/>
    <main id="main">
      <About/>
      <Resume/>
      <Skills/>
    </main>
    <Footer/>
  </body>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/molecules/Hero.vue';
import About from '../components/About.vue';
import Resume from '../components/Resume.vue';
import Skills from '../components/Skills.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    About,
    Skills,
    Footer,
    Resume,
  },
  
}
</script>
