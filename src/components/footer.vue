<template>
        <div id="footer">
        <div class="d-flex flex-row flex-lg-nowrap justify-content-between px-5 pt-3 position-relative">
            <div class="hideMiddle hideSmall">
                <a href=""><i class="fab fa-twitter"></i></a>
                <a class="px-1" href=""><i class="fab fa-instagram"></i></a>
                <a href="tel:+4058738734"><i class="fas fa-phone"></i>+4058738734</a>
            </div>
    
            <div>
                <span class="text-center ">Getting things free</span>
            </div>
    
            <div class="d-flex flex-row text-al hideSmall">
                <div>
                    <a class="p-3 selector" style="cursor: pointer;">English <i class="fas fa-chevron-up"></i></a>
                    <div class="dropdown-menu-end shadow m-3 drop">
                        <a class="dropdown-item">English</a>
                        <a class="dropdown-item">Romanian</a>
                    </div>
                </div>
    
                <div>
                    <a style="cursor: pointer;" class="selector">Ron <i class="fas fa-chevron-up"></i></a>
                    <div class="dropdown-menu-md-start shadow m-3 drop">
                        <a class="dropdown-item">Ron</a>
                        <a class="dropdown-item">Eur</a>
                    </div>
                </div>
    
            </div>
        </div>
    
        <div class="second d-flex flex-row flex-nowrap justify-content-between px-5 pt-5 position-relative">
            <div class="d-flex flex-row">
                <router-link to="/">
                    <div><b>Store</b></div>
                </router-link>
                <div id="categories" class="hideMiddle hideSmall d-flex flex-row text-al">
                    <div v-for="element in categories" :key="element.selector">
                        <a class="px-2 selector" style="cursor: pointer;">{{ element.selector }} <i
                                class="fas fa-chevron-up"></i></a>
                        <div class="dropdown-menu-end shadow m-3 drop">
                            <router-link to="/products" class="dropdown-item" v-for="subcategory in element.subCategories" :key="subcategory">{{ subcategory }}</router-link>
                            
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="d-flex flex-row flex-nowrap icons">
                <div class="input-group searchForm px-4 hideMiddle hideSmall">
                    <div class="form">
                        <input placeholder="Search" type="search" id="form1" class="search" />
                    </div>
                    <a href="">
                        <button type="button" class="search">
                            <i class="fas fa-search"></i>
                        </button>
                    </a>
                </div>
                <a id="account">
                    <div class="px-2"> <i class="far fa-user-circle"></i> </div>
                </a>
                <router-link to="/wishlist">
                    <div class="px-2"> <i class="far fa-heart"></i> </div>
                </router-link>
                <a id="cartBtn">
                    <div class="px-2"> <i class="fas fa-store"></i> </div>
                </a>
                <a id="sideMenuBtn">
                    <div class="px-2 hideMiddle hideSmall"> <i class="fas fa-bars"></i> </div>
                </a>
            </div>
    
            <div class="hideMax">
                <a href="">
                    <div class="px-2"> <i class="fas fa-bars"></i> </div>
                </a>
            </div>
    
        </div>
        
        <div id="darkener" class=""></div>
        <div id="form" class="loginForm ">
            <button id="loginBtn" class="logReg active">Login</button>
            <button id="regBtn" class="logReg">Register</button>

            <div class="line"></div>

            <div id="loginForm" class="login">
                <div>Email</div>
                <input class="input" type="email" name="">
                <div class="d-flex flex-row justify-content-between"><span>Password</span><span class="forgot">Forgot the pass?</span></div>
                <input class="input" type="email" name="">
                <div><input type="checkbox" name=""> Remember me in 30days</div>
                <button class="submit" type="submit">Login</button>
            </div>

            <div id="registerForm" class="register hideForm">
                <div class="text">Get some real stuff</div>
                <div>Name</div>
                <input class="input" type="text" name="">
                <div>Email</div>
                <input class="input" type="email" name="">
                <div class="d-flex flex-row justify-content-between"><span>Password</span> <span class="forgot"> Forgot the pass?</span></div>
                <input class="input" type="email" name="">
                <button class="submit" type="submit">Register</button>
            </div>

            <div class="line"></div>
            <div class="social"><button><i class="fab fa-google"></i></button><button><i class="fab fa-facebook-square"></i></button></div>

        </div>

        <div id="sideMenu" class="sideMenu p-5">
            <div id="x"><i class="fas fa-times"></i></div>
            <div class="pl-2 pt-5 pb-5">Shop</div>
            <div class="p-2">Home</div>
            <div class="p-2">Link</div>
            <div class="p-2">Disabled</div>
            <div class="p-2">Drop Link</div>
            <div class="p-2 pt-5">
                <a href=""><i class="fab fa-twitter"></i></a>
                <a class="px-1" href=""><i class="fab fa-instagram"></i></a>
                <a href="tel:+4058738734"><i class="fas fa-phone"></i>+4058738734</a>
            </div>
            <div class="p-2 pt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque officia esse, magnam distinctio, iste quo aspernatur repellendus, aliquam dolores tenetur vel sequi quam ab vero laudantium doloribus voluptatem? Accusamus, aperiam!
            </div>
        </div>

        <div id="cart" class="cart">
            <div class="m-5">
                <div id="exitCart" class="mb-5"><i class="fas fa-times"></i></div>
                <div class="list mx-5">
            <div class="element" v-for="product in products" :key="product">

                <div class="d-flex flex-row">
                    <div class="image">
                        <div class="profilePic">
                            <img src="../assets/pictures/product/1.webp" alt="" />
                        </div>
                    </div>

                    <div class="details mt-2">
                        <router-link v-bind:to="'/product/' + product" class="contentTitle">{{product}}<div class="myBorder"></div></router-link>
                        <div class="content">Quantity: 1</div>
                        <div class="content"> Price: $40</div>
                    </div>
                </div>
                <button class="close mt-3"><i class="fas fa-times"></i></button>

            </div>

            <div id="emptyList">
                There is no item here
            </div>

            <div class="buttons d-flex flex-column">
                <div class="subototal" > Subtotal: $450</div>
                <button class="seeCart mb-2">SEE CART</button>
                <button class="checkout">CHECKOUT</button>
            </div>


        </div>
            </div>
        </div>

    </div>

