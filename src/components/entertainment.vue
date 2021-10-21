<template>
<div class = "entertain">
<NavBar/><br>
<router-view/>
</div>
</template>

<script>
import NavBar from '@/components/entertainments/NavBar.vue'

export default {
    name: "entertainment",
    components:{
        NavBar
    }
}
</script>

<style scoped>
.entertain{
    width: 100%;
}
</style>
