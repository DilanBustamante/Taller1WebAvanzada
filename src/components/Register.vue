<template>
    <div class="container" >
       
      
        <v-text-field label ="Nombre" filled class="field"/>
        
        <v-text-field label ="Apellido" filled class="field"/>

       
        <v-text-field label = "Email" filled class="field" />

        
        <v-text-field label = "Contraseña" filled class="field" />

          
        <v-text-field label = "Valido_hasta" filled class="field" />

        <v-text-field label = "Estado" filled class="field" />


     <v-btn color="success" class="mr-4" @click="validate"> Guardar </v-btn>

     <v-btn color="error" class="mr-4" @click="reset"> Limpiar </v-btn>


    </div>

     

</template>


<script>
export default {
    name:'Register'
}
</script>




<style scoped>

 .container{
    margin: auto;
    width: 500px;
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

</style>