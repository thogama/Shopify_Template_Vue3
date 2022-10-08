<template>
    <div style="height: 100vh;" :style="{backgroundImage:`url(./assets/5479107.jpg)`}" class=" p-5 ">
        <signature style=" position: absolute; bottom: 7vh;left: 7vh;" class="text-white fs-3">Alan Gama</signature>

        <div   style="background-color: rgb(68 52 233 / 20%);height: 85vh;" class="row rounded">

            <div class=" col-lg-8 d-lg-flex d-none  align-items-center justify-content-around">
                <img style="max-width: 90vh;padding: 3vh;" class="img-fluid  " src="~~/assets/login-v2.72cd8a26.svg">

            </div>

            <div class="col p-3 d-flex align-items-center justify-content-center p-3">
                <Login />


            </div>
        </div>





    </div>



</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useHead({
    title: "Best login"
})


</script>

<style scoped>
@media (max-width: 992px)
{
  .hider
   {
    display: none;
   }
}
.spinMe:hover {
    animation: infinite spin 2s both;
    
}
</style>