<template>
  <div class="blog-section m-5">
    <b-container>
      <b-row>
        <b-col>
          <div class="content mb-5">
            <h5>Our Blog</h5>
            <p>Get to know the latest stuff via our blog post</p>
          </div>
          <div class="slider d-flex m-2">
            <div class="blog-group" v-for="blog in blogs" :key="blog.id" :class="{active : blog.active}"> 
              <p class="date">{{blog.date}}<span> | </span>{{blog.category}}</p>
              <h5 class="title">{{blog.title}}</h5>
              <p class="descrip">{{blog.description}}</p>
              <button class="blog-btn btn">{{blog.button}}</button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import blogData from "../blog.json";
export default {
  name: "HomeBlog",
  data() {
    return {
      blogs: blogData,
    };
  },
}
</script>

<style lang="scss" scoped>
  .blog-section {
    .content {
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
    .slider {
      .blog-group {
        padding: 34px;
        text-align: left;
        text-transform: uppercase;
        border: 1px solid #a2a2a2;
        border-radius: 15px;
        background-color: #fff;
        .date {
          font-size: 8px;
          color: #a2a2a2;
          span {
            padding: 0 5px;
          }
        }
        .title {
          margin: 22px 0;
          font-weight: bold;
          font-size: 16px;
          color: #a2a2a2;
          line-height: 26px;
        }
        .descrip {
          font-size: 8px;
          line-height: 18px;
          color: #a2a2a2;
        }
        .blog-btn {
          border-radius: 100px;
          background: #a2a2a2;
          color: #fff;
          font-size: 10px;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
          border: none;
          width: 40%;
        }
        &.active {
          transform: scale(1.2);
          z-index: 5;
          border: 1px solid #c81a9c;
          .date {
            color: #333;
          }
          .title {
            color: #FD749B;
          }
          .descrip {
            color: #333;
          }
          .blog-btn {
            background: linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);
          }
        }
      }
    }
  }
</style>
