import 'virtual:windi-devtools';
import 'virtual:windi.css';
import { createApp } from 'vue';
import App from './App.vue';
import { setColorModeOnInit } from './utils/changeColorMode';

createApp(App).mount('#app');

setColorModeOnInit();
