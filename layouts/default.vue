<template>
  <div>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
.container
{
  text-align: center;
}

.edittext {
  height: 30px;
  padding: 12px;
  margin: 0px 0px 10px 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

.button, .button:visited
{
  min-width: 100px;
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px;
  margin: 5px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #ff5522;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

.subtitle
{
  color: #000;
  font-weight: 300;
  font-size: 2em;
  margin: 0;
}

@media screen and (min-width: 601px) {
  div.title {
    font-size: 70px;
  }
}

@media screen and (max-width: 600px) {
  div.title {
    font-size: 25px;
  }
}

@media screen and (min-width: 601px) {
  div.subtitle {
    font-size: 50px;
  }
}

@media screen and (max-width: 600px) {
  div.subtitle {
    font-size: 20px;
  }
}
</style>
