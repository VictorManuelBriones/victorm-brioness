<template>
    <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <Heading :heading="heading"/>
          <Text :text="text"/>  
        </div>
        <div class="row">
          <Media v-for="(item, index) in languages" :key="index" :image="item.image" :heading="item.heading" :text="item.text"/>
        </div>
      </div>
    </section>
</template>

<script>
import Heading from './atoms/Heading.vue'
import Text from './atoms/Text.vue'
import Media from './molecules/Media.vue'

import { mapState } from "vuex";
export default {
  components: { Media, Heading, Text},
    data() {
        return {
            heading: 'Habilidades',
            text: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.'
        }
    },
    computed: {
      ...mapState(['languages'])
    },
}
</script>

<style>

</style>