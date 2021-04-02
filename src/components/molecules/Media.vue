<template>
    <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
        <ImageSkill :src="image"/>
        <h5 class="mt-0">{{heading}}</h5>
        <p class="description">{{text}}</p>
    </div>
</template>

<script>
import ImageSkill from '../atoms/ImageSkill.vue'
export default {
    components: {
        ImageSkill,
    },
    props: {
        heading: {
            type: String,
        },
        image:{
            type: String
        },
        text:{
            type: String
        }
    },

}
</script>

<style>

</style>