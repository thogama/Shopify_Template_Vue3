<template>
    <div>
        <Header />
        <div class="p-5 row">
            <slot  />
        </div>
        <Footer />


    </div>
</template>

<script>
useHead({
    title: "Vue template"
})
</script>

<style scoped>
</style>