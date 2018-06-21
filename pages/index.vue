<template>
  <section class="container">
    <nuxt-link class="button" to="/post">
      글쓰기로
    </nuxt-link>
    <template v-if="messages">
      <div>
      전체 공개 메세지
      </div>
      <div>
        <ul class="users">
          <li v-for="message in messages" :key="message.id">
            <div v-if="message.private != true">
              <nuxt-link :to="{ name: 'message', params: { message:message.id }}">
                {{ message.name }}님의 메시지입니다.
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
      <div>
      비밀 메세지
      </div>
      <div>
        <input type="password" v-model="passwordInput" v-if="password != passwordInput" placeholder="비밀번호 입력">
        <ul class="users" v-if="password == passwordInput">
          <li v-for="message in messages" :key="message.id">
            <div v-if="message.private == true">
              <nuxt-link :to="{ name: 'message', params: { message:message.id }}">
                {{ message.name }}님의 메시지입니다.
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
    </template>
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
      messages: null,
      password: '0000',
      passwordInput: ''
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
