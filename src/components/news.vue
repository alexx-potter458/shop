<template>
    <div class="d-block position-relative">
        <div >
            <div class="title py-5">
                New Arrivals
            </div>
            <div class="content py-3 px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, nam reiciendis ipsam ipsa omnis laborum architecto numquam provident molestiae asperiores deserunt facere corporis incidunt, officiis aliquam ratione, nihil debitis nesciunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, ratione obcaecati! Distinctio dolorum facere dolores sequi ex praesentium vitae, dignissimos impedit obcaecati voluptates officia, ut ducimus voluptas maiores ipsam quas.</div>

        </div>
    </div>
</template>


<style scoped>
.title {
    text-align: center;
    font-size: 5em;
    font-weight: 600;
}

.content {
    text-align:center;
    margin: auto;
    font-weight: 400;
    color: gray;
    width: 70vw;
}

@media screen and (max-width: 900px) and (min-width: 600px) {
    .content {
        width: 80vw;
    }
}

@media screen and (max-width: 600px) {
    .content {
        width: 90vw;
    }
}

</style>