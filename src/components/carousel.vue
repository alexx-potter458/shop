<template>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/pictures/carousel/model1.jpg" class="d-block" >
            <div class="carousel-caption d-none d-md-block mb-5 ml-5">
              <h5>Get ready for the best</h5>
              <p>We have free stuff</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/pictures/carousel/model2.jpg" class="d-block">
            <div class="carousel-caption d-none d-md-block mb-5 ml-5">
              <h5>Get ready for the best</h5>
              <p>We have free stuff</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/pictures/carousel/model3.jpg" class="d-block" >
             <div class="carousel-caption d-none d-md-block mb-5 ml-5">
              <h5>Get ready for the best</h5>
              <p>We have free stuff</p>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <i class="fas fa-chevron-right"></i>
        </button>

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
          </div>
      </div>
</template>


<style scoped>
    @import '../assets/styles/carousel.css';
</style>