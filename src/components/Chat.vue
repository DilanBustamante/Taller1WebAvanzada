<template>
  <v-col class="container">
    <div class="fullName">
        <h3>Bienvenido,</h3>
        <h1>{{username}}</h1>
        <v-btn color='error' class='mt-5'>Salir</v-btn>
    </div>
    
    <div v-for='comment in comments' :key="comment.email" class="container-comment">
     <div class='commentary'>
        <h5>{{comment.comment}}</h5>
       <div class='author'>
         <h6 class='author-name light-text '>{{comment.username}}</h6>
         <h6 class='light-text author-date'>{{comment.date}}</h6>
       </div>
      </div>
      <v-btn 
        small 
        color="accent" 
        class='mt-2 answer-btn elevation-0'
        v-if="comment.answer.text==''"
        @click="comment.isAnswer=true">
        Responder
        </v-btn>
      <div class='answer-comment' v-if='comment.answer.text!=""'>
        <h4>{{comment.answer.text}}</h4>
        <div class='author'>
         <h6 class='author-name light-text '>{{comment.answer.author}}</h6>
         <h6 class='light-text author-date'>{{comment.answer.date}}</h6>
       </div>
      </div>
      <div v-if='comment.isAnswer' >
          <v-text-field 
            label ="Agrega tu comentario" 
            filled 
            class="comment mt-3"
            />
        <v-btn small class="send-btn">enviar</v-btn>
      </div>
    </div>
    <div class='newForo'>
        <v-text-field 
            label ="Agrega un nuevo comentario al foro" 
            filled 
            class="newCommentary mt-5"
        />
        <v-btn 
        class='newCommentary-btn'
        color="success"
        small
        >comentar</v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
    name: 'Chat',
    data: () => ({
      username: 'Dilan Bustamante',
      answer: false,
      comments: [
        {username: 'Daniela Otero',
        email: 'jessot@hotmail.com',
        comment: 'Esta es una prueba de comentario',
        isAnswer: false,
        answer: {
            text: '',
            author: '',
            date: '',
        },
        date: '31/10/2021'},
        {username: 'Alison Cayumbo',
        email: 'alisson@hotmail.com',
        comment: 'Vayase pal infierno',
        isAnswer: false,
         answer: {
            text: 'feaaa',
            author: 'Dilan Bustamante',
            date: '30/10-2021',
        },
        date: '30/10/2021'},
        {username: 'Valentina Muñoz',
        email: 'valenmuñoz@hotmail.com',
        comment: 'Me gustan los gatos',
        isAnswer: false,
         answer: {
            text: '',
            author: '',
            date: '',
        },
        date: '29/10/2021'},
      ],
    }),
}
</script>

<style scoped>
.container{
  margin: auto;
  width: 1300px;
}
.comment{
  width: 70%;
  margin: 0 0 0 auto;
}
.container-comment{
  width: 70%;
  margin: 0 auto 30px auto;
}
a{
  margin-right: 800px;
}
.fullName{
  background-color: rgb(65, 65, 65);
  color:white;
  padding: 14px;
  width: max-content;
  border-radius: 10px;
  margin: 50px 20px;
  font-size: 14px;
}
.commentary{
  background-color: rgb(157, 204, 231);
}
.answer-btn{
  font-size: 10px;
}
.author{
  display:flex;
}
.author-name{
  margin-right: 10px;
}
.author-date{
  color:rgb(92, 92, 92);
}
.light-text{
  font-weight: 400; 
  margin-top: 5px;
}
.send-btn{
  display: flex;
  margin-left:auto ;
}
.answer-comment{
  background-color: rgb(166, 255, 158);
  width: 70%;
  margin-left:auto ;
  margin-top: 10px;
}
.answer-comment, .commentary{
  padding: 14px;
  border-radius: 10px;
}
.newForo{
  display: flex;
  width: 70%;
  margin: auto;
}
.newCommentary-btn {
  align-self: center;
}
.newCommentary{
  margin-right: 10px;
}
</style>
