<template>
  <h3>hello,vue3-Webpack-template</h3>
</template>

<script>
import json5 from "@/assets/data.json5";
import yaml from "@/assets/data.yaml";
export default {
  name: "Home",
  setup(){
    console.log(json5,yaml)
    const test = () => {
      console.log("do something");
    }

    const aopTest = test.around(()=>{
      console.log("before")
    },()=>{
      console.log("after")
    })
    aopTest()
  }
}
</script>

<style scoped>
h3{
  padding: 20px 0;
  text-align: center;
}
</style>
