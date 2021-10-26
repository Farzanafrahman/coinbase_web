<template>
  <div class="subscribe">
    <b-container>
      <b-row>
        <b-col>
          <div class="content">
            <h5>Subscribe our newsletter</h5>
            <p>Subscribe to our newsletter for daily/weekly update of our products and services.</p>
          </div>
          <div class="subscription">
            <div class="search-box">
              <input type="text" class="search-bar" placeholder="Email">
            </div>
            <button class="discover-btn btn">Discover</button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "NewsLetter",
}
</script>

<style lang="scss" scoped>
  .subscribe {
    margin: 48px;
    .content {
      margin: 30px 0;
      h5 {
        color: #c81a9c;
        font-weight: bold;
        font-size: 18px;
        word-spacing: 2px;
        position: relative;
        margin-bottom: 30px;
        &:after {
          content: " ";
          height: 5px;
          width: 30px;
          position: absolute;
          background-color: #FD749B;
          border-radius: 100px;
          left: calc(50% - 18px);
          top: calc(50% + 14px);
        }
      }
      p {
        max-width: 25%;
        font-size: 10px;
        margin: 0 auto;
        text-align: center;
      }
    }
    .subscription {
      max-width: 35%;
      display: flex;
      margin: 0 auto;
      .search-box {
        width: 100%;
        text-align: start;
        .search-bar {
          width: 100%;
          padding: 10px 15px;
          border: 1px solid #FD749B;
          border-radius: 100px;
          background: none;
          font-size: 12px;
          text-transform: uppercase;
        }
        &::placeholder {
          color: #333;
        }
      }
      .discover-btn {
        border-radius: 100px;
        background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
        color: #fff;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        border: none;
        margin-left: 10px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .subscribe {
      margin: 20px;
      .content {
        margin: 20px;
        h5 {
          font-size: 16px;
        }
        p {
          max-width: 40%;
        }
      }
      .subscription {
        display: block;
        max-width: 40%;
        .discover-btn {
          margin: 12px 0;
        }
      }
    }
  }
</style>
