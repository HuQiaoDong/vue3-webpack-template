import {createApp} from "vue";
import App from "./App.vue";
// import "./styles/index.css";
import { userPlugins} from "./plugins";
import {SuperFunction} from "@huqiaodong/wrench";
SuperFunction.install(); //Function切面注册

const app = createApp(App);
userPlugins(app);
app.mount("#app");

