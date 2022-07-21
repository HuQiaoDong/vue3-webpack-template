<template>
  <div class="main">
    <div class="head_top">
      <div class="head_content">
        <div class="head_logo">
          <img class="head_logo_img" src="../../imags/home_logo.png">
        </div>
        <div class="head_menu">
          <a-menu v-model:selectedKeys="current" mode="horizontal">
            <a-menu-item key="home">
              <router-link to="/">首页</router-link>
            </a-menu-item>
            <a-menu-item key="about">
              <router-link to="/about">关于我们</router-link>
            </a-menu-item>
            <a-menu-item key="news" disabled>
              新闻中心
            </a-menu-item>
            <a-sub-menu key="sub1">
              <template #title>产品中心</template>
              <a-menu-item-group title="电子设备">
                <a-menu-item key="setting:1">手机</a-menu-item>
                <a-menu-item key="setting:2">电脑</a-menu-item>
              </a-menu-item-group>
            </a-sub-menu>
            <a-menu-item key="alipay">
              联系我们
            </a-menu-item>
          </a-menu>
        </div>
        <div class="head_seach">
          <a-space direction="vertical">
            <a-input-search
                v-model:value="value"
                placeholder=""
                enter-button
                @search="onSearch"
            />
          </a-space>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const current = ref(['home']);
</script>

<style scoped>
  .main{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .head_content{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .head_top{
    /*border: 1px solid #e11d1d;*/
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 1200px;
  }

  .head_seach{
    /*border: 1px solid #ffffff;*/
    line-height: 0px;
  }
  .head_logo_img{
    width: 60px;
    height: 60px;
  }

</style>