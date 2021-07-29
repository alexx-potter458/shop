<template>
    <div class="mainContainer d-flex flex-wrap justify-content-center py-5">

        <router-link to="/products">
            <div class="men common">
                <span class="innerContent">Men</span>
                <img class="innerContent" src="../assets/pictures/gender/man.jpg">
            </div>
        </router-link>

        <router-link to="/products">
            <div class="women common">
                <span class="innerContent">Women</span>
                <img class="innerContent" src="../assets/pictures/gender/woman.jpg">
            </div>
        </router-link>

    </div>
</template>

<style scoped>
@import '../assets/styles/genders.css';
</style>