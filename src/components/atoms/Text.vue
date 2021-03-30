<template>
  <p>{{text}}</p>
</template>

<script>
export default {
    name: 'Text',
    props: {
        text: {
            type: String,
        },
    },
}
</script>