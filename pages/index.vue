<template>
  <section class="container">
    <div class='title'>
      위대하신 <b>슬아여왕</b>님 생일
    </div>
    <nuxt-link class="fun-btn" to="/post">
      축하메시지 쓰기
    </nuxt-link>
    <template v-if="messages">
      <div class='subtitle'>
      전체 공개 메세지
      </div>
      <div class="messages">
        <ul class="messagesList">
          <li v-for="message in messages" :key="message.id">
            <div class="messageList" v-if="message.private != true">
              <nuxt-link :to="{ name: 'message', params: { message:message.id }}">
                {{ message.name }}님의 메시지
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
      <div class='subtitle'>
      비밀 메세지
      </div>
      <div class="messages">
        <input class="edittext" type="password" v-model="passwordInput" v-if="password != passwordInput" placeholder="비밀번호 입력">
        <ul class="messagesList" v-if="password == passwordInput">
          <li v-for="message in messages" :key="message.id">
            <div v-if="message.private == true">
              <nuxt-link :to="{ name: 'message', params: { message:message.id }}">
                {{ message.name }}님의 메시지
              </nuxt-link>
            </div>
          </li>
        </ul>
      </div>
      <br>
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
  margin: 50px 0;
}

.subtitle
{
  margin: 40px 20px 20px 20px;
}

.background
{
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
}
.messagesList
{
  max-width: 600px;
  list-style: none;
  margin: auto;
  padding: 0;
}
.messageList
{
  margin: 5px;
}
@media screen and (min-width: 601px) {
  div.messages {
    font-size: 50px;
  }
}

@media screen and (max-width: 600px) {
  div.messages {
    font-size: 20px;
  }
}
.user
{
  margin: 10px 0;
}



/* add default color for animation start  */


/* toggle this class */

.color-bg-start {
  background-color: salmon;
}


/* toggle class bg-animate-color */

.bg-animate-color {
  animation: random-bg .5s linear infinite;
}


/* add animation to bg color  */

@keyframes random-bg {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

.fun-btn {
  /* change bg color to get different hues    */
  background-color: salmon;
  color: white;
  padding: 20px 30px;
  border: none;
  transition: all .3s ease;
  border-radius: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  align-self: center;
  cursor: pointer;
  font-weight: bold;
  animation: random-bg .5s linear infinite, grow 1300ms ease infinite;
}

.start-fun {
  background-color: #fff !important;
  /* change color of button text when fun is started   */
  color: salmon !important;
}

/* pulsating effect on button */
@keyframes grow {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}
</style>
