<template>
    <header style="position: fixed;width: 100%;top:0vh ;z-index: 1;" class="accordion" id="accordionFlushExample">
        <div class="accordion-item">

            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="row  border p-4 accordion-body">
                    <div class="col-1"></div>
                    <div style="background-color: whitesmoke;" class="d-flex align-items-center p-0 col">

                        <font-awesome-icon class="ms-1 me-2 col-1 p-3 fa-md ps-0 ms-0 pe-0 me-0 "
                            icon="fa-solid fa-magnifying-glass" />

                        <input placeholder="Search for Products" class=" ps-0 ms-0 col border  form-control"
                            type="text" />
                    </div>
                    <font-awesome-icon data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne" id="busca"
                        class=" vue-svg col-1 p-3 fa-lg" icon="fa-solid fa-xmark" />

                </div>
                <div class="row text-center accordion-body">
                    <div class="col-6">666</div>
                    <div class="col-6">66</div>
                </div>

            </div>
            <hr />
        </div>



    </header>



    <div class=" p-3 border-bottom" id="header-hover">

        <div id="example-1" class=" align-items-center d-flex  justify-content-around">



            <font-awesome-icon style="width: 10vh" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                aria-expanded="false" aria-controls="flush-collapseOne" id="busca" class="  vue-svg"
                icon="fa-solid fa-magnifying-glass" />


            <font-awesome-icon style="width: 10vh" class=" vue-svg primary  p-2  fa-2xl" icon="fa-brands fa-vuejs" />



            <font-awesome-icon style="width: 10vh;" class="vue-svg   " icon="fa-solid fa-bars" />



        </div>
    </div>
</template>

<script>

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    const hold = document.getElementById("header-hover").style.top
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-hover").style.top = "0";
    } else {
        document.getElementById("header-hover").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

</script>

<style scoped>
.collapse {
    transition: height 0.45s ease;
    height: 100vh;
    background-color: whitesmoke;



}

.collapsing {
    transition: height 0.5s ease;
    background-color: white;

}

#header-hover {
    position: fixed;
    background-color: black;
    top: 0;
    width: 100%;
    display: block;
    transition: top 0.3s;
    z-index: 0;
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

/*asdasd */
section>p {
    color: #000;
}
</style>