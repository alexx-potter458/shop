<template>
   <div class="banner" id="banner">
          <i class="far check fa-check-circle"></i>
          <span class="text">{{ productName }} have been added to your cart.</span>
          <span><a class="viewCart" href="">View Cart</a></span>
          <i id="close" class="fas x fa-times"></i>
          
      </div>
</template>

<script>

export default {
    data() {
        return {
            productName: this.$route.params.name
        }
    },
    methods: {
        close: function() {
            let closeViewCart = document.getElementById('close');
            let banner = document.getElementById('banner')

            closeViewCart.addEventListener('click', function(){
                banner.classList.toggle('hide');
            })

        }
    },
    mounted() {
        this.close();
    }

}
</script>

<style scoped>
    .banner {
        position: relative;
        background-color: rgb(119, 197, 119);
        padding: 1em;
        margin: 3em;
        margin-top: -5em;
    }

    .check {
        font-size: 36px;
        font-weight: 200;
        color: white;
    }
    
    .text {
        color: white;
        padding: 1em;
    }

    .x {
        color: white;
        position: absolute;
        top: 2.5em;
        right: 50px;

    }
    .x {
        position: absolute;
        top: 1.5em;
        right: 2em;
        transition: 0.2s;
    }

    .hide {
        position: absolute;
        visibility: hidden;
        width: 0;
        height: 0;
    }

    .x:hover {
        transform: rotate(90deg);
    }

    .viewCart {
        color: white;
        border-bottom: 1px solid white;
    }

</style>