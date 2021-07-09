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
    
        <div class="d-flex flex-row flex-nowrap justify-content-between px-5 py-5 position-relative">
            <div class="d-flex flex-row">
                <a href="">
                    <div><b>ValStore</b></div>
                </a>
                <div id="categories" class="hideMiddle hideSmall d-flex flex-row text-al">
                    <div v-for="element in categories" :key="element.selector">
                        <a class="px-2 selector" style="cursor: pointer;">{{ element.selector }} <i
                                class="fas fa-chevron-up"></i></a>
                        <div class="dropdown-menu-end shadow m-3 drop">
                            <a class="dropdown-item" v-for="subcategory in element.subCategories" :key="subcategory">{{ subcategory }}</a>
                            
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
                <a href="">
                    <div class="px-2"> <i class="far fa-user-circle"></i> </div>
                </a>
                <a href="">
                    <div class="px-2"> <i class="far fa-heart"></i> </div>
                </a>
                <a href="">
                    <div class="px-2"> <i class="fas fa-store"></i> </div>
                </a>
                <a href="">
                    <div class="px-2 hideMiddle hideSmall"> <i class="fas fa-bars"></i> </div>
                </a>
            </div>
    
            <div class="hideMax">
                <a href="">
                    <div class="px-2"> <i class="fas fa-bars"></i> </div>
                </a>
            </div>
    
        </div>
    <link href="../assets/scripts/dropdown.js" rel="preload" as="script">
    </div>

</template>

<script>

export default({
    mounted() {external.head_script('../assets/scripts/dropdown.js')},
    data() {
        return {
            categories: [{
                selector:'Home',
                subCategories: ['Home1', 'Home2', 'Home3']
            }, {
                selector: 'Shop',
                subCategories: ['pag1', 'pag2']
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
        }

})


</script>

<style scoped>
 @import '../assets/styles/footer.css';
</style>