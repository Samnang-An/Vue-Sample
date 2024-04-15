import { createApp,VueElement } from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Event';
import router from './routes';
import $page from './data';

const app = createApp(App);

app.use(router);
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$page = $page;

app.mount('#app');
