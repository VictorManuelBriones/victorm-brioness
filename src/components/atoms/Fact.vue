<template>
  <li><i class="icofont-rounded-right"></i> <strong>{{name}}: </strong>{{fact}}</li>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
        },
        fact: {
            type: String,
        },
    },
}
</script>

<style>

</style>