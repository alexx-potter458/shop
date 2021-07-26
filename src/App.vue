<template>

  <div id="app">
    
    <custom-footer class="ontop"></custom-footer>
    <router-view />
     <detail></detail>
    <realFooter></realFooter>
  </div>

</template>

<script>

  import footer from './components/footer.vue'  
  import realFooter from './components/realFooter.vue'
  import details from "./components/details.vue";

  export default {
    name: 'App',
    components: {
      'custom-footer': footer,
      'realFooter': realFooter,
      'detail': details
  }
}
</script>

<style scoped>
.ontop {
  position: relative;
  z-index: 2;
}
</style>
