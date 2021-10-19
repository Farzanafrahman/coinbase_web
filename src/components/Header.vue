<template>
  <header>
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-between align-items-center">
          <div class="logo">
            <img src="@/assets/img/logo.png" alt="">
          </div>

          <div class="nav-menu">
            <ul class="d-flex">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div class="dropdown">
            <b-dropdown text="Sell Bitcoin/ Giftcard">
              <b-dropdown-item>Sell Bitcoin</b-dropdown-item>
              <b-dropdown-item>Sell Giftcard</b-dropdown-item>
            </b-dropdown>
            <button class="login-btn btn">Login</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {
 name: "Header",
};
</script>

<style lang="scss" scoped>
  header {
    padding: 30px 15px;
    color: #333;
    font-weight: bold;
    font-size: 12px;
    .nav-menu {
      ul {
        padding-left: 0;
        margin-bottom: 0;
        a {
          padding: 0 20px;
          text-decoration: none;
          color: #333;
          font-weight: bold;
        }
      }
    }
    .dropdown {
     .b-dropdown {
        padding-right: 24px;
      }
      .login-btn {
        background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
        color: #fff;
        border-radius: 100px;
        padding: 8px 42px;
        text-transform: uppercase;
        font-size: 12px;
        border: none;
      }
    }
  }
  // .nav-menu ul {
  //   padding-left: 0;
  //   margin-bottom: 0;
  // }

  // .nav-menu ul a {
  //   padding: 0 20px;
  //   text-decoration: none;
  //   color: #333;
  //   font-weight: bold;
  // }

  // header .dropdown .b-dropdown {
  //   padding-right: 24px;
  // }

  // .dropdown .login-btn {
  //   background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  //   color: #fff;
  //   border-radius: 100px;
  //   padding: 8px 42px;
  //   text-transform: uppercase;
  //   font-size: 12px;
  //   border: none;
  // }
</style>

<style lang="scss">
header {
  .dropdown {
    .b-dropdown {
      .btn-secondary {
        background-color: #fff;
        color: #333;
        border-color: transparent;
        padding-left: 5px;
        font-size: 12px;
        font-weight: bold;
        :focus {
          box-shadow: none;
        }
      }
      .dropdown-menu {
        font-size: 12px;
        padding: 0;
      }
      .dropdown-item:hover {
        background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
      }
    }
  }
}
  // header .dropdown .b-dropdown .btn-secondary {
  //     background-color: #fff;
  //     color: #333;
  //     border-color: transparent;
  //     padding-left: 5px;
  //     font-size: 12px;
  //     font-weight: bold;
  //   }

  // header .dropdown .b-dropdown .btn-secondary:focus {
  //   box-shadow: none;
  // }

  // header .dropdown .b-dropdown .dropdown-menu {
  //   font-size: 12px;
  //   padding: 0;
  // }

  // header .dropdown .b-dropdown .dropdown-item:hover {
  //   background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
  // }
</style>
