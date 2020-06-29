import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4acfb672 = () => interopDefault(import('../pages/education.vue' /* webpackChunkName: "pages/education" */))
const _139ff95b = () => interopDefault(import('../pages/experience.vue' /* webpackChunkName: "pages/experience" */))
const _2ed42b14 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _02d99c71 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/education",
    component: _4acfb672,
    name: "education"
  }, {
    path: "/experience",
    component: _139ff95b,
    name: "experience"
  }, {
    path: "/service",
    component: _2ed42b14,
    name: "service"
  }, {
    path: "/",
    component: _02d99c71,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
