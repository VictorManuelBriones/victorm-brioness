<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 5">
    <div :class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img :src="img" class="rounded me-2" alt="...">
        <strong class="mr-auto">¡Bienvenido!</strong>
        <button  @click="ocultar" type="button" class="ml-2 mb-1 close fas fa-times-circle" data-dismiss="toast" aria-label="Close">
        </button>
      </div>
      <div class="toast-body">
        Bienvenido a mi portafolio personal
      </div>
    </div>
  </div>
</template>

<script>
import img from '../../assets/img/task.svg';
export default {
    name: 'Toast',
    data() {
      return {
        img: img,
        mostrar: true,
      }
    },
    methods: {
      ocultar() {
        this.mostrar = false;
      }
    },
    computed: {
      toast() {
        return this.mostrar ? 'toast show border-success' : 'toast fade hide'
      }
    },
}
</script>

<style scoped>
img{
  width: 8%;
  height: 8%;
}

</style>