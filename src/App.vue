<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<style lang="stylus">
  #app
    background: #eee
</style>
<script>
import Home from './pages/Home/Home.vue';
import City from './pages/City/City.vue';
import Week from './pages/Week/Week.vue';
import Detail from './pages/Detail/Detail.vue';
export default {
  components: {
    Home,
    City,
    Week,
    Detail
  },
  mounted() {
    // console.log(this.$router);
    // console.log(this.$store.state.city);
  }
};
</script>