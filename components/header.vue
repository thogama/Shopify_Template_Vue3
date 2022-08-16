<template>
    <div style="position: absolute;width: 100%;" class="accordion" id="accordionFlushExample">
        <div class="accordion-item">

            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="row border p-4 accordion-body">
                    <div class="col-3">

                    </div>
                    <input placeholder="Search for Products" class="col border border-0 form-control" type="text" />
                    <div class="col-2">

                    </div>
                    <font-awesome-icon data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne" id="busca"
                        class="vue-svg  col-1 p-2 fa-2xl" icon="fa-solid fa-xmark" />
                </div>
            </div>
        </div>


    </div>



    <div  class=" p-3 border-bottom" id="header-hover">

        <div id="example-1" class=" align-items-center row">



            <font-awesome-icon data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                aria-controls="flush-collapseOne" id="busca" class="col p-1 vue-svg"
                icon="fa-solid fa-magnifying-glass" />


            <font-awesome-icon class=" vue-svg primary col p-2 fa-2xl" icon="fa-brands fa-vuejs" />



            <font-awesome-icon class="vue-svg col  " icon="fa-solid fa-bars" />



        </div>
    </div>
</template>

<script>



</script>

<style scoped>
.collapse {
    transition: height  0.45s ease;
    height: 85vh;
    background-color: whitesmoke;



}

.collapsing {
    transition: height 0.5s ease;
    background-color: whitesmoke;

}

#header-hover {
    background-color: black;

}

#header-hover:hover {
    background-color: white;

    transition: 0.25s;

}



@media (max-width: 768px) {
    .hider {

        display: none;
    }
}


.vue-svg {
    color: goldenrod;
    transition: color 1s;
}

.vue-svg:hover {

    color: black;
}
</style>