<template>
  <div>
    <Navbar/>
    <Carousel/>
    <Toast/>
    <div class="container marketing">
      <Techno/>
      <hr class="featurette-divider">
      <Projects/>
      <hr class="featurette-divider">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Carousel from '@/components/Carousel.vue';
import Techno from '@/components/Techno.vue';
import Footer from '@/components/Footer.vue';
import Projects from '@/components/Projects.vue';
import Toast from '@/components/molecules/Toast.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Techno,
    Footer,
    Projects,
    Toast
  }
}
</script>
