<template>
    <div class="col-lg-6">
        <ul>
            <Fact v-for="(item, index) in data" :key="index" :name="item.name" :fact="item.fact"/>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Fact from '../atoms/Fact.vue'
export default {
  components: { Fact },
    computed: {
        ...mapState(['data'])
    },
}
</script>

<style>

</style>