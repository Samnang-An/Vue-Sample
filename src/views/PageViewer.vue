<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{ page.pageTitle }}</h1>
        <p>{{page.content}}</p>
    </div>
</template>
<script>
export default{
    props:['index'],
    created(){
        this.page = this.$page.getSinglePage(this.index);
    },
    watch:{
        index(newIndex,prevIndex){
            this.page = this.$page.getSinglePage(newIndex);
        }
    }
}
</script>
<style scoped>
.emphasize{
    color: blue;
}

</style>