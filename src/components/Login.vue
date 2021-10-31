<template>
  <div class='container elevation-2' >
    <h4 id='title'> Bienvenido, por favor inicie sesión o regístrese </h4>
    <v-text-field
      label="Username"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field 
        label="Password"
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
        :type="show1 ? 'text' : 'password'" 
        @click:append="show1 = !show1" show1 es un attr
        class="password-field"></v-text-field>
    <div class='register'> <h5>¿Aún no tienes una cuenta?</h5><a>Regístrate</a> </div>
    <v-btn color="success">Iniciar Sesión</v-btn>
  </div> 
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      show1: false,
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
    methods:{
        getUser(){
            this.$emit(this.user,'getUser');
        }
    }
  }

</script>

<style lang="scss" scoped>
    .container{
        width: 500px;
        height: 370px;
        margin: 120px auto;
        padding: 20px;
        text-align: center;
        background: white;
        display: grid;
    }
    .v-text-field{
        width: 300px;
        justify-self: center;
    }
    #title{
        font-size: 20px;
        color:rgb(0, 38, 109);
        margin: 20px 0px;
    }
    .password-field{
        margin-bottom: 30px;
    }
    .v-btn{
        width: 200px;
        align-self: center;
        justify-self: center;
        margin-top: 10px;
    }
    h5, a{
        font-weight:300;
        font-size: 13px;
        margin-right: 5px;
    }
    .register{
        display: flex;
        justify-self: center;
    }
</style>
