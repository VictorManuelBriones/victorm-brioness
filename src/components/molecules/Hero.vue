<template>
  <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
    <div class="hero-container" data-aos="fade-in">
      <Headline :headline="text"/>
      <Text :text="description"/>
    </div>
  </section>
</template>

<script>
import Headline from '../atoms/Headline.vue'
import Text from '../atoms/Text.vue'

export default {
    components: { 
      Headline,
        Text
    },
    data() {
        return {
            text: 'Victor Manuel Briones',
            description: 'Ingeniero en TI'
        }
    },

}
</script>

<style>

</style>