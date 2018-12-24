<template>
  <div id="app">
    <Head/>
    
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
import Head from "./components/head";
import Foot from "./components/foot";
export default {
  name: "App",
  components: {
    Head,
    Foot
  }
};
</script>

<style scoped>
 #app{
   width: 100%;
   height: 668px;
   background: rgb(226, 226, 226);
 }
</style>
