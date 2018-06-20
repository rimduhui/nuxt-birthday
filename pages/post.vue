<template>
  <div>
    <input v-model="name" placeholder="이름을 입력">
    <textarea v-model="content" placeholder="여러줄을 입력해보세요"></textarea>
    <input v-model="password" type="password">
    <input v-model="checked" type="checkbox" id="checkbox">
    <button v-on:click="testMethod">등록하기</button>
  </div>
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
            private: this.checked,
            password: this.password
          })
          this.database.ref('count/').set({
            count: this.count
          })
        })
    }
  }
}
</script>

<style scoped>

</style>
