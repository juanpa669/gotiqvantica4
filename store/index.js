import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export function createStore () {
  return new Vuex.Store({
    getters,
    actions,
    mutations
  })
}
