<template>
    <div class="productsCategories p-5 mx-5">
        
        <div class="d-flex flex-row justify-content-between flex-wrap py-2" >
            <div class="d-flex flex-wrap flex-row py-2">
                <router-link to="products" class="categories main mx-2">All products</router-link>
                <a v-for="category in categories" :key="category" href="" class="categories mx-1">{{ category }}</a>
            </div>
            <router-link class="allProdSpecial" to="products">ALL PRODUCTS</router-link>
        </div>

        <div class="containerProducts">
            <div class="product" v-for="product in productsList" :key="product">
                <router-link v-bind:to="'/product/'+ product ">
                <div class="productImg">
                    <img :src="linkMan" class="firstPic" alt="">
                    <img :src="linkWoman" class="secondPic" alt="">

                    <div class="details d-flex flex-row justify-content-between">
                        <a href="">Add to cart</a>
                        <div class=" d-flex flex-column">
                            <i class="far fa-heart"></i> 
                            <i class="fas fa-expand-arrows-alt"></i>

                        </div>
                    </div>

                </div>

                <div class="d-flex flex-row justify-content-between">

                    <div  class="d-flex flex-column">
                        <div class="name py-1"><b>{{ product }}</b></div>
                        <div class="price">$40.00</div>
                    </div>

                    <div class="d-flex flex-row flex-nowrap stars pt-4">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                  
            </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: ['Clothing', 'Bags', 'Shoes', 'Accessories'],
            linkMan: require('../assets/pictures/gender/man.jpg'),
            linkWoman: require('../assets/pictures/gender/woman.jpg'),
            productsList : ['White Tee8', 'Black Blouse', 'College jacket','White Tee2', 'Black Blouse2', 'College jacket2','White Tee3', 'Black Blouse3', 'College jacket3','White Tee', 'Black Blouse4', 'College jacket4']
            
        }
    }
}
</script>

<style scoped>
    @import '../assets/styles/productsMain.css';
</style>