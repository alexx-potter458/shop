<template>
  <div>
      <div class="title">Some products</div>
      <products></products>
  </div>
</template>

<script>

import products from "../components/productsMain.vue";

export default {
  components: {
    'products': products
  }
}
</script>

<style>

  .title {
    padding: 2em;
    font-weight: 500;
    font-size: 24px;
  }

</style>