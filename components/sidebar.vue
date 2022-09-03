<template>



  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="bg-dark text-white offcanvas-header">
      <h5 class=" offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
      <button type="button" class="btn-primary btn bg-primary btn-close text-reset" data-bs-dismiss="offcanvas"
        aria-label="Close"></button>
    </div>
    <div style="height:100vh;background-image: repeating-linear-gradient(45deg, #d79a00,#e6bd55,#f0d798, transparent 100px);"
      class="d-flex p-5 flex-column align-items-center offcanvas-body">
      <div class="shadow-lg p-3">
        <h1 class="p-2">Login

        </h1>



        <Login class="mt-5" />
      </div>


    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>