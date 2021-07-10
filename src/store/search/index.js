import _ from 'lodash'
import ls from '@/api/localStorage'
import config from '@/config'
import { getSuggestions, getPopularPhrases } from '@/api/search'

const state = {
  searchHistory: [],
  suggestions: [],
  popularPhrases: [],
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
  },
  FETCH_SUGGESTIONS: (state, payload) => {
    state.suggestions = payload
  },
  FETCH_POPULAR_PHRASES: (state, payload) => {
    state.popularPhrases = payload
  }
}

const actions = {
  fetchPopularPhrases: async ({ commit }) => {
    const { data } = await getPopularPhrases()
    commit('FETCH_POPULAR_PHRASES', data.data.data)
  },
  fetchSearchHistory: ({ commit }) => commit('FETCH_SEARCH_HISTORY'),
  setSearchHistory: ({ commit }, payload) => commit('SET_SEARCH_HISTORY', payload),
  addSearchHistoryItem: ({ commit }, payload) => commit('ADD_SEARCH_HISTORY_ITEM', payload),
  removeSearchHistoryItem: ({ commit }, payload) => commit('REMOVE_SEARCH_HISTORY_ITEM', payload),

  fetchSuggestions: async ({ commit }, query) => {
    const { data } = await getSuggestions(query)
    commit('FETCH_SUGGESTIONS', data.DATA)
  }
}

const getters = {
  limitedHistory: (state) => _.take(state.searchHistory, config.LIMIT_SEARCH_HISTORY),
  hints: (state) => state.suggestions.filter(({ link }) => link.startsWith(config.PREFIX_LINK_HINT)),
  catalogs: (state) => state.suggestions.filter(({ link }) => link.startsWith(config.PREFIX_LINK_CATALOG)),
  products: (state) => state.suggestions.filter(({ link }) => link.startsWith(config.PREFIX_LINK_PRODUCT)),
  suggestionsLength: (state) => state.suggestions.length,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
