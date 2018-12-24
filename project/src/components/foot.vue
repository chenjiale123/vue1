<template>
    <div id="foot">
      <div class="footer">
         <span>vue实例底部</span>
      </div>
    </div>
</template>
<script>
export default {
    name:'foot',
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
.footer{
    width: 100%;
    height: 50px;
    background: rgb(209, 209, 209);
    /* padding-top: 15px; */
    box-sizing: border-box;
    text-align: center;
}
 .footer span{

line-height: 50px;
}

</style>