<template>
  <div>
    <div class="myContainer">
      <div class="detailsContainer">
        <div class="details p-5">
            <div class="title"> This product </div>

            <div class="d-flex flex-row mt-2">
                <div class="price">$100</div> 
                <div><s class="cut mx-2">$123</s></div>
                 <div class="d-flex flex-row flex-nowrap stars mx-2 my-1">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                </div>
                <div class="reviews">
                    300 REVIEWS
                </div>
            </div>
            
            <div class="description py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam delectus, mollitia similique soluta assumenda dicta numquam iure aspernatur maxime praesentium consequatur doloribus tempore dolorum fuga necessitatibus debitis reprehenderit, a tempora!
            </div>

            <div class="size mt-4">
                <div class="name">
                    Size 
                    <span class="req">(required)</span>

                    <div class="sizeSelect my-3">
                        <select class="sizes">
                            <option >LARGE</option>
                            <option >MEDIUM</option>
                            <option >SMALL</option>
                        </select>
                    </div>

                </div>

                <div class="name">
                    Type 
                    <span class="req">(required)</span>
                
                    <div class="category my-3">
                        <div class="option">HOODIE</div>
                        <div class="option">COLLEGE</div>
                    </div>

                    <div class="addToCart d-flex flex-row">
                        <div class="quantity d-flex flex-row p-1">
                            <div id="number" class="number px-2">0</div>
                            <div class="arrows d-flex flex-column px-3">
                                <i id="up" class="fas fa-sort-up"></i>
                                <i id="down" class="fas fa-caret-down"></i>
                            </div>
                        </div>
                        <button class="add">
                            ADD TO CART <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>

                    <div class="option"><i class="far fa-heart"></i> Add to wishlist</div>

                    <div class="name">Category: <span class="req">This category</span></div>
                    <div class="name">Tags: <span class="req">Tag 1</span>, <span class="req">Tag 2</span></div>

                </div>
            </div>    

        </div>
      </div>

      <div class="pictures">
        <img src="../assets/pictures/product/1.webp" alt="" />
        <img src="../assets/pictures/product/2.webp" alt="" />
        <img src="../assets/pictures/product/3.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        counter: function() {
            let number = document.getElementById('number');
            let up = document.getElementById('up');
            let down = document.getElementById('down');

            up.addEventListener('click', function(){
                number.innerText = (Number(number.innerText) + 1);
            })
            down.addEventListener('click', function(){
               number.innerText = (Number(number.innerText) - 1);
            })
        }
    },
    mounted() {
        this.counter();
    }
};
</script>

<style scoped>

.myContainer {
  position: relative;
}

.pictures {
  display: flex;
  flex-direction: column;
}

.pictures img {
  display: block;
  margin-bottom: 1em;
  width: 40vw;
}

.detailsContainer {
    position: absolute;
    top:0;
    right: 0;
    height: 100%;
}

.details {
  position: sticky;
  left: 50vw;
  top: 10px;
  width: 40vw;
}

.details .title {
    font-weight: 600;
    font-size: 30px;
}

.price {
    margin-top: -4px;
    color: gray;
    font-weight: 500;
    font-size: 20px;
}

.cut {
    color: gray;
    font-size: 16px;
}

.stars i {
    color: rgb(119, 197, 119);
}

.reviews {
    color: gray;
    font-weight: 500;
}

.description {
    color: gray;
}

.name {
    font-weight: 500;
}

.name .req {
    font-weight: 100;
    color: gray;
    font-size: 14px;
}

.sizes {
    width: 100px;
}

.sizes option {
    width: 200px;
}

.category {
    display: flex;
    flex-direction: row;
}

option:hover {
    background-color: rgb(119, 197, 119)
}

.option {
    color: rgb(119, 197, 119);
}

.option i {
    color: rgb(119, 197, 119);
}

.category .option {
    color: rgb(119, 197, 119);
    border: 2px solid rgb(119, 197, 119);
    padding: 2px;
    transition: 0.5s;
}

.category .option:hover {
    background-color: rgb(119, 197, 119);
    color: black;
}

.addToCart {
    border: 1px solid gray;
    width: fit-content;
    margin-bottom: 16px;
}

.add {
    border: none;
    color: white;
    background-color: rgb(36, 36, 36);
    letter-spacing: 3px;
    padding-left: 2em;
    padding-right: 2em;
    transition: .5s;
    cursor: pointer;
}

.add:hover {
    background-color: black;
}

.add i {
    color: white;
}

.arrows i:hover {
    background-color: gray;
}

.arrows {
    visibility: hidden;
}

.quantity:hover .arrows {
    visibility: visible;
}

</style>