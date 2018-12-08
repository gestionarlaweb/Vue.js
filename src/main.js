// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Referencia
// https://baianat.github.io/vee-validate/

//import VeeValidate from 'vee-validate';
//Vue.use(VeeValidate);

import ca from 'vee-validate/dist/locale/ca';
import VeeValidate, { Validator } from 'vee-validate';

// Install the Plugin.
Vue.use(VeeValidate);

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('ca', ca);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
