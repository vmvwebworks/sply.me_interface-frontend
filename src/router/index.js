import Vue from 'vue'
import Router from 'vue-router'
import Lobby from '@/pages/Lobby'
import User from '@/pages/users/User'
import Conversation from '@/pages/conversations/Conversation'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Lobby',
      component: Lobby
    },
    {
      path: '/username',
      name: 'Username',
      component: User
    },
    {
      path: '/conversation_id/conversaion',
      name: 'Conversation',
      component: Conversation
    }
  ]
})
