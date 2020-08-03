export const state = () => ({
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
})

export const mutations = {
    navActive(state, sec) {
        for (let i = 0; i < state.headers.length; i++) {
            if (state.headers[i].id == sec) {
                state.headers[i].active = true
            } else {
                state.headers[i].active = false
            }
        }
    }
}

export const getters = {
    getActiveID(state) {
        for (let i = 0; i < state.headers.length; i++) {
            if (state.headers[i].active == true) {
                return state.headers[i].id
            }
        }
        return ' ';
    }
}