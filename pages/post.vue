<template>
  <section class="bg">
    <div class="inputForm">
      <div class="title">
        슬아야 생일 축하해
      </div>
      <div>
        <input class="edittextSmall" v-model="name" placeholder="이름을 입력하세요">
      </div>
      <div>
        <textarea class="edittextLarge" v-model="content" placeholder="슬아에게 생일 축하 메시지를 입력하세요."></textarea>
      </div>
      <div class="checkMessage">
        슬아에게만 보여주고 싶다면 체크하세요.
        <input v-model="checked" type="checkbox" id="checkbox">
      </div>
      <div class="button" v-on:click="testMethod">
        메시지 등록
      </div>
      <nuxt-link class="button" to="/">
        취소하기
      </nuxt-link>
    </div>
    <br>
  </section>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

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

    this.database = firebase.database()
  },
  head () {
    return {
      title: '슬아 생축',
      meta: [
        { property: 'fb:app_id', content: '204228190210240'},
        { property: 'og:url', content: 'http://bit.ly/2thTMRB' },
        { property: 'og:title', content: '슬아 생일선물 대작전' },
        { property: 'og:image', content: '~/assets/img/seula_duhui.png' },
        { property: 'og:type', content: 'website' },
        { property: 'og:description', content: '그동안 슬아에게 못한 말을 생일선물로 주세요.' }
      ]
    }
  },
  data () {
    return {
      database: null,
      name: '',
      content: '',
      checked: '',
      password: '',
      count: 0
    }
  },
  methods: {
    testMethod: function () {
      console.log('clicked! message!')
      this.database.ref('count/')
        .once('value')
        .then(snapshot => {
          let obj = snapshot.val()

          if (obj == null) {
            this.count = 0
          } else {
            this.count = Object.values(obj)
          }

          this.count = parseInt(this.count) + 1
          this.database.ref('messages/' + this.count).set({
            id: this.count,
            name: this.name,
            content: this.content,
            private: this.checked
          })
          this.database.ref('count/').set({
            count: this.count
          })
          this.$router.replace({ path: '/' })
        })
    }
  }
}
</script>

<style scoped>
.title
{
  padding: 30px 0;
}
.inputForm {
  width: 90%;
  max-width: 600px;
  list-style: none;
  margin: auto;
  padding: 0;
}

.edittextSmall {
  width: 100%;
  padding: 12px;
  margin: 0px 0px 10px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 1.2em;
}

.edittextLarge {
  width: 100%;
  height: 500px;
  padding: 12px;
  margin: 0px 0px 10px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 1.2em;
}

.checkMessage{
  margin: 0px 0px 10px 0px;
}

</style>
