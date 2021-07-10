import axios from '@/plugins/axios'
import routes from '@/api/routes'
import $config from '@/config'

const params = {
  limit_suggest: $config.LIMIT_SUGGEST,
  limit_product: $config.LIMIT_PRODUCT,
  limit_section: $config.LIMIT_SECTION,
  limit_podborki: $config.LIMIT_PODBORKI
}

export const getSuggestions = (q) => axios.get(routes.suggestionsPath(), { params: { q, ...params } })
export const getPopularPhrases = () => axios.get(routes.popularPhrasesPath())
