import router from "../router/index";
import { Button,Layout,Row,Col } from "ant-design-vue";


/**
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router , Button , Layout , Row ,  Col];


export const userPlugins = app =>{
    plugins.forEach(app.use,app);
};