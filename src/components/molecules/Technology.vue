<template>
    <div class="col-lg-4">
        <Image :src="image"/>
        <Heading :heading="heading"/>
        <Text :text="text"/>
    </div>
</template>

<script>
import Image from '../atoms/Image';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

export default {
    name: 'Technology',
    components: {
        Image,
        Heading,
        Text
    },
    props: {
        image: {
            type: String,
        },
        heading:{
            type: String,
        },
        text: {
            type: String,
        },
    },
}
</script>