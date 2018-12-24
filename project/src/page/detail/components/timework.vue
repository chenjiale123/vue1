<template>
    <div id="time">
        <small>有效时间</small>
        <ul>
            <li @click="choose(index)"  v-for="(item,index) in redio" :key="index" :class="{'active':index==nowindex}">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'time',
    data(){
        return {
               nowindex:0
        }
    },
    props:{
        redio:{
            type:Array,
            default:function(){
           return[{
               title:'一个月',
                value:1
           },{
               title:'三个月',
                value:3
           },{
               title:'六个月',
                value:6
           },{
               title:'一年',
                value:12
           }]     

            }
        }
    },
    methods: {
        choose(index){
            this.nowindex=index
          this.$emit('cat',this.redio[index].value)
        }
    },
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
#time{
    width: 400px;
    height: 80px;
    margin-top: 20px;
}
#time ul{
    width: 100%;
    height: 100%;
    
}
#time ul li{
    width: 50px;
    height: 20px;
    margin-left: 30px;
    float: left;
    border: 1px solid #eee
}
#time ul li.active{
    background: rgb(243, 191, 191);
}
</style>
