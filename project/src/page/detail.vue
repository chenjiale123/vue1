<template>
    <div id="detail">
        <div class="dleft">
          <img src="../assets/logo.png" alt="">
          <ul>
              <li v-for="(item,index) in list" :key="index"><router-link >{{item}}</router-link></li>
          </ul>
        </div>
        <div class="dright"></div>
    </div>
</template>
<script>
export default {
    name:'detail',
    data(){
        return{
            list:['开放产品','勇攀高峰','使命必达','开放产品']

            
        }
    }
}
</script>
<style scoped>
#detail{
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
