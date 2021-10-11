<template>
  <div>
    <Header />
    <IntroSection />
    <WelcomeSection />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import IntroSection from "../components/IntroSection.vue"
import WelcomeSection from "../components/WelcomeSection.vue"

export default {
  name: "Homepage",
  components: {
    Header,
    IntroSection,
    WelcomeSection,
  }
  
}
</script>

<style scoped>

</style>
