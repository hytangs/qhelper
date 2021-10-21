<template>
<div class = "entertain">
<NavBar/><br>
<entertainrouter-view/>
</div>
</template>

<script>
import NavBar from './entertainments/NavBar'
import 

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