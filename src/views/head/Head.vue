<template>
  <div>
    <div class="head_top">
      <div class="head_left home_logo_">
        <img class="home_logo_img" src="../../imags/home_logo.png">
      </div>
      <div class="head_content home_logo_">ddd</div>
      <div class=" head_right home_logo_">fff</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head"
};
</script>

<style scoped>
.head_left{
  width: 25%;
}
.head_content{
  width: 50%;
}
.head_right{
  width: 25%;
}
.head_top{
  display:flex;

  /* 在水平方向排列*/
  /* row：规定主轴方向为水平*/
  /* column：规定主轴方向为垂直*/
    flex-direction: row;

/* 在主轴方向如何展示*/
/* 排列方式：flex-start  flex-end space-around space-between   */
  justify-content: space-around;

/* 在副轴方向如何展示*/
/* 排列方式：flex-start  flex-end  center  */
  align-items: center;
}

.home_logo_{
  /*border: 1px solid #ffffff;*/
}
.home_logo_img{
  width: 60px;
  height: 60px;
}

</style>