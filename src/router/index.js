import Vue from 'vue'
import Router from 'vue-router'
import FriendsList from '@/components/FriendsList'

import 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(Router)

Vue.component('icon', Icon)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FriendsList',
      component: FriendsList
    }
  ]
})
