import axios from '@/plugins/axios'
import routes from '@/routes'

const searchApi = {
  getSuggestions: (q) => axios.get(routes.suggestionsPath(), { params: { q } }),
}

export default searchApi;
