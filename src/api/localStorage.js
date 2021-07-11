import config from '@/config'

const isAvailable = () => {
  try {
    return Boolean(window.localStorage)
  } catch {
    return false
  }
}

const has = (key) => isAvailable() && Boolean(window.localStorage.getItem(key))

const getItem = (item, byDefault = null) => has(item)
  ? JSON.parse(window.localStorage.getItem(item))
  : byDefault

const setItem = (item, value) => has(item) && window.localStorage.setItem(item, JSON.stringify(value))

const getSearchHistory = () => getItem(config.LOCAL_STORAGE_HISTORY_KEY, [])

const setSearchHistory = (value) => setItem(config.LOCAL_STORAGE_HISTORY_KEY, value)

export default {
  isAvailable,
  getItem,
  setItem,
  getSearchHistory,
  setSearchHistory,
}
