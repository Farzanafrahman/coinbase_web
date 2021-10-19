<template>
  <div>
    <Header />
    <BlogIntro />
    <BlogContent />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import BlogIntro from "../components/BlogIntro.vue"
import BlogContent from "../components/BlogContent.vue"
import NewsLetter from "../components/NewsLetter.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Aboutpage",
  components: {
    Header,
    BlogIntro,
    BlogContent,
    NewsLetter,
    Footer,
  }
}
</script>

<style lang="scss" scoped>

</style>