<template>
  <div class="blog-form">
    <b-container>
      <b-row>
        <b-col>
          <div class="comment">
            <p>Leave a Comment</p>
            <span>Your email address will not be published. Required fields are marked *</span>
          </div>
          <form class="form" action="">
            <input class="name" type="text" placeholder="Name*">
            <input class="email" type="email" placeholder="Email*">
            <textarea rows="5" cols="30" placeholder="Your comment"></textarea>
            <button class="publish-btn btn">Publish</button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "BlogForm",
}
</script>

<style lang="scss" scoped>
  .blog-form {
    width: 50%;
    margin: 20px auto;
    .comment {
      margin: 20px 0;
      text-align: left;
      p {
        font-weight: bold;
        margin-bottom: 0;
      }
      span {
        font-size: 10px;
      }
    }
    .form {
      margin: 40px 0;
      text-align: left;
      font-size: 12px;
      display: flex;
      flex-wrap: wrap;
      input {
        width: calc(50% - 10px);
        margin: 24px 0;
        padding: 10px;
        outline: none;
        color: #000;
        &:first-child {
          margin-right: 20px;
        }
        &::placeholder {
          color: #000;
        }
      }
      textarea {
        padding: 10px;
        width: 100%;
        resize: none;
        &::placeholder {
          color: #000;
        }
      }
      .publish-btn {
        border-radius: 100px;
        background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        border: none;
        margin: 20px 0;
        padding: 10px;
      }
    }
  }
</style>
