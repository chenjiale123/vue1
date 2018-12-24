<template>
    <div id="head">
       <div class="top">
           <img src="../assets/logo2.png" alt="">
           <span> 我的第一个vue项目</span>
           <div class="nav">

               <ul class="nav-ul">
                   <li>登陆</li>
                    <li>|</li>
                     <li>注册</li>
                      <li>|</li>
                       <li>关于</li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:'headerin',
    data(){
        return{
         
        }
    }
}
</script>
<style scoped>

*{
    margin: 0;
    padding: 0;
    list-style: none;
}
.top{
    width: 100%;
    height: 80px;
    background: rgb(50, 49, 53);
    /* padding-top: 15px; */
    box-sizing: border-box;
}
.top img{
    width: 50px;
    margin-left: 100px;
    /* margin-top: 15px; */
    /* padding-top: 10px; */

}
.top span{
    line-height: 80px;
    color: rgb(240, 240, 240);
    font-size: 15px;
    margin-left: 15px;
    /* margin-top: -15px; */
}

.nav{
    float: right;
    margin-right: 100px;
    height: 100%;
}
.nav-ul{
    height: 100%;
}
.nav-ul li{
    float: left;
    line-height: 80px;
    color: rgb(241, 241, 241);
    margin-left: 10px;
}
</style>