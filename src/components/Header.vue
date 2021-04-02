<template>
  <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
  <header id="header">
    <div class="d-flex flex-column">
        <Profile/>
        <Navbar/>
      <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>
    </div>
  </header>
</template>

<script>
import Profile from './molecules/Profile.vue';
import Navbar from './molecules/Navbar.vue';

export default {
    name: 'Header',
    components: {
        Navbar,
        Profile
    },
}
</script>

<style scoped>

</style>