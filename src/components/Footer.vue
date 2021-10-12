<template>
  <div class="footer">
      <b-row>
        <b-col class="first-col">
          <img src="@/assets/img/footer_logo.png" alt="">
          <p> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. 
            Fusce vel metus pharetra, fermentum
          </p>
          <div class="icons">
            <img src="@/assets/img/icons/google+.svg" alt="">
            <img src="@/assets/img/icons/facebook.svg" alt="">
            <img src="@/assets/img/icons/twitter.svg" alt="">
            <img src="@/assets/img/icons/instagram.svg" alt="">
          </div>
        </b-col>
        <b-col class="second-col">
          <b-row>
            <b-col>
              <h5>CoinBase Links</h5>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Sell</li>
                <li>Contact Us</li>
              </ul>
            </b-col>
            <b-col>
              <h5>Contact Us</h5>
              <ul>
                <li>(+234)137632128</li>
                <li>Coinbase@yahoo.com</li>
                <li>Address goes here</li>
                <li>Some address</li>
                <li>Download Our App</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="third-col">
          <p>CoinBase Instagram</p>
        </b-col>
      </b-row>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 40px 40px 40px 80px;
    text-align: left;
    .first-col {
      p {
        max-width: 70%;
        padding: 20px 40px 0 0;
        font-size: 10px;
        color: #a2a2a2;
        line-height: 18px;
      }
      .icons img {
        padding-right: 16px;
      }
    }
    .second-col {
      h5 {
        padding-bottom: 18px;
        font-size: 14px;
      }
      ul {
        padding-left: 0;
        li {
          font-size: 10px;
          color: #a2a2a2;
          line-height: 20px;
        }
      }
    } 
  }
</style>