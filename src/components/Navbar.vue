<template>
    <nav :class="[`navbar-${theme}`,`bg-${theme}`, `navbar`,`navbar-expand-lg`]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in publishedPage" class="nav-item" :key="index">
                    <navbar-link 
                        :is-active="index === activePage"
                        :page="page"
                        @click.prevent="navLinkClick(index)"
                    ></navbar-link>
                </li>
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
    props:[`pages`,`activePage`,`navLinkClick`],
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