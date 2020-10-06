<template>
    <div>
        <div class="postlisting" v-if ="posts.length !== 0">
            <div class="post" v-for="post in posts" :key="post.id" v-bind:post="post">
               <router-link :to="linkResolver(post)">
                    <h2>{{ $prismic.richTextAsPlain(post.data.title) }}</h2>
                    <p class="post-meta"><span class="created-at">{{  Intl.DateTimeFormat('en-US', dateOptions).format(new Date(post.data.date)) }}</span></p>
                    <div>
                        <p>{{ getFirstParagraph(post) }}</p>
                    </div>
               </router-link>
            </div>
        </div>
        <div v-else>
            <p>No Posts published at this time.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'blog-posts',
    data () {
        return {
            posts: [],
            dateOptions: {year: 'numeric', month: 'short', day: '2-digit'},
            linkResolver: this.$prismic.linkResolver

        }
    },
    methods: {
        getPosts() {
            this.$prismic.client.query(
                this.$prismic.Predicates.at('document.type', 'post'),
                {orderings: '[my.post.date desc]'}
            ).then((response) => {
                this.posts = response.results;
            })
        },
        getFirstParagraph(post) {
            const textLimit = 200;
            const slices = post.data.body;
            let firstParagraph = '';
            let hasFirstParagraph = false;

            slices.map(function(slice) {
                if (!hasFirstParagraph) {
                    if (slice.slice_type == "text") {
                        slice.primary.text.forEach(function(block) {
                            if (block.type == "paragraph") {
                                if (!hasFirstParagraph) {
                                    firstParagraph += block.text;
                                    hasFirstParagraph = true;
                                }
                            }
                        })
                    }
                }
            });
            const limitedText = firstParagraph.substring(0, textLimit)
            if (firstParagraph.length > textLimit) {
                return limitedText.substring (0, limitedText.lastIndexOf(' ')) + "..."
            } else {
                return firstParagraph;
            }
        }
    },
    created() {
        this.getPosts()
    }
}
</script>

<style>

</style>