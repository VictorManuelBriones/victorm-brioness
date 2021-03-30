<template>
    <div class="carousel-item active">
        <ImageCarousel/>
        <div class="container">
          <div class="carousel-caption">
            <Image :src="img"/>
            <Headline :headline="headline"/>
            <Text :text="text"/>
            <!-- <p><a class="btn btn-lg btn-outline-secondary" href="#" role="button">Sign up today</a></p> -->
          </div>
        </div>
    </div>
</template>

<script>
import Headline from '../atoms/Headline';
import Image from '../atoms/Image.vue';
import ImageCarousel from '../atoms/ImageCarousel.vue';
import Text from '../atoms/Text';

import img from '../../assets/img/programmer.svg';

export default {
    name: 'Cover',
    components: {
        Headline,
        Text,
        ImageCarousel,
        Image
    },
    data() {
        return {
            text: '-Desarrollador Web-',
            headline: 'Victor Manuel Briones Sánchez',
            img: img
        }
    },
}
</script>