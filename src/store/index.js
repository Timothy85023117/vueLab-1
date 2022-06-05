import { createStore } from 'vuex'

export default createStore({
    state() {
        return {
            count: 0,
            projectThree:['Ada','Aaliyah','Adela','Basia','Bonnie','Brook','Candice','Celeste','Cheryl','Ella','Eudora','Gemma']
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
