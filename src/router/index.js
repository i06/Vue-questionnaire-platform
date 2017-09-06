import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login/Login'
import NewHome from '@/components/edit/Home'
import NewQuestionare from '@/components/edit/New'
import Questionare from '@/components/questionare/Questionare'
import Edit from '@/components/edit/Edit'
import Layout from '@/components/layout/Layout'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/platform',
    component: Layout,
    children: [{
      path: 'questionare',
      component: Questionare
    },
    {
      path: 'new',
      component: NewHome,
      children: [{
        path: '/',
        component: NewQuestionare
      },
      {
        path: 'edit',
        component: Edit
      }
      ]
    }
    ]
  },
    { path: '/login', component: Login },
    { path: '/', component: Home }
    // { path: '/', redirect: '/platform/questionare' },
    // { path: '/platform', redirect: '/platform/questionare' }
  ]
})
