<template>
    <div style="height: 100vh;overflow-y: hidden;" class="row">
        <div class="hidder col p-4 ">

            <figure>
                <img class="img-fluid" src="~~/assets/3156627.jpg" />

            </figure>

        </div>
        <div class="col-sm-4 p-2  shadow-lg">
            <figure class="d-flex align-items-center">
                <img style="max-height:10rem" class="p-5 m-0 img-fluid" src="~~/assets/penrose-square.png" />
                <h2>Random logo</h2>
            </figure>

            <slot />
        </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .hidder {
        display: none;
    }
}
</style>