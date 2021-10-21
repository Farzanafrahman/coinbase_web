<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <div class="heading">
            <h5>Meet the team</h5>
            <p>Meet the team that makes the process of this system fast and 
              painless as possible to provide you with good result
            </p>
          </div>
          <div class="slider d-flex">
            <div class="img-view" v-for="list in 5" :key="list">
              <div class="third" v-if="list === 3">
                <span class="content">
                  <span class="designation">CEO</span>
                  <span class="name">Amanda Roth</span>
                </span>
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
  name: "AboutTeam",
}
</script>

<style lang="scss" scoped>
  .heading {
    margin: 20px;
    h5 {
      color: #c81a9c;
      padding: 30px;
      font-weight: bold;
      font-size: 18px;
      position: relative;
      margin-bottom: 0;
      &:after {
        content: " ";
        height: 5px;
        width: 32px;
        position: absolute;
        background-color: #FD749B;
        border-radius: 100px;
        left: calc(50% - 26px);
        top: calc(50% + 20px);
      }
    }
    p {
      max-width: 30%;
      font-size: 10px;
      margin: 10px auto;
      text-align: center;
      line-height: 26px;
    }
  }
  .slider {
    margin: 50px;
    .img-view {
      width: 200px;
      height: 150px;
      border-radius: 15px;
      background-color: #c4c4c4;
      z-index: 1;
      &:nth-of-type(2n) {
        z-index: 5;
        transform: scale(1.2);
        box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.1) ;
      }
      &:nth-child(3) {
        z-index: 10;
        transform: scale(1.4);
        box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.1);
      }
      .third {
        background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
        opacity: 45%;
        height: 100%;
        border-radius: 15px;
        position: relative;
        .content {
          position: absolute;
          color: #fff;
          margin-bottom: 0;
          left: 20px;
          bottom: 16px;
          font-size: 8px;
          text-align: left;
          .designation {
            display: block;
          }
        }
      }
    }
  }
  
</style>