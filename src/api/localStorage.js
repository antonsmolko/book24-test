import _ from 'lodash'
import config from '@/config'

const isAvailable = () => {
  try {
    return Boolean(window.localStorage)
  } catch {
    return false
  }
}

const getItem = (item, byDefault = null) => isAvailable() ? JSON.parse(window.localStorage.getItem(item)) : byDefault

const setItem = (item, value) => isAvailable() && window.localStorage.setItem(item, JSON.stringify(value))

const getSearchHistory = () => getItem(config.LOCAL_STORAGE_HISTORY_KEY, [])

const addSearchHistory = (value) => {
  const searchHistory = getItem(config.LOCAL_STORAGE_HISTORY_KEY) || []
  setItem(config.LOCAL_STORAGE_HISTORY_KEY, _.compact(_.uniq([...searchHistory, value])))
}

const setSearchHistory = (value) => setItem(config.LOCAL_STORAGE_HISTORY_KEY, value)

const clearSearchHistory = () => setItem(config.LOCAL_STORAGE_HISTORY_KEY, [])

const removeSearchHistoryItem = (item) => {
  const searchHistory = getItem(config.LOCAL_STORAGE_HISTORY_KEY) || []
  setItem(config.LOCAL_STORAGE_HISTORY_KEY, _.without(searchHistory, item))
}

export default {
  isAvailable,
  getItem,
  setItem,
  addSearchHistory,
  getSearchHistory,
  clearSearchHistory,
  removeSearchHistoryItem,
  setSearchHistory,
}
