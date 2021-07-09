import Vue from 'vue'

const config = Object.freeze({
  LOCAL_STORAGE_HISTORY_KEY: 'search-history',
  SEARCH_HISTORY_LIMIT: 4,
})

Vue.prototype.$config = config

export default config
