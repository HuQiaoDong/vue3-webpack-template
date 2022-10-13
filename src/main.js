import {createApp} from "vue";
import App from "./App.vue";
import "./styles/index.css";
// import "tailwindcss/tailwind.css";
import router from "./router/index";
import {SuperFunction} from "@huqiaodong/wrench";
SuperFunction.install(); //Function切面注册

const app = createApp(App);
app.use(router);
// 屏蔽警告信息
app.config.warnHandler = () => null;

app.mount("#app");
export const vueApp = app;
