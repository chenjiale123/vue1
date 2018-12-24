<template>
    <div id="hill">
        <div class="dleft">
          <img src="../../assets/logo.png" alt="">
          <ul>
              <li  v-for="(item,index) in list" :key="index" ><router-link :to="item.url">{{item.name}}</router-link>  </li> 
          </ul>
        </div>
        <div class="dright"></div>
    </div>
</template>
<script>
export default {
    name:'hill',
    data(){
        return{
            list:[
                {
                    name:'开放产品',
                    url:'./open'

                },
                {
                    name:'品牌营销',
                    url:'./ppyx'
                },
                {
                   name:'使命必达',
                    url:'./xmbd'
                },{
                 name:'勇攀高峰',
                    url:'./hill'
                }
            ]

            
        }
    }
}
</script>
<style scoped>
#hill{
    width: 100%;
    height: 550px;
}
.dleft{
    width: 250px;
    height: 100%;
    margin-left: 100px;
    background: #fff;
    float: left;
}



.dright{
   width: 800px;
    height: 100%;
    margin-left: 100px;
    background: #fff;
    float: left;
}


</style>
