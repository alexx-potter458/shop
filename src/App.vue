<template>

  <div id="app">
    <carousel></carousel>
    <custom-footer></custom-footer>
    
  </div>

</template>

<script>

  import footer from './components/footer.vue'
  import carousel from './components/carousel.vue'
  export default {
    name: 'App',
    components: {
      'custom-footer': footer,
      'carousel': carousel
  }
}
</script>

<style>

</style>
