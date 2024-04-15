<template>
    <navbar></navbar>
    <router-view></router-view>
</template>

<script>
import PageViewer from './views/PageViewer.vue';
import Navbar from './components/Navbar.vue';
import CreatePage from './views/CreatePage.vue';

export default{
    components:{
        PageViewer,
        Navbar,
        CreatePage
    },
    methods:{
        pageCreated(pageObj){
            this.pages.push(pageObj);
        }
    }
}

</script>
