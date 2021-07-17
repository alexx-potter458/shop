<template>

  <div id="app">
    <carousel class="background"></carousel>
    <custom-footer class="ontop"></custom-footer>
    <genders></genders>
    <news></news>
    <products></products>
    <offer></offer>
    <history></history>
    <detail></detail>
    <realFooter></realFooter>
  </div>

</template>

<script>

  import footer from './components/footer.vue'
  import carousel from './components/carousel.vue'
  import genders from './components/genderCategories.vue'
  import news from './components/news.vue'
  import products from './components/productsMain.vue'
  import offer from './components/bestOffer.vue'
  import history from './components/history.vue'
  import details from './components/details.vue'
  import realFooter from './components/realFooter.vue'

  export default {
    name: 'App',
    components: {
      'custom-footer': footer,
      'carousel': carousel,
      'genders': genders,
      'news': news,
      'products': products,
      'offer': offer,
      'history': history,
      'detail': details,
      'realFooter': realFooter
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
