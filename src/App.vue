<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ title }}</h1>
    <h2>{{msg}}</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>Router</h2>
    <ul>
      <li><router-link :to="{name: 'home'}">Home</router-link></li>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
      <li><router-link :to="{name: 'pages'}">Pages</router-link></li>
    </ul>
    <router-view :stories="stories"></router-view>
  </div>

</template>

<script>
  import Home from './components/home.vue';
  export default {
    name: 'app',
    data() {
      return{
        title: 'Vue.js 2',
        msg: 'Belinda Test vue',
        stories: [
          {
            id: 1,
            title: 'vue.js',
            content: 'ง่ายมากๆ'
          },
          {
            id: 2,
            title: 'react',
            content: 'โครตยาก'
          }
        ]
      }
    }
  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
