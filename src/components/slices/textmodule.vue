<template>
    <div class="textmodule" v-html="getText">
    </div>
</template>
<script>
import PrismicDom from 'prismic-dom';

export default {
    props: ['slice'],
    name: 'textmodule',
    computed: {
        getText: function() {
            return PrismicDom.RichText.asHtml(this.slice.primary.text, this.$prismic.linkResolver);
        }
    }
}
</script>
<style>

</style>