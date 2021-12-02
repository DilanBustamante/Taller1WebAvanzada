<template>
  <v-col class="container ">
    <div class="fullName">
        <h3>Bienvenido,</h3>
        <div v-if="getUser(currentUser)!=null">
          <h1>{{currentUser.name}}</h1>
        </div>
        <v-btn color='error' class='mt-5'>Salir</v-btn>
    </div>
    <v-card class='chat-container '  >
      <div v-for='comment in comments' :key="comment.id" class="container-comment ">
      <div class='commentary'>
          <h4>{{comment.comment}}</h4>
        <div class='author'>
            <h6 class='author-name light-text '>{{comment.username}}</h6>
            <h6 class='light-text author-date'>{{comment.date}}</h6>
            <v-btn class='delete-btn elevation-2' icon small>
            <v-icon color="error">mdi-delete</v-icon>
            </v-btn>
            <v-btn class='edit-btn elevation-2' icon small>
            <v-icon color="black">mdi-pencil</v-icon>
            </v-btn>
        </div>
        </div>
        <v-btn 
          small 
          color="accent" 
          class='mt-2 answer-btn elevation-0'
          v-if="comment.answer.text == '' "
          @click="setShowFieldState(comment.email, comment.date)">
          Responder
          </v-btn>
        <div class='answer-comment' v-if='comment.answer.text!=""'>
          <h4>{{comment.answer.text}}</h4>
          <div class='author'>
            <h6 class='author-name light-text '>{{comment.answer.author}}</h6>
            <h6 class='light-text author-date'>{{comment.answer.date}}</h6>
            <v-btn class='delete-btn elevation-2' icon small>
              <v-icon color="error">mdi-delete</v-icon>
            </v-btn>
            <v-btn class='edit-btn elevation-2' small icon >
              <v-icon color="black">mdi-pencil</v-icon>
            </v-btn>
          
          </div>

        </div>
        <div v-if='comment.showFieldAnswer==true' >
            <v-text-field 
              label ="Agrega tu comentario" 
              filled 
              class="comment mt-3"
              v-model="newAnswer"
              />
          <v-btn small class="send-btn" @click="addNewAnswer(comment.id)">enviar</v-btn>
        </div>
      </div>
    </v-card>
    
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
import firebase from '../config/firebase';
import { getFirestore, collection, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore';
import { mapState } from 'vuex'

export default {
    name: 'Chat',
    data() 
    { return {
      newComment: '',
      newAnswer: '',
      answer: false,
      comments: [],
      userCurrent: null,
      db: getFirestore(firebase),
    }
  },
  mounted(){
     this.updateComments()
  },
  computed:{ 
    ...mapState(['currentUser'])
  },
  methods: {
    updateComments(){
      this.getComments(this.db).then(res => {
       this.comments = res
      })
    },
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
      
      var idd= Math.floor(Math.random()*10000)

      setDoc(doc(this.db, 'comments', idd+'' ), {
        id: idd,
        username: this.userCurrent.name + ' ' + this.userCurrent.lastname,
        email: this.userCurrent.email,
        comment: this.newComment,
        showFieldAnswer: false,
        answer: {
          text: '',
          author: '',
          date:  '',
          },
        date: fecha + ' ' + hora
      })

      this.clearNewComment()
      this.updateComments()
    },
    async getComments(db){
      const commentsCol = collection(db, 'comments')
      const commentSnapshot = await getDocs(commentsCol)
      const commentList = commentSnapshot.docs.map(comment => comment.data() )
      return commentList
    },
    addNewAnswer(id){
      var hoy = new Date();
      var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
      var hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds()
      const answer = {
          text: this.newAnswer,
          author: this.userCurrent.name + ' ' + this.userCurrent.lastname ,
          date:  fecha + ' ' + hora,
      }
      const commentDocRef = doc(this.db, "comments", id+'');
      updateDoc(commentDocRef, {
        "answer": answer
      });

      this.clearNewAnswer()
      this.updateComments()
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
    getUser(data) {
      this.userCurrent = data
      return this.userCurrent
    }
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
.chat-container{
  padding-top: 50px;
  max-height: 700px;
  overflow-y: scroll;
  background:linear-gradient(to top, rgb(191, 191, 226), white) !important;
}
a{
  margin-right: 800px;
}
.delete-btn, .edit-btn{
  width: 50px;
  font-size: 5px;
}
.edit-btn{
  margin-left: 10px;
}
.delete-btn{
  margin-left: auto;
}
.fullName{
  background-color: rgb(134, 134, 134);
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
