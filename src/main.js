import { createApp } from 'vue'
// import './style.css'
import App from './App.vue';
import "amfe-flexible"
// 1.引入组件
import Vant from 'vant';
// 2.引入样式
import "vant/lib/index.css";
// 引入路由
import router from '@/router/index.js'

const app = createApp(App);
// 3.注册组件
app.use(Vant);
app.use(router);

app.mount('#app');
