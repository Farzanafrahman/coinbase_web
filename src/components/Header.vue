<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <div class="header">
            <div class="logo">
              <img src="@/assets/img/logo.png" alt="">
            </div>
            <div class="nav-menu" id="menu">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                <li class="mobile-only">
                  <a href="">
                    <b-dropdown text="Sell Bitcoin/ Giftcard">
                      <b-dropdown-item>Sell Bitcoin</b-dropdown-item>
                      <b-dropdown-item>Sell Giftcard</b-dropdown-item>
                    </b-dropdown>
                   </a>
                </li>
                <li class="mobile-only"><a href="#">Login</a></li>
              </ul>
            </div>
            <div class="dropdown sellcoin">
              <b-dropdown text="Sell Bitcoin/ Giftcard">
                <b-dropdown-item>Sell Bitcoin</b-dropdown-item>
                <b-dropdown-item>Sell Giftcard</b-dropdown-item>
              </b-dropdown>
              <button class="login-btn btn">Login</button>
            </div>
            <button @click="toggleMenu" class="hamburger" id="hamburger" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div> 
        </b-col>
      </b-row>
    </b-container>
  </div> 
</template>

<script>
export default {
 name: "Header",
 methods: {
   toggleMenu() {
     const slide = document.getElementById("hamburger");
     const menu = document.getElementById("menu");
     menu.classList.toggle("open");
     slide.classList.toggle("hamburger--slider");
     slide.classList.toggle("is-active");
   }
 }
};
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    color: #333;
    font-weight: bold;
    font-size: 12px;
    .nav-menu {
      ul {
        display: flex;
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
  @media only screen and (min-width: 993px) {
    .header {
      .nav-menu {
        .mobile-only {
          display: none;
        }
      }
      .hamburger {
        display: none;
      }
    }
  }
  @media only screen and (min-width: 576px) {
    .container {
      max-width: 878px;
    }
  }
  @media only screen and (max-width: 992px) {
  .header {
    padding: 20px;
    .nav-menu {
      position: fixed;
      top: 0;
      height: 100%;
      right: -300px;
      width: 300px;
      display: block;
      padding-top: 30px;
      background: linear-gradient(178.18deg, #5e54cd -13.56%, #FD749B 158.3%);
      transition: 0.3s;
      z-index: 50;
      &.open {
        right: 0;
      }
      ul {
        display: block;
        li {
          padding: 10px;
          a {
            display: block;
            padding: 15px;
            min-width: 200px;
            font-size: 18px;
            font-weight: lighter;
            color: #fff;
          }
        }
      }
    }
    .sellcoin {
      display: none;
    }
    .hamburger {
      padding: 15px 0 15px 10px;
      z-index: 100;
      .hamburger-box {
        .hamburger-inner{
          background-color: #FD749B;
          &:before, &:after {
            background-color: #FD749B;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
  .header {
    .dropdown {
      .b-dropdown {
        .btn-secondary {
          background-color: #fff;
          color: #333;
          border-color: transparent;
          padding-left: 5px;
          font-size: 12px;
          font-weight: bold;
          &:focus {
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
  @media only screen and (max-width: 576px) {
    .header {
      .nav-menu {
        ul {
          li {
            a {
              .b-dropdown {
                .btn-secondary {
                  background-color: #281AC8;
                }                          
              }
            }
          }
        }
      }
    }
  }
</style>
