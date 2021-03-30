<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <Cover/>
    </div>
  </div>
</template>

<script>
import Cover from './molecules/Cover'
export default {
    name: 'Carousel',
    components: {
      Cover
    },
}
</script>

<style scoped>

</style>