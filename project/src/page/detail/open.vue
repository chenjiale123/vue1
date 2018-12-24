<template>
    <div id="hill">
        <div class="dleft">
          <img src="../../assets/logo.png" alt="">
          <ul>
              <li  v-for="(item,index) in list" :key="index" ><router-link :to="item.url">{{item.name}}</router-link>  </li> 
          </ul>
        </div>
        <div class="dright">

            <h2>开放产品</h2>
            <p>色彩吧姜丰年教科书你可俄方我叫你可无俄空军挖金矿妇科网健康五加科我万恶会计法那款喔你</p>
            <!-- <div class="drightin">
                <small>购买数量</small>
                <span>-</span>
                <input type="text">
                <span>+</span>
            </div> -->
            <count   @add='getgood("add",$event)'  :max="count.max" :min="count.min" />
            <list/>
            <timework @cat='getgood("cat",$event)'  />
            <small>总价</small>
            <span>{{price}}</span>
            <p>色彩吧姜丰年教科书你可俄方我叫你可无俄空军挖金矿妇科网健康五加科我万恶会计法那款喔你</p>
           
        </div>
    </div>
</template>
<script>
import count from './components/count'
import list from './components/list'
import timework from './components/timework'



export default {
    name:'hill',
    data(){
       
        return{
             price:0,
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
            ],
            count:{
                min:1,
                max:10
            }

            
        }
    },
    components:{
        count,
        list,
        timework
    },
    methods:{
        // add(data){
        //   console.log(data)
        // },
        // cat(data){
        //     console.log(data)
        // }
        getgood(key,value){
        this[key]=value
        var readydata={
            'add':this.add,
            'cat':this.cat
        }
        this.price=readydata.add*5+readydata.cat*10
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
.dright h2{
    font-size: 20px;
    text-align: center;
}
.dright p{
    font-size: 16px;
    color: rgb(185, 185, 185);
    margin-top: 20px;
}
.dright .drightin{
    width: 100%;
    height: 200px;
}


</style>
