<template>
  <h2>{{heading}}</h2>
</template>

<script>
export default {
    name: 'Heading',
    props: {
        heading: {
            type: String,
        },
    },
}
</script>
