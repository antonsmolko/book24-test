<template>
    <form ref="search" @submit.prevent="submit" autocomplete="off" class="search">
        <div class="search__form-group" :class="{ '_focus': uiState === 'focusin' }">
            <div class="search__form-group--body">
                <search-form-input v-model="query" @focusin="handleFocusing"/>
            </div>
            <button type="submit" class="search__form-group--button">Найти</button>
        </div>
        <div v-if="isVisibleDropdown" class="search__dropdown">
            <div v-if="isVisibleSuggestions" class="search__suggestions">
                <ul class="search__suggestions--list">
                    <hint-item
                        v-for="item in hints"
                        :key="item.link"
                        :query="query"
                        :item="item"
                    />
                    <category-item
                        v-for="item in catalogs"
                        :key="item.link"
                        :query="query"
                        :item="item"
                    />
                    <product-item
                        v-for="item in products"
                        :key="item.meta.id"
                        :query="query"
                        :item="item"
                    />
                </ul>
            </div>
            <template v-else>
                <history-list
                    v-if="isVisibleHistory"
                    v-model="query"
                    :query="query"
                    @click="addSearchHistoryItem"
                />
                <popular-list
                    v-if="isVisiblePopular"
                    :list="popularPhrases"
                    v-model="query"
                    @submit="submit"
                />
            </template>
        </div>
    </form>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import get from 'lodash/get'
import SearchFormInput from '@/components/search/components/SearchFormInput'
import HistoryList from '@/components/search/components/HistoryList'
import PopularList from '@/components/search/components/PopularList'
import HintItem from "@/components/search/components/Suggestions/HintItem"
import CategoryItem from "@/components/search/components/Suggestions/CategoryItem"
import ProductItem from "@/components/search/components/Suggestions/ProductItem"
import debounce from 'lodash/debounce'
import config from '@/config'

const _debounce = debounce(f => f(), config.SEARCH_DELAY)

export default {
    name: 'Search',

    components: {
        SearchFormInput,
        HistoryList,
        PopularList,
        HintItem,
        CategoryItem,
        ProductItem,
    },

    data: () => ({
        searchProcessState: 'initial',
        popularProcessState: 'initial',
        uiState: 'initial',
        query: '',
        trackOutsideClick: null
    }),

    computed: {
        ...mapState('search', [
            'searchHistory',
            'popularPhrases'
        ]),
        ...mapGetters('search', [
            'hints',
            'catalogs',
            'products',
            'suggestionsLength'
        ]),
        isVisibleDropdown () {
            return this.uiState === 'opened' && (this.isVisibleHistory || this.isVisiblePopular || this.isVisibleSuggestions)
        },
        isVisibleHistory () {
            return this.searchHistory.length > 0
        },
        isVisiblePopular () {
            return this.popularProcessState === 'success' && this.popularPhrases.length > 0
        },
        isVisibleSuggestions () {
            return this.query.trim() && this.suggestionsLength > 0
        }
    },

    watch: {
        query () {
            _debounce(this.search)
        }
    },

    async created () {
        this.query = get(this.$route, 'query.q', '').trim()

        this.fetchSearchHistory()

        this.popularProcessState = 'request'

        await this.fetchPopularPhrases()

        this.popularProcessState = 'success'
    },

    mounted () {
        this.listenOutsideClick()
    },

    beforeDestroy () {
        this.unListenOutsideClick()
    },

    methods: {
        ...mapActions('search', [
            'fetchPopularPhrases',
            'fetchSearchHistory',
            'addSearchHistoryItem',
            'fetchSuggestions'
        ]),

        handleFocusing () {
            this.uiState = 'opened'
            this.searchProcessState = 'filling'
            this.search()
        },

        submit () {
            const q = this.query
            this.addSearchHistoryItem(q)

            if (q !== this.$route.query.q) {
                this.$router.push({ name: 'search', query: { q } })
            }
        },

        async search () {
            const query = this.query.trim()

            if (!query) {
                return
            }

            this.searchProcessState = 'request'

            await this.fetchSuggestions(query)

            this.searchProcessState = 'success'
        },

        listenOutsideClick () {
            document.addEventListener('click', this.setStatesByClickTarget)
        },

        unListenOutsideClick () {
            document.removeEventListener('click', this.setStatesByClickTarget)
        },

        setStatesByClickTarget ({ target }) {
            const searchEl = this.$refs.search
            const isClickInside = searchEl.contains(target)

            this.uiState = isClickInside ? 'opened' : 'initial'

            if (!isClickInside) {
                this.searchProcessState = 'initial'
            }
        }
    }
}
</script>

<style lang="scss">
    @import 'scss/search';
</style>
