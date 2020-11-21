import Vue, { createApp } from 'vue';
import App from './App.vue';
import store from '@/store/index';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.use(store).mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon)