import router from "../router/index";
import { Button } from "ant-design-vue";


/**
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router , Button];


export const userPlugins = app =>{
    plugins.forEach(app.use,app);
};