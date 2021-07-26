<template>
  <div>
    <carousel class="background"></carousel>
    <div class="spacer"></div>
    <genders></genders>
    <news></news>
    <products></products>
    <offer></offer>
    <history></history>
   
  </div>
</template>

<script>
import genders from "../components/genderCategories.vue";
import news from "../components/news.vue";
import products from "../components/productsMain.vue";
import offer from "../components/bestOffer.vue";
import history from "../components/history.vue";
import carousel from "../components/carousel.vue";

export default {
  name: "Home",
  components: {
    'carousel': carousel,
    'genders': genders,
    'news': news,
    'products': products,
    'offer': offer,
    'history': history,
    
  },
};
</script>

<style scoped>

.background {
  position: absolute;
  z-index: 0;
}
.spacer {
  position: relative;
  margin-bottom: 750px;;
  z-index: 2;
}
</style>