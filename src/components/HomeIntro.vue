<template>
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
                <div class="intro-img mobile-only">
                  <img src="@/assets/img/intro_img.png" alt="">
                </div>
              </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
export default {
  name: "HomeIntro",
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
      // align-items: center;
      color: #fff;
      text-align: left;
      vertical-align: top;
      .intro-text {
        max-width: 40%;
        margin: 40px;
        padding: 40px;
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
      .intro-img {
        img {
          max-height: 280px;
          margin: 20px 0 110px;
        }
      }
    }
  }
  // @media only screen and (max-width: 576px) {
  //   .intro-bg {
  //     background-position: center top;
  //     background-size: 260%;
  //     .intro-content {
  //       display: block;
  //       text-align: center;
  //       .intro-text {
  //         max-width: 100%;
  //         margin: 20px;
  //         padding: 20px;
  //         h5 {
  //           font-size: 16px;
  //           line-height: 30px;
  //         }
  //       }
  //       .intro-img {
  //         margin: 20px;
  //         img {
  //           max-height: 280px;
  //           margin: 0;
  //         }
  //       }
  //     }
  //   }
  // } 
  @media only screen and (max-width: 768px) {
    .intro-bg {
      background-position: center top;
      background-size: 260%;
      .intro-content {
        display: block;
        text-align: center;
        .intro-text {
          max-width: 100%;
          margin: 20px;
          padding: 20px;
          h5 {
            font-size: 16px;
            line-height: 30px;
          }
        }
        .intro-img {
          margin: 20px;
          img {
            max-height: 280px;
            margin: 0;
          }
        }
      }
    }
  }
</style>
