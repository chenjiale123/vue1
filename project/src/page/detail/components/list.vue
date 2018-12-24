<template>
    <div id="list" >
        <small>产品类型</small>
        <select >
            <option v-for="(item,index) in listoption" :key="index" value='item'>{{item}}</option>

        </select>
    </div>
</template>
<script>
export default {
    name:'list',
    data(){
        return {
            listoption:['初级','中级','高级']
        }
    }
}
</script>
<style scoped>
select{
    width: 50px;
    height: 20px;
}


</style>
