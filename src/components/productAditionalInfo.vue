<template>
    <div>
        <div class="detailItem">
            <button class="item activeItem">DESCRIPTION</button>
            <button class="item">ADDITIONAL INFORMATION</button>
            <button class="item">REVIEWS</button>
        </div>

        <div class="description tab activeTab">
            <div class="flexItem">
                <div class="title">About</div>

                <div class="content">
                    Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of 
                    an illustrated magazine and housed in a nice, gilded frame.
                    He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, 
                    and only stopped when he began to feel a mild, dull pain there that he had never felt before.
                </div>
                

                <div class="title">You will love</div>

                <div class="content">
                    <ul>
                        <li class="content">He must have tried it a hundred times</li>
                        <li class="content">shut his eyes so that he wouldn't have to look</li>
                        <li class="content">at the floundering legs, and only stopped</li>
                    </ul>

                </div>
            </div>

            <div class="flexItem">
                <img src="../assets/pictures/product/1.webp" alt="" />
            </div>

        </div>

        <div class="additionalInfo tab data">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores temporibus recusandae facere, esse eaque illum eius sapiente neque numquam pariatur sed consequatur facilis optio! Reiciendis aliquam neque consequuntur deleniti ea?
            Laudantium voluptatem ratione, magnam ipsa corrupti odit odio ea quia, nihil aperiam atque. Ipsam facilis similique mollitia ad, ullam iusto facere hic ipsum eos unde culpa tempore quae, accusantium libero!
            Rerum ratione quis asperiores ex odit placeat et deserunt impedit! Iste magni, numquam eligendi quod a adipisci consequuntur ipsum nesciunt, sit vel dicta dolorem amet deserunt suscipit quasi aut rem.
            Facilis ex quidem ratione minima suscipit earum, tempore magni dolores praesentium. Repudiandae sed illo id nemo totam, ex quis aspernatur ipsam! Quae reiciendis beatae fuga similique possimus ut explicabo pariatur!
            Aperiam error sed tempora voluptatum? Quibusdam minima tenetur ut quasi, a incidunt omnis eaque non cumque tempore harum et minus soluta blanditiis ullam temporibus ad adipisci nostrum maiores, quis autem.
        </div>

        <div class="reviews tab">
            <div v-for="review in reviews" :key="review" class="review mt-3">
                <div class="image">
                    <div class="profilePic">
                        <img src="../assets/pictures/product/1.webp" alt="" />
                        <div class="data mb-4"> {{review.date}} </div>
                    </div>
                    
                </div>

                <div class="reviewContent">
                    <div class="title"> {{review.name}} </div>
                    <div class="stars">
                        <div class="d-flex flex-row flex-nowrap stars mb-2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                    </div>
                    <div class="content">
                        {{ review.content }}
                    </div>
                </div>

                <div class="bottomLine"></div>
            </div>

            <div class="leaveReview my-5">
                <div class="title">Leave a review</div>

                <div class="d-flex flex-row justify-content-between">
                    <div class="half">
                        <div class="title">Your name*</div>
                        <input type="text" placeholder="Enter your name" required> 
                    </div>

                <div>
                    <div class="title half">Stars*</div>
                    <select>
                        <option value="1">1/5</option>
                        <option value="2">2/5</option>
                        <option value="3">3/5</option>
                        <option value="4">4/5</option>
                        <option value="5">5/5</option>
                    </select>

                </div>

                </div>

                <div class="full">
                    <div class="title">Your email*</div>
                    <input type="email" placeholder="Enter your email" required>
                </div>
                
                <div>
                    <div class="title">Review</div>
                    <textarea placeholder="Enter your review" cols="100" rows="5"></textarea>
                </div>

                <button class="post" type="submit">POST REVIEW</button>

            </div>
        </div>

        <div class="youMayLike">

                <div class="title mt-5">You might also like these</div>

                <div>
                    <splide :options="options" data-splide='{"type":"loop","perPage":5, "focus":"center"}'>
                        <splide-slide class="p-5" v-for="product in productsList" :key="product">
                            <router-link to="/product" class="product">
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
                        </splide-slide>
                        
                        
                    </splide>
                </div>
                
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
    data() {
        return {
            reviews : [
                {name: 'Han Solo', date: 'DEC 2019', content:'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;Whats happened to me?&quot; he thought. It wasnt a dream.'},
                {name: 'Luke Skywalker', date: 'DEC 2018', content: 'His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.'},
                {name: 'Princess Leia', date: 'DEC 2012', content: 'Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.'}
            ],
            linkMan: require('../assets/pictures/gender/man.jpg'),
            linkWoman: require('../assets/pictures/gender/woman.jpg'),
            productsList : ['White Tee8', 'Black Blouse','White Tee', 'Black Blouse4', 'College jacket4']
            
        }
    },
    methods: {
        tabs: function() {
            let buttons = document.getElementsByClassName('item');
            let tabs = document.getElementsByClassName('tab');

            for(let i=0; i<3; i++ ) {
                buttons[i].addEventListener('click',() => {
                    for(let j = 0; j<3; j++)
                        if(i != j) {
                            buttons[j].classList.remove('activeItem');
                            tabs[j].classList.remove('activeTab');
                        }

                    buttons[i].classList.add('activeItem');
                    tabs[i].classList.add('activeTab');
                })
            }
        }
    },
    mounted() {
        this.tabs();
    }
}
</script>

