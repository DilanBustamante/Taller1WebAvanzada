<template>

        <v-col class="container"> 
           
            <div class="container-comment">
                 <v-text-field  label ="Agrega tu comentario" filled class="comment"/>
                 <a> Responder</a>
            </div>
             

        </v-col>

</template>



<script>
export default {
    
}
</script>


<style scoped>

  .container{
      margin: auto;
      width: 1300px;
  }


  .comment{
      width: 900px;
      margin:auto;
  }

  .container-comment{
      text-align: center;
  }

  a{
      margin-right: 800px;
  }

</style>