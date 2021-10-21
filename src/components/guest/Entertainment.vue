<template>
<div class = "entertain">
<NavBar/><br>

</div>
</template>

<script>
import NavBar from './entertainments/NavBar'

export default {
    name: "Entertainment",
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
