<template>
  <a target="_blank" :href="link"><i :class="logo"></i></a> 
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    class: {
      type: String,
    },
    link: {
      type: String
    }
  },
  computed: {
    logo() {
      return this.class 
    }
  },

}
</script>

<style scoped>
/* .social{
  border: none;
  width: 40px;
  height: 40px;
  margin: 15px auto;
  display: block;
  width: 120px;
} */

</style>