import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserManager from "@/views/UserManager";
import AddUser from "@/views/AddUser";
import EditUser from "@/views/EditUser";
import ViewUser from "@/views/ViewUser";
import PageNotFound from "@/views/PageNotFound";

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect : "/users",
    component: HomeView
  },
  {
    path: '/users',
    name: 'UserManager',
    component: UserManager
  },
  {
    path: '/users/add',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/users/edit/:userId',
    name: 'EditUser',
    component: EditUser
  },
  {
    path: '/users/view/:userId',
    name: 'ViewUser',
    component: ViewUser
  },
  {
    path: '/:pathMatch(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
