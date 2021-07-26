<template>
  <div class="p-5">
    <banner></banner>

    <div class="links mx-5">
        <router-link class="link" to="/">Home</router-link><span> - </span>
        <router-link class="link" to="/products">Products</router-link><span> - </span>
        <router-link class="link" to="/product">This product</router-link>
    </div>
    
    <mainContainer class="m-5"></mainContainer>

  </div>
</template>

<script>

import banner from '../components/banner.vue'
import main from '../components/productMain.vue'

export default {
    components : {
        'banner': banner,
        'mainContainer': main
    }
}
</script>

<style scoped>
    .link {
        font-weight: 600;
        color: rgb(119, 197, 119);
    }
    .link:hover {
        color: gray;
        border-bottom: 1px solid gray;
    }

</style>