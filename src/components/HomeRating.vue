<template>
  <div class="rating-bg">
    <b-container>
      <b-row>
        <b-col>
          <div class="rect-box">
            <div class="grid-container">
              <div class="header">
                <div class="title">Our Rates</div>
                <div class="title">Our Reserves</div>
                <div class="title">Latest Exchanges</div>
              </div>
              <div class="details">
                <div class="info"><span class="info-1"><img src="@/assets/img/icons/bitcoin.svg" alt="">BTC</span><span class="info-2">We Buy <b>@N350/$</b></span></div>
                <div class="info"><span class="info-1"><img src="@/assets/img/icons/bank.png" alt="">Bank Transfer</span><span class="info-2">NGN</span></div>
                <div class="info"><span Bank class="info-1">Bitcoin BTC Bank Transfer NGN</span></div>
              </div>
              <div class="details">
                <div class="info"><span class="info-1"><img src="@/assets/img/icons/eth.png" alt="">ETH</span><span class="info-2">We Buy <b>@N345/$</b></span></div>
                <div class="info"><span class="info-1"><img src="@/assets/img/icons/bitcoin.svg" alt="">Bitcoin</span><span class="info-2">NGN</span></div>
                <div class="info"><span Bank class="info-1">Amazon Card Bank Transfer NGN</span></div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeRating",
}
</script>

<style lang="scss" scoped>
  .rating-bg {
    height: 100%;
    background-image: url("~@/assets/img/rating_bg.png");
    background-position: center 20%;
    background-repeat: no-repeat;
    background-size: cover;
    // padding: 50px 0;
    // margin: 20px 0;
    .rect-box {
      background-color: #fff;
      box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.30);
      border-radius: 30px;
      margin: 50px 0;
      .grid-container {
        text-align: left;
        .header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #bbb;
          .title {
            padding: 20px 48px;
            text-transform: uppercase;
            line-height: 30px;
            word-spacing: 2px;
            letter-spacing: 1.1px;
            font-weight: bold;
            color: #FD749B;
            font-size: 14px;
          }
        }
        .details {
          display: flex;
          justify-content: space-between;
          .info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            padding: 15px 40px;
            width: 33.3%;
            .info-1 {
              padding: 10px;
              img {
                padding: 10px;
                display: inline-block;
                min-width: 20px;
                // margin-right: 10px;
              }
            }
            .info-2 {
              padding: 10px;
              font-size: 10px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .rating-bg {
      padding: 0 0;
      .rect-box {
        margin: 30px 0;
        .grid-container {
          .header {
            .title {
              text-align: center;
              padding: 10px;
              font-size: 12px;
            }
          }
          .details {
            .info {
              padding: 10px 20px;
              .info-1, .info-2 {
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
</style>
  