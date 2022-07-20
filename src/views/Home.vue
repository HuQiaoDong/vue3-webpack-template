<template>
  <div id="main">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content></a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>

</template>

<script>
export default {
  name: "Home",
  setup(){
  }
}
</script>

<style >
#main {
  text-align: center;
}
 .ant-layout-header, .ant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark']  .ant-layout-header {
  height: 64px;
  background: #6aa0c7;
}
[data-theme='dark']  .ant-layout-footer {
  background: #6aa0c7;
  height: 69px;
}
 .ant-layout-footer {
  line-height: 1.5;
}
 .ant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark']  .ant-layout-sider {
  background: #3499ec;
}
 .ant-layout-content {
  min-height: calc(100vh - 69px - 64px);
  color: #fff;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark']  .ant-layout-content {
  background: #107bcb;
}
 > .code-box-demo > .ant-layout + .ant-layout {
  margin-top: 48px;
}
</style>
