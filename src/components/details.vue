<template>
    <div class=" p-5 main">
        <div class="item d-flex flex-row">
            <div class="p-3 icon">
                <i class="fas fa-truck"></i>
            </div>
            <div>
                <div class="mainText">Free shipping</div>
                <div class="secondText">Free shipping over $300</div>
            </div>
        </div>
        <div class="item d-flex flex-row">
            <div class="p-3 icon">
                <i class="fas fa-money-check-alt"></i>
            </div>
            <div>
                <div class="mainText">Money back</div>
                <div class="secondText">30 Days Money Back Guarantee</div>
            </div>
        </div>
        <div class="item d-flex flex-row">
            <div class="p-3 icon">
                <i class="fas fa-phone-square-alt"></i>
            </div>
            <div>
                <div class="mainText">020-800-456-747</div>
                <div class="secondText">24/7 Available Support</div>
            </div>
        </div>
        <div class="item d-flex flex-row">
            <div class="p-3 icon">
                <i class="fas fa-truck"></i>
            </div>
            <div>
                <div class="mainText">Money back guarantee</div>
                <div class="secondText">Always the best prices</div>
            </div>
        </div>
      
    </div>    
</template>


<style scoped>
    .icon i {
        font-size: 25px;
        color: gray;
    }

    .mainText {
        font-weight: 600;
    }

    .secondText {
        color: gray;
    }

    .main {
        background-color: whitesmoke;
        text-align: center;
        display: grid;
        grid-template-columns: repeat(4, 3fr);
    }

    @media screen and (max-width: 1000px) {
    .main {
        grid-template-columns: repeat(2, 3fr);
    }
}
</style>
