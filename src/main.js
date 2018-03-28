import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App';
import axios from 'axios';

Vue.use(VueOnsen);
Vue.prototype.base_url = 'http://172.104.166.132';
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
});
