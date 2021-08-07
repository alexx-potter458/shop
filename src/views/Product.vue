<template>
  <div class="p-5">
    <banner></banner>

    <div class="links mx-5">
        <router-link class="link" to="/">Home</router-link><span> - </span>
        <router-link class="link" to="/products">Products</router-link><span> - </span>
        <router-link class="link" to="/product">This product</router-link>
    </div>
    
    <mainContainer class="m-5"></mainContainer>
    <productDetails></productDetails>

  </div>
</template>

<script>

import banner from '../components/banner.vue'
import main from '../components/productMain.vue'
import details from '../components/productAditionalInfo.vue'

export default {
    data() {
        return {
            productName: this.$route.params.name
        }
    },
    components : {
        'banner': banner,
        'mainContainer': main,
        'productDetails': details
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