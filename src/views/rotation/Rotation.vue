<template>
  <div class="rotaion_notice">
    <div class="rotaion">
      <a-carousel autoplay="true" dotPosition="right">
        <div>
          <img src="https://aimg8.dlssyht.cn/u/1917332/ev_user_module_content_tmp/2019_07_25/tmp1564025682_1917332_s.jpg">
        </div>
        <div>
          <img src="https://aimg8.dlssyht.cn/u/1917332/ev_user_module_content_tmp/2019_07_25/tmp1564025682_1917332_s.jpg">
        </div>
      </a-carousel>
    </div>
    <!--  最新公告-->
    <div class="notice">
      <div class="notice_news">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rotation"
}
</script>

<style scoped>
.rotaion_notice{
  position: relative;
}
.rotaion img{
  width: 100%;
  height: 500px;
}
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 500px;
  line-height: 500px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.notice{
  position:absolute;
  top: 455px;
  width: 100%;

  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.notice_news{
  width: 1200px;
  height: 45px;
  color: #ffffff;
  background-color: rgb(0, 0, 0);
  opacity: 0.4;
}
</style>