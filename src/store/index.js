import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            count: 0
        }
    },
    getters: {
    },
    mutations: {
        countChange(state, payload){
            state.count += payload.amount
        }
    },
    actions: {
    },
    modules: {
    }
})
