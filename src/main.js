import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './components/home.vue'
import About from './components/about.vue'
import Pages from './components/pages.vue'
import Editor from './components/editor.vue'
import Views from './components/viewpage.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/About', component: About, name: 'about' },
  { path: '/Pages', component: Pages, name: 'pages' },
  { path: '/Add/', component: Editor, name: 'add' },
  { path: '/Editor/:id', component: Editor, name: 'editor' },
  { path: '/Views/:id', component: Views, name: 'view' }
];

const router = new VueRouter({
  routes
});

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');
