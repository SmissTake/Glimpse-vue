import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(router);
app.mount('#app');