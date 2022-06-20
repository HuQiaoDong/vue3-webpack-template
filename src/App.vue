<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="js">
import { testApi} from "./api/base";

export default {
  name: "App",
  setup(){
    testApi()
  }
}
</script>

<style scoped>

</style>
