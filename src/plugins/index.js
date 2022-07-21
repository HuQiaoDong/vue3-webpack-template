import router from "../router/index";
import { Button,Layout,Row,Col,Menu,Input,Carousel } from "ant-design-vue";


/**
 * 插件集
 * @type {import("vue").Plugin[]}
 */
const plugins = [router , Button , Layout , Row ,  Col , Menu , Input,Carousel];


export const userPlugins = app =>{
    plugins.forEach(app.use,app);
};