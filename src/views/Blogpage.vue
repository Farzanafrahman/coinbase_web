<template>
  <div>
    <Header />
    <BlogIntro />
    <BlogContent />
    <BlogForm />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import BlogIntro from "../components/BlogIntro.vue"
import BlogContent from "../components/BlogContent.vue"
import BlogForm from "../components/BlogForm.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Aboutpage",
  components: {
    Header,
    BlogIntro,
    BlogContent,
    BlogForm,
    Footer,
  }
}
</script>

<style lang="scss" scoped>

</style>