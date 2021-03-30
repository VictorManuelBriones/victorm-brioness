<template>
<div id="techno">
  <Heading :heading="heading"/>
  <hr>
    <div class="row" v-if="languages.length > 1">
      <Technology v-for="(item, index) in languages" :key="index" :image="item.image" :text="item.text" :heading="item.heading"/>
    </div>
    <div class="row" v-else>
      <Loading v-for="(item, index) in languages" :key="index"/>
    </div>
</div>
</template>

<script>
import Technology from './molecules/Technology.vue';
import Heading from './atoms/Heading.vue';
import Loading from './atoms/Loading.vue';

import { mapState } from "vuex";

export default {
    name: 'Techno',
    components: {
      Technology,
      Heading,
      Loading,
    },
    data() {
      return {
        heading: 'Tecnologías',
      }
    },
    computed: {
      ...mapState(['languages'])
    },
}
</script>