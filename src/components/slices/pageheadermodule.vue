<template>
   <header id="header">
       <picture>
           <img :src="image.url" alt="" />
       </picture>
       <h1>{{ $prismic.richTextAsPlain(fields.title) }}</h1>
       <p>{{ $prismic.richTextAsPlain(fields.text) }}</p>
   </header>
</template>

<script>

export default {
    props: ['slice'],
    name: 'pageheadermodule',
    data () {
        return {
            fields: {
                title: null,
                text: null
            },
            image: {}
        };
    },
    methods: {
        getContent() {
            this.fields.title = this.slice.primary.title;
            this.fields.text = this.slice.primary.text;
            this.image = this.slice.primary.image;
        }
    },
    created () {
        this.getContent()
    }
}
</script>