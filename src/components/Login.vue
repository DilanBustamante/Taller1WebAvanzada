<template>
  <div class='container elevation-2' >
    <h4 id='title'> Bienvenido, por favor inicie sesión o regístrese </h4>
    <v-text-field
      label="Correo"
      hide-details="auto"
      v-model="email"
    ></v-text-field>
    <v-text-field 
        label="Contraseña"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
        :type="show1 ? 'text' : 'password'" 
        @click:append="show1 = !show1"
        v-model="password"
        class="password-field"></v-text-field>
    <div class='register'> 
      <h5>¿Aún no tienes una cuenta?</h5>
      <router-link :to="{name:'Register'}">Regístrate</router-link>
      <router-view/>
    </div>
    <v-btn color="success" @click="iniciarSesion">Iniciar Sesión</v-btn>
  </div> 

</template>

<script>
import firebase from '../config/firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
  export default {
    name: 'Login',
    data: () => ({
      show1: false,
      users: [],
      email: '',
      password: '',
       db: getFirestore(firebase),
    }),
    methods:{
       updateUsers(){
        this.getUsers(this.db).then(res => {
          this.users = res
        })
      },
      async getUsers(db){
        const usersCol = collection(db, 'Users')
        const usersSnapshot = await getDocs(usersCol)
        const usersList = usersSnapshot.docs.map(user => user.data() )
        return usersList
      },
      iniciarSesion(){
       this.validateUser(this.email, this.password)
      },
      validateUser(email, password){
        this.updateUsers()
        setTimeout(()=>{
          for(let i=0; i<this.users.length; i++){
            if(this.users[i].email == email && this.users[i].password == password ) {
             this.$store.commit("setCurrentUser", this.users[i])
             this.$router.push('/Foro')
            }
          }
          console.log('correo o contraseña incorrectos')
        },1000)
      },
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
