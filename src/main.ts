import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { Tabbar, TabbarItem, Tab, Tabs, Search, Image as VanImage, Row, Icon } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Tab);
app.use(Tabs);
app.use(router);
app.use(Search);
app.use(VanImage);
app.use(Row);
app.use(Icon)
app.mount('#app');