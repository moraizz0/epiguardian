import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import cadastro from '../views/epi.vue'
import dashboard from '../components/dashboard.vue'
import entregas from '../views/entrega.vue'
import reports from '../views/relatorios.vue'
import funcionarios from '../views/funcionarios.vue' 
import { useSupabase } from '../composable/useSupabase'

const routes = [
  { path: '/', component: home},
  { path: '/login', name: 'login',component: login},

{
    path: '/dashboard',
    component: dashboard,
    meta: { requiresAuth: true },
    children: [
      { path: 'cadastro', component: cadastro },
      { path: 'entregas', component: entregas },
      { path: 'reports', component: reports },
      { path: 'funcionarios', component: funcionarios }
      ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router