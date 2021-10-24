<template>
  <div class="intro-bg">
    <b-container>
      <b-row>
        <b-col>
            <div class="intro-content">
              <div class="intro-text">
                <p>HOME/ABOUT US</p>
                <h5>Great Service, Professional support</h5>
                <p>CoinBase is a platform for trading your bitcoin and giftcard at the best rate, why not give us a trial.</p>
              </div>
              <div class="intro-img">
                <img src="@/assets/img/about_intro.png" alt="">
              </div>
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
    background-image: url("~@/assets/img/intro_bg.png");
    background-position: center bottom -58px;
    background-repeat: no-repeat;
    background-size: cover;
    .intro-content {
      display: flex;
      align-items: center;
      padding-top: 20px;
      color: #fff;
      text-align: left;
      vertical-align: top;
      .intro-text {
        max-width: 40%;
        margin: 0 50px 50px;
        padding: 0 42px 50px;
        h5 {
          font-weight: 300;
          font-size: 28px;
          line-height: 40px;
          word-spacing: 4px;
        }
        p {
          padding-top: 10px;
          font-size: 12px;
          font-weight: lighter;
        }
      }
      .intro-img {
        img {
          max-height: 350px;
          margin: 22px 0 185px;
        }
      }
    }
  }
  @media only screen and (max-width: 1080px) {
    .intro-bg {
      .intro-content {
        .intro-img {
          img {
            max-height: 330px;
            margin: 0 0 140px;
          }
        }
      }
    }
  } 
</style>
