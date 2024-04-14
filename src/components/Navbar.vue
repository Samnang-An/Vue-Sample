<template>
    <nav :class="[`navbar-${theme}`,`bg-${theme}`, `navbar`,`navbar-expand-lg`]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <navbar-link 
                    v-for="(page, index) in publishedPage" class="nav-item" :key="index"
                    :is-active="index === activePage"
                    :page="page"
                    :index="index"
                    @actived="$emit('activated')"
                ></navbar-link>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary"
                    @click.prevent="changeTheme"
                >Toggle Button</button>
            </form>
        </div>
    </nav>
</template>
<script>
import NavbarLink from "./NavbarLink.vue";
export default{
    components: {
        NavbarLink
    },
    props:[`pages`,`activePage`],
    data() {
        return {
            theme: 'dark'
        }
    },
    created(){
        this.getThemeSetting();
    },  
    computed:{
        publishedPage(){
            return this.pages.filter(p=>p.published);
        }
    },
    methods: {
        changeTheme(){
            // this.theme = this.theme==='dark'?'light':'dark';
            let theme='light';
            if(this.theme==='light'){
                theme = 'dark';
            }
            this.theme = theme;
            this.storeThemeStorage();
        },
        storeThemeStorage(){
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting(){
            let theme = localStorage.getItem('theme');
            if(theme){
                this.theme = theme;
            }
        }
    }
}
</script>