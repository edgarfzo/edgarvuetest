import vue from 'vue'
import Vuex from 'vue'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: mutations,
    actions: actions,
    getters: getters
})