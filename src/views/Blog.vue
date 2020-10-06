<template>
  <div class="blog">
    <div class="container">
      <component
      v-for="(slice, index) in slices"
      :key="index"
      :is="slice.slice_type + 'module'"
      :slice="slice">
      </component>
    <blog-posts />
    </div>
  </div>
</template>

<script>

import textmodule from '@/components/slices/textmodule';
import BlogPosts from '@/components/parts/BlogPosts';
import pageheadermodule from '@/components/slices/pageheadermodule';
export default {
  name: 'blog',
  components: {
    textmodule,
    BlogPosts,
    pageheadermodule
  },
  data () {
    return {
      documentId: "",
      slices: {

      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getByUID("page","blog")
      .then((document) => {
        if (document) {
          this.documentId = document.id;
          this.slices = document.data.body;
        } else {
          this.$router.push({name: 'not-found'})
        }
      })
    }
  },
  created () {
    this.getContent()
  }
}
</script>
