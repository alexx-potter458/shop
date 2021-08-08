<template>
    <div>
         <div class="links mx-5">
            <router-link class="link" to="/">Home</router-link><span> - </span>
            <router-link class="link" to="/wishlist">Wishlist</router-link>
        </div>

        <div class="title"> Wishlist </div>
        <div class="content mx-5 mb-5">You have {{ numberOfItems() }} items in your wishlist.</div>

        <div class="list mx-5">
            <div class="element" v-for="product in products" :key="product">

                <div class="d-flex flex-row">
                    <div class="image">
                        <div class="profilePic">
                            <img src="../assets/pictures/product/1.webp" alt="" />
                        </div>
                    </div>

                    <div class="details mt-4">
                        <router-link v-bind:to="'/product/' + product" class="contentTitle">{{product}}<div class="myBorder"></div></router-link>
                        <div class="content">Size: Large</div>
                        <div class="content"> Colour: Green</div>
                    </div>
                </div>

                <div>
                    <div class="price mt-5 content">$40</div>
                </div>

                <div class="stock mt-5">
                    In stock
                </div>

                <button class="addToCart mt-5">
                    ADD TO CART
                </button>

                <button class="close mt-5"><i class="fas fa-times"></i></button>

            </div>


        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            products: ["Black blouse", "Crop top", "White tee"]
        }
    },
    methods: {
        numberOfItems: function() {
            return this.products.length;
        },
        removeItem: function() {
            let list = document.getElementsByClassName('close');

            for(let element of list) {
                element.addEventListener('click', () => {
                    
                    let myProdName = element.parentElement.getElementsByClassName('contentTitle')[0].innerText;
                    let prodIndex = this.products.indexOf(myProdName);
                    this.$delete(this.products, prodIndex);
                    
                })
            }

        }
    },
    mounted() {
        this.numberOfItems;
        this.removeItem();
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

    .content {
        color: gray;
        font-weight: 500;

    }
    .profilePic {
        padding: 1em;
    }

    .profilePic img {
        width: 100px;
        height: 120px;
        object-fit: cover;
    }

    .element {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .contentTitle {
        font-weight: 500;
    }

    .stock {
        background-color: goldenrod;
        padding: 8px;
        height: fit-content;
        font-weight: 500;
        border-radius: 5px;
    }

    button {
        height: fit-content;
    }

    .addToCart {
        border: none;
        color: white;
        background-color: rgb(36, 36, 36);
        letter-spacing: 3px;
        padding-left: 2em;
        padding-right: 2em;
        transition: .5s;
        cursor: pointer;
    }

    .addToCart:hover {
    background-color: black;
}


    .close {
        border: none;
        background: none;
    }

    .close i {
        transition: .2s;
    }

    .close i:hover {
        transform: rotate(90deg);
    }

    .contentTitle:hover {
        color: black;
    }

    .myBorder {
        background-color: black;
        height: 2px;

        transform: translateX(-50%) scaleX(0);
        transition: 0.5s;
    }

    .contentTitle:hover .myBorder {
        transform: translateX(0%) scaleX(1);
    }

    

</style>