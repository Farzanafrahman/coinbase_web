<template>
  <div>
    <div class="intro-bg">
      <b-container>
        <b-row>
          <b-col>
              <div class="intro-content">
                <div class="intro-text">
                  <h5>We provide easy solution to exchange your <span>Bitcoin/ GiftCard for money</span></h5>
                  <p>CoinBase is a platform for trading your bitcoin and giftcard at the best rate, why not give us a trial.</p>
                  <button class="get-started btn">Get Started</button>
                </div>

                <div class="intro-img">
                  <img src="@/assets/img/intro_img.png" alt="">
                </div>
              </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
  
</template>

<script>

export default {
  name: "IntroSection",
}
</script>

<style lang="scss" scoped>

  .intro-bg {
    height: 100%;
    background-image: url("~@/assets/img/intro_bg.png");
    background-position: center bottom -72px;
    background-repeat: no-repeat;
    background-size: cover;
    
  }

  .intro-content {
    display: flex;
    align-items: center;
    padding-top: 20px;
    color: #fff;
    text-align: left;
    vertical-align: top;

    .intro-text {
      max-width: 50%;
      margin: 0 50px 50px;
      padding: 0 90px 50px;
      h5 {
        font-weight: 300;
        font-size: 24px;
        line-height: 40px;
        word-spacing: 4px;
        span {
          font-weight: bold;
        }
      }
      p {
        padding-top: 10px;
        font-size: 12px;
        font-weight: lighter;
      }
      .get-started {
        border-radius: 100px;
        background: #fff;
        color: #FD749B;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
      }
    }
    .intro-img img {
     max-height: 350px;
     margin: 50px 0 80px;
    }
  }

</style>
