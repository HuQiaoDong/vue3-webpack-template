<template>
  <div>hello,vue3-Webpack-template</div>
</template>

<script lang="js">
import { inject } from "vue";
import {BaseApiEnum} from "./api/base";

const axios = inject("axios");
export default {
  name: "App",
  setup(){
    axios.get(BaseApiEnum.localApi)
  }
}
</script>

<style scoped>

</style>
