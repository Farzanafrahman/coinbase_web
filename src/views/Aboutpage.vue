<template>
  <div>
    <Header />
    <AboutIntro />
    <History />
    <TeamIntro />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import AboutIntro from "../components/AboutIntro.vue"
import History from "../components//History"
import TeamIntro from "../components//TeamIntro.vue"
import NewsLetter from "../components/NewsLetter.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Aboutpage",
  components: {
    Header,
    AboutIntro,
    History,
    TeamIntro,
    NewsLetter,
    Footer,
  }

}
</script>

<style lang="scss" scoped>

</style>