<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <form @submit.prevent="funcionValidacion">
        <div class="column is-6">
          <i class="glyphicon glyphicon-envelope"></i>
          <label>Email</label>
            <p>
                <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text">
                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>
            </p>
        </div>
        <div class="column is-6">
          <i class="glyphicon glyphicon-user"></i>
            <label>Nom</label>
            <p>
                <input name="name" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text">
                <i v-show="errors.has('name')" class="fa fa-warning"></i>
                <span v-show="errors.has('name')" class="error">{{ errors.first('name') }}</span>
            </p>
        </div>
        <div class="column is-6">
          <i class="glyphicon glyphicon-earphone"></i>
            <label>Teléfon</label>
            <p>
                <input name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text">
                <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                <span v-show="errors.has('phone')" class="error">{{ errors.first('phone') }}</span>
            </p>
        </div>
        <div class="column is-6">
          <i class="glyphicon glyphicon-hourglass"></i>
            <label>Data naixement</label>
            <p>
            <input v-validate="'date_format:DD/MM/YYYY|date_between:01/01/1980,31/12/2018'" name="date_format_field" type="text" placeholder="__/__/____">
            <span v-show="errors.has('date_format_field')" class="error">{{ errors.first('date_format_field') }}</span>
            <!--
            <input name="date_format_field" v-model="date_format_field" v-validate="'date_format:DD/MM/YYYY'" :class="{'input': true, 'is-danger': errors.has('date_format_field') }" type="text">
          -->
          </p>
        </div>

        <div class="column is-6">
          <i class="glyphicon glyphicon-dashboard"></i>
            <label>Edat mínima 18 i màxima 80</label>
            <p>
            <input name="between_field" v-model="between_field" v-validate="'between:18,80'" :class="{'input': true, 'is-danger': errors.has('between_field') }" type="text">
            <span v-show="errors.has('between_field')" class="error">{{ errors.first('between_field') }}</span>
            </p>
        </div>

        <div class="column is-6">
          <i class="glyphicon glyphicon-cloud"></i>
            <label>El teu païs</label>
            <p>
              <span class="select">
                <select v-validate="'included:1,2,3,4'" name="in_field" data-vv-as="selected">
                  <option value="1">Espanya</option>
                  <option value="2">Andorra</option>
                  <option value="3">França</option>
                  <option value="4">Anglaterra</option>
                </select>
              </span>
              <!-- Se lecciona el 5 dona error -->
              <span v-show="errors.has('in_field')" class="error">{{ errors.first('in_field') }}</span>
            </p>
        </div>



        <div class="column is-12">
          <i class="glyphicon glyphicon-globe"></i>
            <label>Lloc web</label>
            <p>
                <input name="url" v-model="url" v-validate="'required|url'" :class="{'input': true, 'is-danger': errors.has('url') }" type="text">
                <i v-show="errors.has('url')" class="fa fa-warning"></i>
                <span v-show="errors.has('url')" class="error">{{ errors.first('url') }}</span>
            </p>
        </div>

        <div class="column is-12">
          <i class="glyphicon glyphicon-random"></i>
            <label>Ip del teu PC</label>
            <p>
                <input v-validate="'ip'" data-vv-as="ip" name="ip_field" type="text">
                <i v-show="errors.has('ip_field')" class="fa fa-warning"></i>
                <span v-show="errors.has('ip_field')" class="error">{{ errors.first('ip_field') }}</span>
            </p>
        </div>



        <div class="column is-12">
            <p class="control">
                <button class="btn btn-success" type="submit">Enviar</button>
            </p>
        </div>
    </form>
   </div>
 </div>
</template>

<script>

export default {
  name: 'form-example',
  data: () => ({
    email: '',
    name: '',
    phone: '',
    url: '',
    between_field: '',
    date_format_field: '',
    in_field:'',
    ip_field:''
  }),
  methods: {
    funcionValidacion() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Formulari Correcte !');
          return;
        }

        alert('Formulari amb errors !');
      });
    }
  }
};
</script>
<!--
<script>

export default {
  data(){
    return{
      usuario: {
        nombre : '',
        correo : '',
        clave : '',
        edad : '',
        pais : 'Colombia',
        mensaje: '',
        genero: 'hombre',
        condiciones: []
      },
      mostrar : false,
      paises : ['Argentina','Bolivia','Brasil','Chile','Colombia','Ecuador','España','Mexico','Paraguay','Uruguay','Venezuela']

    }
  },
  methods:{
    enviarFormulario(){
      this.mostrar = true
    }
  }
}
</script>
-->
<style>
.mensaje{
  white-space: pre;
}
.error{
  color: #FC8537;
}
</style>
