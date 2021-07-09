import ls from '@/api/localStorage'
import _ from 'lodash'

const state = {
  searchHistory: [],
}

const mutations = {
  FETCH_SEARCH_HISTORY: (state) => {
    state.searchHistory = ls.getSearchHistory()
  },
  SET_SEARCH_HISTORY: (state, payload) => {
    state.searchHistory = payload
    ls.setSearchHistory(state.searchHistory)
  },
  ADD_SEARCH_HISTORY_ITEM: (state, payload) => {
    state.searchHistory = _.compact(_.uniq([...state.searchHistory, payload]))
    ls.setSearchHistory(state.searchHistory)
  },
  REMOVE_SEARCH_HISTORY_ITEM: (state, payload) => {
    state.searchHistory = _.without(state.searchHistory, payload)
    ls.setSearchHistory(state.searchHistory)
  }
}

const actions = {
  fetchSearchHistory: ({ commit }) => commit('FETCH_SEARCH_HISTORY'),
  setSearchHistory: ({ commit }, payload) => commit('SET_SEARCH_HISTORY', payload),
  addSearchHistoryItem: ({ commit }, payload) => commit('ADD_SEARCH_HISTORY_ITEM', payload),
  removeSearchHistoryItem: ({ commit }, payload) => commit('REMOVE_SEARCH_HISTORY_ITEM', payload),
}

const getters = {
  takeSearchHistory: (state) => (num) => _.take(state.searchHistory, num)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
