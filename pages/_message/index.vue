<template>
  <section class="bg" v-if='message'>
    <div class="bg2">
      <br>
      <div class="name">{{ message.name }}님의 메세지</div>
      <div class="content" v-bind:class="content">{{ message.content }}</div>
    </div>  
    <nuxt-link class="button" to="/">
      리스트로
    </nuxt-link>
  </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
  name: 'id',
  asyncData ({params}) {
    return { messageId: params.message }
  },
  mounted () {
    var config = {
      apiKey: 'AIzaSyBMnvyCnrdEaZJTWBbQ8ncAOkipE7tLLE0',
      authDomain: 'nuxt-birthday.firebaseapp.com',
      databaseURL: 'https://nuxt-birthday.firebaseio.com',
      projectId: 'nuxt-birthday'
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }

    var database = firebase.database()
    database.ref('messages/' + this.messageId)
      .once('value')
      .then(snapshot => {
        this.message = snapshot.val()
      })
  },
  data () {
    return {
      message: []
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
  margin-bottom: 30px;
}

.bg2 { 
  text-align: left;
}

.name {
  margin: 20px;
  font-size: 2em;
  word-break: break-all;
}

.content {
  margin: 20px;
  font-size: 1.8em;
  word-break: break-all;
}
</style>
