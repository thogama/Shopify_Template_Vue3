<script setup lang="ts">
const route = useRoute();

</script>
<template>
    <div class="p-2 row gy-3">
        <h1> Produto {{ route.params.id }}</h1>

        <div class="col-sm-6">
            <img class="img-fluid" src="~assets/blue.jpg" alt="guitar image">

        </div>
        <div class="col-sm-6    ">
            <img class="img-fluid" src="~assets/blue.jpg" alt="guitar image">

        </div>
    </div>

</template>


