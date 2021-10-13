<template>
  <div>
    <Header />
    <IntroSection />
    <WelcomeSection />
    <Rating />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import IntroSection from "../components/IntroSection.vue"
import WelcomeSection from "../components/WelcomeSection.vue"
import Rating from "../components/Rating.vue"
import NewsLetter from "../components/NewsLetter.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Homepage",
  components: {
    Header,
    IntroSection,
    WelcomeSection,
    Rating,
    NewsLetter,
    Footer,
  } 
}
</script>

<style scoped>

</style>
