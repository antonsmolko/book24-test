const prefix = 'api/v1';

export default {
  suggestionsPath: () => [prefix, 'catalog/search/suggests/'].join('/')
}
