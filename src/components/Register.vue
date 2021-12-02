<template>
    <div class="container elevation-2"  >
        <h1>REGISTRO</h1>
        <v-text-field v-model='name' label ="Nombre" filled class="field"/>
        <v-text-field v-model='lastname' label ="Apellido" filled class="field"/>
        <v-text-field v-model='email' label = "Email" filled class="field" />
        <v-text-field 
        v-model='password'
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" 
        :type="show1 ? 'text' : 'password'" 
        @click:append="show1 = !show1" 
        label = "Contraseña" 
        filled 
        class="password-field" />
        <v-text-field v-model='valid_until' label = "Valido hasta" filled class="field" />
        <v-text-field v-model='state' label = "Estado" filled class="field" />
        <v-btn color="success" class="mr-4" @click="addNewUser"> Guardar </v-btn>
        <v-btn color="error" class="mr-4" @click="reset"> Limpiar </v-btn>
    </div>
</template>

<script>
import firebase from '../config/firebase';
import { getFirestore,collection, getDocs, setDoc, doc } from 'firebase/firestore';
export default {
    name:'Register',
    data() {
        return{
            users: [],
            name: '',
            lastname: '',
            email: '',
            password: '',
            valid_until: '',
            state: '',
            show1: false,
            db: getFirestore(firebase),
        }
    },
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
        validate(email){
            for(let i=0;i<this.users.length;i++){
                if(this.users[i].email==email){
                    return true
                }
            }
            return false
        },
        reset(){
            this.name= ''
            this.lastname= ''
            this.email= ''
            this.password= ''
            this.valid_until= ''
            this.state= ''
            this.show1= false
        },
        addNewUser(){

            this.updateUsers()

            setTimeout(()=>{
                  var idd= Math.floor(Math.random()*10000)

            if(this.validate(this.email)==false){
                setDoc(doc(this.db, 'Users', idd+'' ), {
                    id: idd,
                    name: this.name,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                    state: this.state,
                })
            this.reset()
            }else{
                console.log('el usuario ya esta registrado')
            }
            },2000)

          
            
            
        },
    }
}
</script>

<style scoped>

    .container{
        margin: 30px auto;
        width: 600px;
        padding: 40px;
        background: white;
        border-radius: 10px;
    }

    .field{
        display: flex;
        margin-bottom: 40px;
        font-size: 20px;
    }

    .mr-4{
        margin-bottom: 60px;
        margin-left: 80px;
        margin-right: 40px;
    }

    h1{
        text-align: center;
        margin-bottom: 50px;
    }
</style>