import Vue from 'vue'
import Router from 'vue-router'
// import FriendList from '../components/FriendList'
import FriendCard from '../components/FriendСard'
import Home from '../components/Home'

// import 'normalize.css'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

Vue.use(Router)

// Vue.component('icon', Icon)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/friendcard',
      name: 'FriendCard',
      component: FriendCard
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
