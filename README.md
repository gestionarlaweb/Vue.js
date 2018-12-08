# formulario

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# Ejemplo de formualario con validaciones.
En este ejemplo utilizo el plugin  vee-validate
https://baianat.github.io/vee-validate/

# Como instalarlo y utilizarlo
# En main.js

import Vue from 'vue'
import App from './App'

import ca from 'vee-validate/dist/locale/ca';
import VeeValidate, { Validator } from 'vee-validate';

// Install the Plugin.
Vue.use(VeeValidate);

// Aquí llamo al idioma català para los mensajes de error.
Validator.localize('ca', ca);

# En App.vue
# Ejemplo del input nombre:

<input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text">
<i v-show="errors.has('email')" class="fa fa-warning"></i>
<span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>

# export
default {
  name: 'form-example',
  data: () => ({
    email: '',
    name: '',