<style scoped>

    .detailItem {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid gray;
    }

    .detailItem .item {
        padding: 1em;
        outline: none;
        border: none;
        background: none;
        font-weight: 500;
        letter-spacing: 3px;
        color: gray;
        border-bottom: 1px solid gray;
        transition: 0.5s;
    }

    .detailItem .item:hover {
        border-bottom: 1px solid black;
        color: black;
    }

    .tab {
        visibility: hidden;
        position: fixed;
    }

    .description {
        display: flex;
    }

    .flexItem {
        padding: 2em;
    }
    .title {
        font-weight: 500;
        color: black;
        padding-top: 1em;
        padding-bottom: 1em;
        letter-spacing: 1px;
        font-size: 18px;
    }

    .content {
        color: gray;
        font-weight: 500;

    }

    .flexItem img {
        width: 40vw;
        height: 40vw;
        object-fit: cover;
    }

    .activeTab {
        width: 100%;
        height: 100%;
        visibility: visible;
        position: relative;
    }
    .detailItem .activeItem {
        border-bottom: 1px solid black;
        color: black;
    }

    .stars i {
        color: darkgoldenrod;
    }

    textarea {
        width: 60vw;
    }

    .review {
        display: flex;
        position: relative;
        flex-direction: row;
        width: 60vw;
    }

    .profilePic {
        padding: 1em;
    }

    .profilePic img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        border: 2px solid whitesmoke;
        padding: 10px;
    }

    .data {
        display: block;
        text-align: center;
        padding-top: 1em;
        color: gray;
        font-weight: 500;
    }

    .leaveReview {
        width: 60vw;
    }

    .bottomLine {
        position: absolute;
        background-color: gray;
        height: 1px;
        width: 60vw;
        bottom: 0;
        left: 0;
    }

    .half input, select{
        width: 28vw;
    }

    .full input {
        width: 60vw;
    }

    .post {
        border: none;
        color: black;
        background-color: white;
        border: 1px solid rgb(36, 36, 36);
        letter-spacing: 3px;
        font-weight: 500;
        letter-spacing: 3px;
        padding-left: 2em;
        padding-right: 2em;
        transition: .5s;
        margin-top: 1em;
        padding: 0.5em;
        cursor: pointer;
    }

    .post:hover {
        background-color: rgb(36, 36, 36);
        color: white;
    }

</style>