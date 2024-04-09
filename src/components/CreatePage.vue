<template>
    <div class="container mb-3">
        <form action="">
            <div class="row">
                <div class="col">
                    <div class="mb-3">
                        <label for="" class="form-label">Page Title</label>
                        <input 
                            type="text" 
                            class="form-control"
                            v-model="pageTitle"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea
                            type="text"
                            class="form-control"
                            rows="5"
                            v-model="content"
                        ></textarea>
                    </div>
                </div>
                <div class="col">
                    <div class="mb-3">
                        <label for="" class="form-label">Link Text</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="linkText"
                        ></input>
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Link URL</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="linkUrl"
                        ></input>
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="published">
                            <label class="form-check-label" type="gridCheck1">
                                Published</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <button
                    class="btn btn-primary"
                    :disabled="isFormInvalid"
                    @click.prevent="submitForm"
                >create Page</button>
            </div>
        </form>
    </div>
 <!-- @input="(e)=> pageTitle = e.target.value" -->
</template>
<script>

export default{
    emits: {
        pageCreated({pageTitle,content,link}){
            if(!pageTitle){
                return false;
            }
            if(!content){
                return false;
            }
            if(!link || !link.text || !link.url ){
                return false;
            }
            return true;
        }
    },
    data(){
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: ''
        };
    },
    computed:{
        isFormInvalid(){
            if(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                return true;
            }
            return false;
        }
    },
    methods:{
        submitForm(){
            if(!this.pageTitle || !this.content || !this.linkText || !this.linkUrl){
                alert ("Please fill in the form");
                return;
            }
            this.$emit('pageCreated',{
                pageTitle: this.pageTitle,
                content: this.content,
                link:{
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            });
            // this.pageCreated({
            //     pageTitle: this.pageTitle,
            //     content: this.content,
            //     link:{
            //         text: this.linkText,
            //         url: this.linkUrl
            //     },
            //     published: this.published
            // });
            this.pageTitle='';
            this.content='';
            this.linkText='';
            this.linkUrl='';
            this.published=false;
        }
    },
    watch: {
        pageTitle(newTitle,oldTitle){
            if(this.linkText === oldTitle){
                this.linkText = newTitle;
            }
        }
    }
}

</script>