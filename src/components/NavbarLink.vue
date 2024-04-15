<template>
    <li>
        <!-- :class="activeClasses" -->
        <router-link 
            :to="`/${index}`"    
            class="nav-link"
             active-class="active emphasize"

            aria-current="page" 
            :href="page.link.url"
            :title="`This link goes to the ${page.link.text} page`"
            @click.prevent="$bus.$emit('navbarLinkActivated',index)"
        >{{ page.link.text }}</router-link>
    </li>
</template>
<script>
    export default{
        props: ['page', 'index']
    }
</script>