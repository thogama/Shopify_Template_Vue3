

<template>

    <!-- Search  -->
    <div style="height: 90vh;" class="offcanvas  offcanvas-top" tabindex="-1" id="offcanvasExample1"
        aria-labelledby="offcanvasExampleLabel">

        <div class="p-5 pt-2 offcanvas-body">
            <div class="row  border p-4 ">

                <div style="background-color: whitesmoke;" class="d-flex align-items-center p-0 col">

                    <font-awesome-icon class="ms-1 me-2 col-1 p-3 fa-md ps-0 ms-0 pe-0 me-0 "
                        icon="fa-solid fa-magnifying-glass" />
                    <form class="col" @submit="(e) => do_search(field, e)">
                        <input v-model="field" placeholder="Search for Products"
                            class=" ps-0 ms-0  border  form-control" type="text" />
                    </form>

                    <font-awesome-icon data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1"
                        aria-controls="offcanvasExample1" id="busca" class="vue-svg col-1 p-3 fa-lg"
                        icon="fa-solid fa-xmark" />
                </div>  
            </div>

            <div class="row text-center p-5 ">
                <div class="bg-danger col-6">666</div>

                <div class="bg-primary col-6">66</div>
            </div>



        </div>
    </div>









    <div class=" p-3 border-bottom" id="header-hover">

        <div id="example-1" class=" align-items-center d-flex  justify-content-around">



            <font-awesome-icon style="width: 10vh" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1"
                aria-controls="offcanvasExample1" id="busca" class="col vue-svg" icon="fa-solid fa-magnifying-glass" />

            <font-awesome-icon style="width: 15vh;height: 8vh;" class="col  vue-svg primary  "
                icon="fa-brands fa-vuejs" />



            <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"
                class="vue-svg d-flex justify-content-center align-items-center col ">
                <div class="hider ">
                    My account
                </div>
                <font-awesome-icon style="width: 10vh;" icon="fa-solid fa-user" />
            </div>




        </div>

    </div>

</template>

<script  lang="ts" setup>
const field = useState("field", () => "")

const do_search = (message: string, e: Event) => {
    e.preventDefault()
    console.log(message)
}



var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
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
    transition: height 0.25s ease;
    height: 100vh;
    background-color: white;



}

.collapsing {
    transition: height 0.25s linear;
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
    transition: color 0.5s ease;
    cursor: pointer;

}

.vue-svg:hover {

    color: black;
}

/*asdasd */
section>p {
    color: #000;
}
</style>