<template>
  <div class="welcome">
    <b-container>
      <b-row>
        <b-col>
          <div class="welcome-content">
            <div class="welcome-img">
              <img src="@/assets/img/welcome_img.png" alt="">
            </div>
            <div class="welcome-text">
              <h5>Welcome to CoinBase</h5>
              <p>We have the best rates . Simply start your exchange right now. 
                Sign up for our Affiliate program and earn commission from each exchange. 
                The earnings are credited in your account instantly and can be withdrawn right away. 
                Also note some exchange directions are hidden for unregistered user. 
                To ensure to have access to all our exchange directions and benefits 
                kindly sign up and verify your identity.
              </p>
              <button class="discover-btn btn">Discover</button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HomeWelcome",
}
</script>

<style lang="scss" scoped>
  .welcome {
    .welcome-content {
      display: flex;
      .welcome-img {
        img {
          height: 300px;
        }
      }
      .welcome-text {
        max-width: 40%;
        text-align: left;
        margin: 0 30px;
        h5{
          color: #c81a9c;
          padding-top: 30px;
          font-weight: bold;
          font-size: 18px;
          position: relative;
          &:after  {
            content: " ";
            height: 5px;
            width: 38px;
            position: absolute;
            background-color: #FD749B;
            border-radius: 100px;
            left: 0;
            top: calc(50% + 36px);
          }
        }
        p {
          padding-top: 30px;
          font-size: 12px;
          line-height: 30px;
        }
        .discover-btn {
          border-radius: 100px;
          background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
          color: #fff;
          font-size: 12px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
          border: none;
          padding: 12px;
        }
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .welcome {
      margin: 20px 0;
      .welcome-content {
        display: block;
        .welcome-text{
          max-width: 100%;
          text-align: center;
          h5 {
            &:after {
              left: calc(50% - 20px);
              top: calc(50% + 36px);
            }
          }
        }
      }
    }
  }
</style>
