<template>
  <h3>hello,vue3-Webpack-template</h3>
  <img :src="require('@/assets/data.svg')" alt="">
  <div class="image"></div>
</template>

<script>
import {testApi} from "../api/base";
import Data from "@/assets/data.csv";
import Note from "@/assets/data.xml"
import Txt from "@/assets/data.txt"
import Svg from "@/assets/data.svg"
export default {
  name: "Home",
  setup(){
    testApi().then((res)=>{
      console.log(res)
    })
    console.log(Data)
    console.log(Note)
    console.log(Txt)
    console.log(Svg)
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
.image{
  width: 200px;
  height: 200px;
  background: url("../assets/images/logo.png");
  background-size: cover;
}
</style>
