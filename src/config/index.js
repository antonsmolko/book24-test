import Vue from 'vue'

const config = Object.freeze({
  LOCAL_STORAGE_HISTORY_KEY: 'search-history',
  LIMIT_SEARCH_HISTORY: 4,
  LIMIT_SUGGEST: 5,
  LIMIT_PRODUCT: 5,
  LIMIT_SECTION: 3,
  LIMIT_PODBORKI: 0,
  PREFIX_LINK_HINT: '/search/',
  PREFIX_LINK_CATALOG: '/catalog/',
  PREFIX_LINK_PRODUCT: '/product/',
  SEARCH_DELAY: 400
})

Vue.prototype.$config = config

export default config
