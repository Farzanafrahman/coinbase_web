<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h5 class="title">Our history</h5>
          <div class="timeline">
            <div class="branch" v-for="list in 5" :key="list">
              <h5>May 2010</h5>
              <p>Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem. 
                Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum. 
                Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum nibh.uspendisse
              </p>
            </div>
          </div>
          <div class="foot-note">
            <p>To be continue..</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "History",
}
</script>

<style lang="scss" scoped>
  .title {
    color: #c81a9c;
    padding: 30px;
    font-weight: bold;
    font-size: 18px;
    position: relative;
    margin-bottom: 0;
    &:after  {
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
  .timeline {
    padding: 30px 0;
    display: flex;
    position: relative;
    flex-direction: column;
    width: 640px;
    margin: 0 auto;
    .branch {
      position: relative;
      text-align: right;
      align-items: center;
      width: calc(50% - 20px);
      padding: 16px;
      &:before {
        content: " ";
        position: absolute;
        width: 12px;
        height: 12px;
        right: -26px;
        top: 24px;
        background: #c81a9c;
        border-radius: 50%;
        z-index: 5;
      }
      h5 {
        font-size: 18px;
        font-weight: bold;
        line-height: 30px;
        color: #c81a9c;
        margin-bottom: 10px;
      }
      p {
        font-size: 10px;
        line-height: 26px;
        margin-bottom: 24px;
      }
      &:nth-of-type(2n) {
        flex-direction: row-reverse;
        align-self: flex-end;
        text-align: left;
        &:before {
          left: -26px;
          right: auto;

        }
      }
    }
    &:after {
      content: " ";
      position: absolute;
      width: 4px;
      height: calc(100% - 30px);
      left: calc(50% - 2px);
      background: #c81a9c;
      z-index: 1;
    }
  }
  .foot-note {
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
    margin: 30px;
    p {
      margin-bottom: 0;
    }
  }
</style>