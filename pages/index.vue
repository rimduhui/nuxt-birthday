<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <template v-if="messages">
      <ul class="users">
        <li v-for="message in messages" :key="message.id">
          <nuxt-link :to="{ name: 'message', params: { message:message.id }}">
            {{ message.name }}님의 메시지입니다.
          </nuxt-link>
        </li>
      </ul>
    </template>
    <nuxt-link class="button" to="/post">
      글쓰기로
    </nuxt-link>
  </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

export default {
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

    database.ref('messages/')
      .on('value', snapshot => {
        let obj = snapshot.val()
        this.messages = obj ? Object.values(obj) : null
      })
  },
  head () {
    return {
      title: 'Users'
    }
  },
  data () {
    return {
      messages: null
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
