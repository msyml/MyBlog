import { createApp } from 'vue'
import App from './App.vue'
import Router from 'vue-router';

const app = createApp(App);

app.use(Router).mount('#app');

export default new Router({
    routes: [{
        path: '/',
        redirectL: "/"
    }]
})