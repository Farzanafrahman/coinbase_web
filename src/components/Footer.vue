<template>
  <div class="footer">
    <b-container>
      <b-row>
        <b-col class="first-col">
          <img class="logo-img mb-3" src="@/assets/img/footer_logo.png" alt="">
          <p class="content my-2"> Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu rhoncus augue. 
            Fusce vel metus pharetra, fermentum
          </p>
          <div class="icons my-2">
            <img src="@/assets/img/icons/google+.svg" alt="">
            <img src="@/assets/img/icons/facebook.svg" alt="">
            <img src="@/assets/img/icons/twitter.svg" alt="">
            <img src="@/assets/img/icons/instagram.svg" alt="">
          </div>
          <p class="copyright">&copy; 2019 Designed by Creativ_Team</p>
        </b-col>
        <b-col class="second-col">
          <b-row>
            <b-col>
              <p class="mb-3 pt-2">CoinBase Links</p>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Sell</li>
                <li>Contact Us</li>
              </ul>
            </b-col>
            <b-col class="position-relative">
              <p class="mb-3 pt-2">Contact Us</p>
              <ul>
                <li>(+234)137632128</li>
                <li>Coinbase@yahoo.com</li>
                <li>Address goes here</li>
                <li class="download">Download Our App</li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="third-col">
          <p class="mb-3 pt-2">CoinBase Instagram</p>
          <div class="grid-container">
            <div class="grid-item"></div>
            <div class="grid-item">+</div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
          </div>
        </b-col>
      </b-row>
    </b-container> 
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
    padding: 40px 0;
    text-align: left;
    position: relative;
    align-items: stretch;
    .first-col {
      .content {
        font-size: 10px;
        color: #a2a2a2;
        line-height: 18px;
      }
      .icons img {
        padding-right: 16px;
      }
      .copyright {
        position: absolute;
        bottom: 10px;
        font-size: 8px;
        color: #989898;
        margin-bottom: 0;
      }
    }
    .second-col {
      p {
        font-size: 14px;
      }
      ul {
        padding-left: 0;
        margin-bottom: 0;
        li {
          font-size: 10px;
          color: #a2a2a2;
          line-height: 20px;
        }
        .download {
          position: absolute;
          bottom: 0;
          font-size: 10px;
          color: #a2a2a2;
        }
      }
    }
    .third-col {
      p {
        font-size: 14px;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 60px);
        grid-template-rows: repeat(2, 60px);
        background-color: #333;
        grid-gap: 10px;
        .grid-item {
          background-color: #a2a2a2;
          text-align: center;
          font-size: 34px;
          font-weight: 100;
          line-height: 60px;
        }
      }
    }
  }
  @media only screen and (min-width: 576px) {
    .footer {
      .first-col {
        max-width: 40%;
      }
    }
  }
</style>
