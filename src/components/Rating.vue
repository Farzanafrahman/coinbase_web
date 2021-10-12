<template>
<div>
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
                <div class="info"><span><img src="@/assets/img/icons/bitcoin.svg" alt=""></span> BTC<span>We Buy @N350/$</span></div>
                <div class="info">Bank Transfer<span>NGN</span></div>
                <div class="info">Bitcoin BTC<span>Bank Transfer NGN</span></div>
              </div>
              
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
  name: "Rating",
  
}
</script>

<style lang="scss" scoped>
  .rating-bg {
    height: 100%;
    background-image: url("~@/assets/img/rating_bg.png");
    background-position: center 20%;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4rem 0;
    .rect-box {
      background-color: #fff;
      border-radius: 30px;
      height: 60%;
      margin: 80px 0;
      .grid-container {
        padding-top: 20px;
        text-align: left;
        .header {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #bbb;
          .title {
            padding: 0 48px 20px;
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
          padding-top: 30px;
          .info {
            font-size: 12px;
            // padding-left: 10px;
          }
        }
      }
    }
  }

</style>
  