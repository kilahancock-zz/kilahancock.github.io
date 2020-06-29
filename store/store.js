import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = new Vuex.Store({
    state: {
        headers: [{
            id: 'ed',
            title: 'Education',
            link: '/education',
            active: false
        },
        {
            id: 'ex',
            title: 'Experience',
            link: '/experience',
            active: false
        },
        {
            id: 'sv',
            title: 'Service',
            link: '/service',
            active: false
        }]
    }
})