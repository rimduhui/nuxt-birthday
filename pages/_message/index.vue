<template>
  <section class="container" v-if='message'>
    <h2 class="info">
    {{ message.name }} <br>
    {{ message.content }}
    </h2>
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
}
</style>
