<template>
    <div class="main">
        <div class="title">OUR HISTORY</div>
        <div class="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis similique culpa laudantium itaque est illum officiis labore, earum a ut? Dolores optio saepe esse aliquam nobis delectus quasi, cumque rerum!
                Culpa accusantium possimus sint optio atque incidunt consequuntur natus dolore! Nam, unde necessitatibus doloribus nisi quibusdam sequi explicabo culpa minima eos magnam esse autem ea vitae. Delectus nemo aliquam fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel accusantium rem praesentium repellendus aliquam aliquid dolorum quae quidem sit. Officia sapiente unde laudantium autem, soluta quis enim impedit placeat rem!</p>
        </div>

        <div class="myCarousel">
              <splide :options="options" data-splide='{"type":"loop","perPage":5, "focus":"center"}'>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-1.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-2.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-3.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-4.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-5.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-5.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-1.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-2.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-3.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-4.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-5.svg" alt="">
                </splide-slide>
                <splide-slide>
                    <img src="https://varkala-react-version.vercel.app/img/brand/brand-5.svg" alt="">
                </splide-slide>
            </splide>
        </div>
 
    </div>
</template>


<script>

    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
}

</script>


<style scoped>
    

    .main {
        padding: 64px;
    }
    .title {
        color: darkgoldenrod;
        letter-spacing: 3px;
        font-weight: 600;
    }

    .text {
        padding-top: 16px;
    }
    .text p {
        color: gray;
    }

    .myCarousel {
        position: relative;
        overflow: hidden;
        height: 250px;
        max-width: 1300px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    img {
        max-width: 100px;
        min-width: 50px;
        margin: 3.8em;
    }
    
    .arrow {
        opacity: 0;
    }
   

</style>