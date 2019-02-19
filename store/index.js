import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
// import i18n from './modules/i18n'

export function createStore () {
  return new Vuex.Store({
    getters,
    actions,
    mutations,
    state
  })
}
