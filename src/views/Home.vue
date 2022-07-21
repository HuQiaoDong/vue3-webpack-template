<template>
  <div id="main">
    <a-layout>
      <a-layout-header>
          <Head></Head>
      </a-layout-header>
      <a-layout-content>
        <!-- 轮播图-->
        <Rotation></Rotation>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>

</template>

<script>
import Head from "./head/Head";
import Rotation from "./rotation/Rotation";
export default {
  name: "Home",
  components: {Rotation, Head},
  setup(){
  }
}
</script>

<style >
#main {
  text-align: center;
}
 .ant-layout-header{
  height: 64px;
  color: #fff;
  background: #fff;
   width: 100%;
}
.ant-layout-content {
  min-height: calc(100vh - 69px - 64px);
  background:  #fff;
}

.ant-layout-footer {
  background: #0c0c0c;
  height: 69px;
  line-height: 1.5;
}

</style>
