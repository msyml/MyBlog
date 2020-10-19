import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import store from './store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';


const app = createApp(App)
app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')