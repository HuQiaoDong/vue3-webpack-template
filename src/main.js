import {createApp} from "vue";
import App from "./App.vue";
import "./styles/index.css";
// import "tailwindcss/tailwind.css";
import router from "./router/index";
import {SuperFunction} from "@huqiaodong/wrench";
SuperFunction.install(); //Function切面注册
if(USE_MOCK){
    console.log("开启mock");
    require("./mock/index");
}

const app = createApp(App);
app.use(router);
app.mount("#app");
export const vueApp = app;
