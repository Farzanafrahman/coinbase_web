<template>
  <div>
    <Header />
    <HomeIntro />
    <HomeWelcome />
    <HomeRating />
    <HomeBlog />
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import HomeIntro from "../components/HomeIntro.vue"
import HomeWelcome from "../components/HomeWelcome.vue"
import HomeRating from "../components/HomeRating.vue"
import HomeBlog from "../components/HomeBlog.vue"
import NewsLetter from "../components/NewsLetter.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "HomePage",
  components: {
    Header,
    HomeIntro,
    HomeWelcome,
    HomeRating,
    HomeBlog,
    NewsLetter,
    Footer,
  } 
}
</script>

<style scoped>
</style>
