<template>

  <div id="app">
    <carousel class="background"></carousel>
    <custom-footer class="ontop"></custom-footer>
    <genders></genders>

    <news></news>
    
  </div>

</template>

<script>

  import footer from './components/footer.vue'
  import carousel from './components/carousel.vue'
  import genders from './components/genderCategories.vue'
  import news from './components/news.vue'

  export default {
    name: 'App',
    components: {
      'custom-footer': footer,
      'carousel': carousel,
      'genders': genders,
      'news': news
  }
}
</script>

<style scoped>

.background {
  position: absolute;
  z-index: 0;
}

.ontop {
  position: relative;
  margin-bottom: 750px;;
  z-index: 2;
}

</style>
