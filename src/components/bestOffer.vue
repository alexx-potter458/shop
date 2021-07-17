<template>
    <div class="main">
        <img src="../assets/pictures/carousel/model3.jpg" alt="">
        <div class="deal">
            <div class="text">
                DEAL OF THE WEEK
            </div>
            <div class="bigText">
                Oversized stuff
            </div>
            <div class="price">
                <s>$400</s> $200
            </div>
            <div class="procent">
                50% off
            </div>
            <div class="hour">
                <div class="days ">
                    <div class="comp">{{ time.day }}</div>
                    <div>days</div>
                </div>
                <div class="hours ">
                    <div class="comp">{{ time.hour }}</div>
                    <div>hours</div>
                </div>
                <div class="minutes ">
                    <div class="comp">{{ time.minute }}</div>
                    <div>minutes</div>
                </div>
                <div class="seconds ">
                    <div class="comp">{{ time.second }}</div>
                    <div>seconds</div>
                </div>
            </div>
            <button class="shopNow">SHOP NOW</button>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: {day:0, hour:0, minute:0, second:0}
        };
    },
    methods: {
        testFunction: function () {
            var v = this;
            setInterval(function () {
                let date = new Date()
                v.time.day = date.getDay();
                v.time.hour = date.getHours();
                v.time.minute = date.getMinutes();
                v.time.second = date.getSeconds();
            }, 1000);
        }
    },
    mounted() {
        this.testFunction()
    }
}

</script>

<style scoped>
    .main {
        height: 500px;
        position: relative;
        overflow: hidden;
        z-index: 0;
    }

    .main img {
        max-width: 100%;
        min-height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
    }

    .deal {
        max-width: 60%;
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
    }

    .text {
        color: brown;
        font-weight: 600;
        font-size: 20px;
        letter-spacing: 2px;
    }
    .bigText {
        font-weight: 700;
        font-size: 45px;
        margin-bottom: 16px;
    }

    .price {
        color: gray;
        margin-bottom: 16px;
    }
    .price s {
        color: gray;
    }

    .procent {
        display: block;
        background-color: darkred;
        width: fit-content;
        padding: 8px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        margin-bottom: 16px;
    }

    .hour {
        margin-bottom: 16px;
        padding: 16px;
        background-color: whitesmoke;
        box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, .1);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        text-align: center;
    }

    .shopNow {
        outline: none;
        border: 1px black solid;
        background: none;
        padding: 8px;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 3px;
        transition: .5s;
    }

    .shopNow:hover {
        background-color: black;
        color: white;
    }

    .hour .comp {
        font-weight: 600;
    }
</style>