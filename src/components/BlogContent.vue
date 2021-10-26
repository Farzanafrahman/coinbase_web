<template>
  <div class="blog-content">
    <b-container>
      <b-row>
        <b-col>
          <div class="content">
            <div class="content1">
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and 
                praising pain was born and I will give you a complete account of the system, and 
                expound the actual teachings of the great explorer of the truth, the master-builder 
                of human happiness. But I must explain to you how all this mistaken idea of denouncing 
                pleasure and praising pain was born and I will give you a complete account of the system, 
                and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
              </p>
              <p>Planning Your Luxury Trip<p/>
              <p>The next part of planning is to determine your starting and ending ports. 
                This could be a place close to home and sail in one area or start and finish at 
                two different ports. Generally, starting and stopping in the same port will save you money and 
                is usually more convenient. You can also fly to a destination far from home and then sail 
                another exotic sea. There are luxury yacht charter companies that cruise the Caribbean and 
                Mediterranean seas or around Alaska, the Panama Canal, or anyplace you can imagine.
              <p/> 
            </div>
            <div class="content-img">
              <p>
                <img src="@/assets/img/content_img.png" alt="">If you like the idea of knowing what it is really like to sail, but don’t want to risk safety, 
                you can charter a sailing cruise that puts you in the role of deck hand. A competent crew will 
                direct you as to your “chores” for keeping the ship in top shape and on course.
              </p> 
              <p>
                Destinations & Ports of important Charter Companies one of the greatest 
                benefits of choosing a chartered cruise as a vacation is the choice. You will most likely have a rough itinerary and 
                that can be affected by weather. However, you are flexible in deciding how long you want to stay 
                in a particular port and if you want to add or subtract stops along the way.
              </p>
            </div>
            <div class="content2">
              <p>
                Your yacht is your hotel that travels with you. There is only one flight and one hotel to book! Then you take all of your luggage and 
                unpack it just once to enjoy several days of new destinations.
              </p>   
              <p>
                If you have never experienced cruising before, a chartered experience is a great way to get your feet wet. 
                It is different from cruise lines with thousands of guests because the people on your ship will be your friends and family. 
                The personal touches of a chartered trip will help you develop your love for the sea with all the best benefits of commercial cruises.
              </p>
            </div>
          </div>
            <div class="tag-link">
              <b-row>
                <b-col class="tag">
                  <p>Tags: Business, Capital, Finance</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="link">
                    <ul>
                      <li>Share with</li>
                      <li><a href="#"><img src="@/assets/img/icons/blog_facebook.png" alt=""></a></li>
                      <li><a href="#"><img src="@/assets/img/icons/blog_twitter.png" alt=""></a></li>
                      <li><a href="#"><img src="@/assets/img/icons/blog_youtube.png" alt=""></a></li>
                    </ul>
                </b-col>
              </b-row>
            </div>
            <div class="pagination d-flex justify-content-between">
              <b-row>
                <b-col class="giftcard">
                  <p>How to sell your iTunes giftcard with us</p>
                  <span>Prev Post</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="exchange">
                  <p>Exchange 5 products and get 1 free product</p>
                  <span>Next Post</span>
                </b-col>
              </b-row>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "BlogContent",
}
</script>

<style lang="scss" scoped>
  .blog-content {
    width: 50%;
    margin: 0 auto;
    font-size: 12px;
    line-height: 24px;
    text-align: left;
    .content {
      margin: 40px 0;
      .content1, .content2 {
        margin: 16px 0;
      }
      .content-img {
        margin: 50px 0;
        p {
          padding-bottom: 10px;
          img {
            float: right;
            padding: 0 20px;
          }
        }
      }
    }
    .tag-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 14px 0;
      font-size: 14px;
      .tag {
        font-weight: bold;
        font-style: italic;
      }
      .link {
        ul {
          padding-left: 0;
        }
        li {
          display: inline-block;
          padding-left: 16px;
        }
      }
    }
    .pagination {
      margin: 30px 0;
      align-items: center;
      font-size: 16px;
      font-weight: bold;
      line-height: 30px;
      .giftcard {
        width: 222px;
        text-align: left;
      }
      .exchange {
        width: 222px;
        text-align: right;
      }
      p:hover {
        color: #FD749B;
        cursor: pointer;
      }
      span {
        font-size: 10px;
        font-weight: normal;
        color: #a2a2a2;
        &:hover {
          color: #000;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .blog-content {
      width: 80%;
      font-size: 12px;
      .content {
        .content1, .content2 {
          margin: 10px 0;
        }
        .content-img {
          margin: 20px 0;
          p {
            img {
              float: right;
              width: 60%;
            }
          }
        }
      }
      .tag-link {
        display: block;
        .link {
          li {
            padding: 0 16px 0 0;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .blog-content {
      width: 80%;
      font-size: 12px;
      .content {
        .content1, .content2 {
          margin: 10px 0;
        }
        .content-img {
          margin: 20px 0;
          p {
            img {
              float: right;
              width: 60%;
            }
          }
        }
      }
    }
  }
</style>