</template>

<script>

export default({
    data() {
        return {
            products: ["Black blouse", "Crop top", "White tee"],
            categories: [{
                selector:'Home',
                subCategories: ['Home1', 'Home2', 'Home3']
            }, {
                selector: 'Shop',
                subCategories: ['Products', 'Products']
            }, {
                selector: 'Icons',
                subCategories: ['pag1', 'pag2']
            }, {
                selector: 'Pages',
                subCategories: ['pag1', 'pag2']
            }, {
                selector: 'Docs',
                subCategories: ['pag1', 'pag2']
            }]
            }
    },
    methods: {
        removeItem: function() {
            let list = document.getElementsByClassName('close');
            let emptyList = document.getElementById("emptyList");

            for(let element of list) {
                element.addEventListener('click', () => {
                    
                    let myProdName = element.parentElement.getElementsByClassName('contentTitle')[0].innerText;
                    let prodIndex = this.products.indexOf(myProdName);
                    this.$delete(this.products, prodIndex);
                    if(this.products.length == 0) {
                       emptyList.style.visibility = 'visible' 
                    }
                    
                })
                
            }

        },

        loginForm: function() {
            let account = document.getElementById('account');
            let loginForm = document.getElementById('form')
            let darkener = document.getElementById('darkener')
            let loginBtn = document.getElementById('loginBtn')
            let regBtn = document.getElementById('regBtn')
             let login = document.getElementById('loginForm')
            let register = document.getElementById('registerForm')

            account.addEventListener('click', function(){
                loginForm.classList.toggle('isActive')
                darkener.classList.toggle('darkener')
                document.body.style.overflow = 'hidden';
            })
            darkener.addEventListener('click', function(){
                loginForm.classList.remove('isActive')
                darkener.classList.remove('darkener')
                loginBtn.classList.add('active')
                regBtn.classList.remove('active')
                document.body.style.overflow = 'visible';
            })

            loginBtn.addEventListener('click', function(){
               login.classList.remove('hideForm')
               register.classList.add('hideForm')
                loginBtn.classList.add('active')
                regBtn.classList.remove('active')
               
            })
            regBtn.addEventListener('click', function(){
               register.classList.remove('hideForm')
               login.classList.add('hideForm')
               regBtn.classList.add('active')
               loginBtn.classList.remove('active')
            })
        },
        cart: function() {
            let cartBtn = document.getElementById('cartBtn');
            let cart = document.getElementById('cart');
            let darkener = document.getElementById('darkener');
            let exit = document.getElementById('exitCart');

            cartBtn.addEventListener('click', function(){
                cart.classList.toggle("cartIsActive");
                darkener.classList.toggle('darkener');
                document.body.style.overflow = 'hidden';
            })
            darkener.addEventListener('click', function(){
                cart.classList.remove("cartIsActive");
                darkener.classList.remove('darkener');
                document.body.style.overflow = 'visible';
            })
            exit.addEventListener('click', function(){
                cart.classList.remove("cartIsActive");
                darkener.classList.remove('darkener');
                document.body.style.overflow = 'visible';
            })
            
        },
        side: function() {
            let sideMenuBtn = document.getElementById('sideMenuBtn');
            let sideMenu = document.getElementById('sideMenu');
            let darkener = document.getElementById('darkener');
            let exit = document.getElementById('x');

            sideMenuBtn.addEventListener('click', function(){
                sideMenu.classList.toggle("sideIsActive");
                darkener.classList.toggle('darkener');
                document.body.style.overflow = 'hidden';
            })
            darkener.addEventListener('click', function(){
                sideMenu.classList.remove("sideIsActive");
                darkener.classList.remove('darkener');
                document.body.style.overflow = 'visible';
            })
            exit.addEventListener('click', function(){
                sideMenu.classList.remove("sideIsActive");
                darkener.classList.remove('darkener');
                document.body.style.overflow = 'visible';
            })
            
        },
        dropdown: function() {
            let select = document.getElementsByClassName('selector')

            for (let selector of select)
                selector.addEventListener('click', show);

            function show(event) {
                event.target.classList.toggle('active');
                for(let selector of select) {
                    if(selector != event.target && selector.classList.contains('active'))
                        selector.classList.remove('active');
                }
            }

            window.onclick = hide;

            function hide() {
                if(!event.target.matches('.selector')) {
                    for (let selector of select) {
                        if (selector.classList.contains('active'))
                            selector.classList.remove('active')
                
                    }
                }
            }

        }
        
    
    },
    mounted() {
        this.loginForm();
        this.side();
        this.dropdown();
        this.cart();
        this.removeItem();
    }
})


</script>

<style scoped>
 @import '../assets/styles/footer.css';
</style>