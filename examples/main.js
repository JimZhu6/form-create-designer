import Vue from 'vue';
import ELEMENT from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import formCreate from '@form-create/element-ui';
import App from './App';
import ZFcDesigner from '../src/index';

Vue.use(ELEMENT);
Vue.use(formCreate);
Vue.component('ZFcDesigner', ZFcDesigner);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
