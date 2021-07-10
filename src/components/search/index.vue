<template>
    <form ref="search" @submit.prevent="submit" autocomplete="off" class="search">
        <div class="search__form-group" :class="{ '_focus': uiState === 'focusin' }">
            <div class="search__form-group--body">
                <search-form-input
                    v-model="query"
                    @focusin="handleFocusing"
                    @focusout="handleFocusout"
                />
            </div>
            <button type="submit" class="search__form-group--button">Найти</button>
        </div>
        <div v-if="isVisibleDropdown" class="search__dropdown">
            <dropdown-search-history-list
                v-if="isVisibleHistory"
                v-model="query"
                @search="search"
            />
            <dropdown-popular-list
                v-if="isVisiblePopular"
                :list="popular"
                :query="query"
            />
        </div>
    </form>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import SearchFormInput from '@/components/search/components/SearchFormInput'
import DropdownSearchHistoryList from '@/components/search/components/DropdownSearchHistoryList'
import DropdownPopularList from '@/components/search/components/DropdownPopular/DropdownPopularList'

export default {
    name: 'Search',

    components: {
        SearchFormInput,
        DropdownSearchHistoryList,
        DropdownPopularList
    },

    data: () => ({
        processState: 'filling',
        uiState: 'initial',
        query: '',
        trackOutsideClick: null
    }),

    computed: {
        ...mapState('search', [
            'searchHistory',
        ]),
        ...mapGetters('search', [
            'popular',
            'catalogs',
            'products',
            'suggestionsLength'
        ]),
        isVisibleDropdown () {
            return this.uiState !== 'initial' && (this.isVisibleHistory || this.isVisiblePopular)
        },
        isVisibleHistory () {
            return !this.query && this.searchHistory.length > 0
        },
        isVisiblePopular () {
            return this.query && this.popular.length > 0
        }
    },

    watch: {
        query () {
            this.search()
        }
    },

    created () {
        this.fetchSearchHistory()
    },

    mounted () {
        this.listenOutsideClick()
    },

    beforeDestroy () {
        this.unListenOutsideClick()
    },

    methods: {
        ...mapActions('search', [
            'fetchSearchHistory',
            'addSearchHistoryItem',
            'fetchSuggestions'
        ]),

        handleFocusing () {
            this.uiState = 'focusin'
            this.search()
        },

        handleFocusout () {
            this.uiState = 'focusout'
        },

        async submit () {
            this.addSearchHistoryItem(this.query)
        },

        async search () {
            const query = this.query.trim()

            if (!query) {
                return
            }

            this.processState = 'request'

            await this.fetchSuggestions(query)

            this.processState = 'success'
        },

        listenOutsideClick () {
            document.addEventListener('click', this.initUiStateByClickTarget)
        },

        unListenOutsideClick () {
            document.removeEventListener('click', this.initUiStateByClickTarget)
        },

        initUiStateByClickTarget ({ target }) {
            const searchEl = this.$refs.search
            const isClickInside = searchEl.contains(target)

            if (!isClickInside) {
                this.uiState = 'initial'
            }
        }
    }
}
</script>

<style lang="scss">
    @import 'scss/search';
</style>
