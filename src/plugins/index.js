import router from "../router/index";
import { Button,Layout } from "ant-design-vue";


/**
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router , Button,Layout];


export const userPlugins = app =>{
    plugins.forEach(app.use,app);
};