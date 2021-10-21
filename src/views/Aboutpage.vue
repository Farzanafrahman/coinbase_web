<template>
  <div>
    <Header />
    <AboutIntro />
    <AboutHistory />
    <AboutTeam />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import AboutIntro from "../components/AboutIntro.vue"
import AboutHistory from "../components/AboutHistory.vue"
import AboutTeam from "../components/AboutTeam.vue"
import NewsLetter from "../components/NewsLetter.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "AboutPage",
  components: {
    Header,
    AboutIntro,
    AboutHistory,
    AboutTeam,
    NewsLetter,
    Footer,
  }
}
</script>

<style lang="scss" scoped>
</style>
