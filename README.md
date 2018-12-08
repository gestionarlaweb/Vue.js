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

# Como instalarlo y utilizarlo
npm install vee-validate --save

# En main.js
import Vue from 'vue'
import App from './App'
import ca from 'vee-validate/dist/locale/ca';
import VeeValidate, { Validator } from 'vee-validate';

Vue.use(VeeValidate);

Validator.localize('ca', ca);

# En App.vue
Aquí el formulario...
....ver documentación
https://baianat.github.io/vee-validate/
