export { default as Education } from '../../components/Education.vue'
export { default as Experience } from '../../components/Experience.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Service } from '../../components/Service.vue'

export const LazyEducation = import('../../components/Education.vue' /* webpackChunkName: "components/Education'}" */).then(c => c.default || c)
export const LazyExperience = import('../../components/Experience.vue' /* webpackChunkName: "components/Experience'}" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer'}" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header'}" */).then(c => c.default || c)
export const LazyService = import('../../components/Service.vue' /* webpackChunkName: "components/Service'}" */).then(c => c.default || c)
