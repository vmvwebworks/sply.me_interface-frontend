import Vue from 'vue'
import Router from 'vue-router'
import Lobby from '@/pages/Lobby'
import User from '@/pages/users/User'
import Conversation from '@/pages/conversations/Conversation'
import Payment from '@/pages/payments/Payment'
import Subscription from '@/pages/subscriptions/Subscription'
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
      path: '/subscription',
      name: 'Subscription',
      component: Subscription
    },
    {
      path: '/payment_info',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/conversation_id/conversation',
      name: 'Conversation',
      component: Conversation
    }
  ]
})
