<template>
    <div class="intro-bg">
      <b-container>
        <b-row>
          <b-col>
            <div class="intro-text">
              <h5>ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER Transactions</h5>
              <span><span>19 JUNE, 2019</span> | <span>BUSINESS</span></span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>

export default {
  name: "AboutIntro",
}
</script>

<style lang="scss" scoped>
.intro-bg {
  height: 100%;
  background-image: url("~@/assets/img/blog_bg.png");
  background-position: center bottom -58px;
  background-repeat: no-repeat;
  background-size: cover;
  .intro-text {
    color: #fff;
    width: 80%;
    margin: 40px auto 180px;
    padding: 40px;
    text-align: center;
    h5 {
      font-weight: 300;
      font-size: 28px;
      line-height: 40px;
      word-spacing: 4px;
    }
    span {
      font-size: 10px;
      font-weight: lighter;
    }
  }
}
</style>
