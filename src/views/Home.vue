<template>
  <h3>hello,vue3-Webpack-template</h3>
</template>

<script>
import {testApi} from "../api/base";
import Data from "@/assets/data.csv";
import Note from "@/assets/data.xml"
export default {
  name: "Home",
  setup(){
    testApi()
    console.log(Data)
    console.log(Note)
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
