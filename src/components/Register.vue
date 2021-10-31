<template>
    <div class="container elevation-2"  >
        <h1>REGISTRO</h1>
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