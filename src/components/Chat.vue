<template>
  <v-col class="container">
    <div class="fullName">
        <h3>Bienvenido,</h3>
        <h1>{{currrentUser.username}}</h1>
        <v-btn color='error' class='mt-5'>Salir</v-btn>
    </div>
    
    <div v-for='comment in comments' :key="comment.date" class="container-comment">
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
        @click="setShowFieldState(comment.email, comment.date)">
        Responder
        </v-btn>
      <div class='answer-comment' v-if='comment.answer.text!=""'>
        <h4>{{comment.answer.text}}</h4>
        <div class='author'>
         <h6 class='author-name light-text '>{{comment.answer.author}}</h6>
         <h6 class='light-text author-date'>{{comment.answer.date}}</h6>
       </div>
      </div>
      <div v-if='comment.showFieldAnswer==true' >
          <v-text-field 
            label ="Agrega tu comentario" 
            filled 
            class="comment mt-3"
            v-model="newAnswer"
            />
        <v-btn small class="send-btn" @click="addNewAnswer(comment.email, comment.date)">enviar</v-btn>
      </div>
    </div>
    <div class='newForo'>
        <v-text-field 
            label ="Agrega un nuevo comentario al foro" 
            filled 
            class="newCommentary mt-5"
            v-model="newComment"
        />
        <v-btn 
        class='newCommentary-btn'
        color="success"
        small
        @click="addNewMessage"
        >comentar</v-btn>
    </div>
  </v-col>
</template>

<script>
export default {
    name: 'Chat',
    data() 
    { return {
      newComment: '',
      newAnswer: '',
      username: 'Dilan Bustamante',
      currrentUser: {
        username: 'Dilan Bustamante',
        email: 'dilan@gmail.com' ,
      },
      answer: false,
      comments: [],
    }
  },
  methods: {
    clearNewComment(){
      this.newComment = ''
    },
    clearNewAnswer(){
      this.newAnswer = ''
    },
    addNewMessage(){
      var hoy = new Date();
      var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
      var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
      const newComment= {
      username: this.currrentUser.username,
      email: this.currrentUser.email,
      comment: this.newComment,
      showFieldAnswer: false,
      answer: {
        text: '',
        author: '',
        date: '',
      },
      date: fecha + ' ' + hora }

      this.comments.push(newComment)
      this.clearNewComment()
    },
    addNewAnswer(email, date){
      var hoy = new Date();
      var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
      var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
      const answer = {
          text: this.newAnswer,
          author: this.currrentUser.username,
          date:  fecha + ' ' + hora,
      }
      for(let i = 0; i < this.comments.length; i++){
        if(this.comments[i].email == email && this.comments[i].date == date ){
          this.comments[i].answer = answer
           this.comments[i].showFieldAnswer= false
        }
      }
      this.clearNewAnswer()
    },
    setShowFieldState(email, date){
      const comment = this.searchComment(email, date)
      comment.showFieldAnswer=!comment.showFieldAnswer
      this.clearNewAnswer()
      this.updateComment(email, date, comment)
},
    updateComment(email, date, newCommentState){
       for(let i = 0; i < this.comments.length; i++){
        if(this.comments[i].email == email && this.comments[i].date == date ){
          this.comments[i] = newCommentState
        }
      }
    },
    searchComment(email, date){
      for(let i = 0; i < this.comments.length; i++){
        if(this.comments[i].email == email && this.comments[i].date == date ){
          return this.comments[i]
        }
      }
    },
  },
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
