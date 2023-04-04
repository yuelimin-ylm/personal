import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import plugins from './plugins';
import 'virtual:svg-icons-register';
import './styles/custom.scss';
import dataV from '@jiaminghi/data-view'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(plugins);
// app.use(dataV);
app.mount('#app');
