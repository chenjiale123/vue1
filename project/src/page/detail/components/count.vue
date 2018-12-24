<template>
  <div id="count">
    <div class="drightin">
      <small>购买数量</small>
      <span @click="mins">-</span>
      <input type="text" :value="num" @keyup="inputhand">
      <span @click="maxs">+</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "count",
  data() {
    return {
      num: 1
    };
  },
  methods: {
    maxs() {
      if (this.num >= this.max) {
        return;
      }
      this.num++;
      this.$emit('add',this.num)
    },
    mins() {
      if (this.num <= this.min) {
        return;
      }
      this.num--;
          this.$emit('add',this.num)
    },
    inputhand(){
        let fix
        if(typeof this.num=='string'){
         fix=Number(this.num.replace(/\D/g,''))
        }else if(fix>this.max||fix<this.min){
           fix=this.min
        }else{
            fix=this.num
        }
        this.num=fix
    }
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    }
  }
};
</script>
<style scoped>
.dright {
  width: 400px;
  height: 50px;
  margin-left: 100px;
  background: #fff;
  float: left;
}
.dright h2 {
  font-size: 20px;
  text-align: center;
}
.dright p {
  font-size: 16px;
  color: rgb(185, 185, 185);
  margin-top: 20px;
}
.dright .drightin {
  width:400px;
  height: 50px;
}
</style>
