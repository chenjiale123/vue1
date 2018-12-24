<template>
  <div id="index">
    <div class="main">
      <div class="left">
        <div class="product">
          <h2>全部产品</h2>
          <div v-for="(value,index) in  product" :key="index">
            <h3>{{value.cate}}</h3>
            <ul>
              <li v-for="(item,index)  in  value.list" :key="index">
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot">hot</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="new">
          <h2>最新消息</h2>
          <ul>
            <li v-for="(item,index) in news" :key="index">
              <a :href="item.url">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="right">
        <div class="righttop">
          <swiper :options="swiperOption">
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="rightbottom">
            <ul>
                <li v-for="(item,index) in borderlist" :key="index">
                    <h3>{{item.title}}</h3>
                    <p>{{item.dec}}</p>
                    <img :src="item.img" alt="">
                    <button> <router-link :to="item.url">立即购买</router-link></button>
                  
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
        swiperOption:{
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true,
      autoplay:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }},
      borderlist:[
          {
              title:'开放产品',
              dec:'开放产品是一款开放产品',
              img:'../assets/logo.png',
              url:'./detail/open'
          }, {
              title:'勇攀高峰',
              dec:'开放产品是一款开放产品',
              img:'../assets/logo.png',
               url:'./detail/hill'
       
          }, {
              title:'品牌营销',
              dec:'开放产品是一款开放产品',
              img:'../assets/logo.png',
               url:'./detail/ppyx'
       
          }, {
              title:'使命必达',
              dec:'开放产品是一款开放产品',
              img:'../assets/logo.png',
                  url:'./detail/xmbd'
       
          }
      ]
         ,
      news: [],
      product: [
        {
          cate: "手机应用",
          list: [
            {
              url: "www.baidu.com",
              name: "91助手",
              hot: true
            },
            {
              url: "www.baidu.com",
              name: "豌豆夹",
              hot: false
            },
            {
              url: "www.baidu.com",
              name: "金山毒霸",
              hot: true
            }
          ]
        },
        {
          cate: "编程软件",
          list: [
            {
              url: "www.baidu.com",
              name: "webstom",
              hot: false
            },
            {
              url: "www.baidu.com",
              name: "vscode",
              hot: false
            },
            {
              url: "www.baidu.com",
              name: "sublime",
              hot: true
            }
          ]
        }
      ]
    };
  },
  created() {
    this.$axios.get("https://jsonplaceholder.typicode.com/photos"
       
      )
      .then(res => {
        console.log(res.data);
        this.news = res.data.slice(0,4);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.main {
  /* margin-top: 100px; */
  width: 100%;
  height: 550px;
  background: rgb(238, 238, 238);
  /* padding-top: 15px; */
  box-sizing: border-box;
}
.left {
  width: 250px;
  height: 100%;
  /* background: #fff; */
  margin-left: 100px;
  float: left;
}
.left .product {
  width: 100%;
  height: 40%;
  background: rgb(255, 255, 255);
  text-align: center;
}
.left .product h2 {
  display: block;
  width: 100%;
  height: 35px;
  background: rgb(151, 250, 192);
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 35px;
}
.left .product h3 {
  color: rgb(158, 158, 158);
}
.left .product a {
  color: #ddd;
}
.left .product span {
  background: red;
  color: #fff;
}
.left .new {
  width: 100%;
  height: 40%;
  background: rgb(255, 255, 255);
  text-align: center;
}
.left .new h2 {
  display: block;
  width: 100%;
  height: 35px;
  background: rgb(151, 250, 192);
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 35px;
}
.left .new h3 {
  color: rgb(158, 158, 158);
}
.left .new a {
  color: #ddd;
}
.left .product span {
  background: red;
  color: #fff;
}
.right {
  width: 800px;
  height: 100%;
  margin-left: 100px;
  float: left;
  background: rgb(248, 248, 248);
}
.righttop {
  width: 100%;
  height: 200px;
}
.righttop .swiper-container{
    width: 100%;
    height: 200px;
}
.rightbottom{
    width: 100%;
    height: 300px;
    margin-top: 20px;
    background: rgb(240, 240, 240);
}
.rightbottom ul{
    width: 100%;
    height: 100%;
}
.rightbottom ul li{
    width: 350px;
    height: 130px;
    margin-right: 50px;
    margin-bottom: 20px;
    background: #fff;
    float: left;
    position: relative;
}
.rightbottom ul li h3{
position: absolute;
left: 160px;
top: 10px;
}
.rightbottom ul li p{
position: absolute;
left: 160px;
top: 50px;
}
.rightbottom ul li button{
    width: 80px;
    height: 30px;
    background: rgb(142, 252, 151);
    color: #fff;
    text-align: center;
    /* line-height: 50px; */
    position: absolute;
    left: 160px;
    top: 75px;
}
.rightbottom ul li img{
    position: absolute;
    width: 150px;
    height: 80px;
    left: 10px;
    top: 20px;
}
</style>
