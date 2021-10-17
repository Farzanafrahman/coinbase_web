<template>
  <div>
    <Header />
    <IntroSection />
    <WelcomeSection />
    <Rating />
    <BlogSection />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import IntroSection from "../components/IntroSection.vue"
import WelcomeSection from "../components/WelcomeSection.vue"
import Rating from "../components/Rating.vue"
import BlogSection from "../components/BlogSection.vue"
import NewsLetter from "../components/NewsLetter.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Homepage",
  components: {
    Header,
    IntroSection,
    WelcomeSection,
    Rating,
    BlogSection,
    NewsLetter,
    Footer,
  } 
}
</script>

<style scoped>

</style>
