<template>
    <div class="imagemodule">
        <picture>
            <source :srcset="smallView.url" media="(max-width: 848)">
            <source :srcset="mediumView.url" media="(max-width: 1280)">
            <img :src="mainView.url" :alt="mainView.alt" />
        </picture>
    </div>
</template>

<script>

export default {
    props: ['slice'],
    name: 'imagemodule',
    data () {
        return {
            mainView: {},
            mediumView: {},
            smallView: {}
        };
    },
    methods: {
        getContent() {
            this.mainView = this.slice.primary.image;
            this.mediumView = this.slice.primary.image.medium;
            this.smallView = this.slice.primary.image.small;
        }
    },
    created () {
        this.getContent()
    }
}
</script>