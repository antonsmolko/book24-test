<template>
    <form @submit.prevent="submit" autocomplete="off" class="search">
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
        <div class="search__dropdown">
            <search-history-list v-model="query" @search="search"/>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
import SearchFormInput from './components/SearchFormInput'
import SearchHistoryList from './components/SearchHistoryList'

import apiSearch from '@/api/search'

export default {
    name: 'Search',

    components: {
        SearchFormInput,
        SearchHistoryList
    },

    data: () => ({
        processState: 'filling',
        uiState: 'focusout',
        query: '',
        searchHistory: [],
        suggestions: []
    }),

    methods: {
        ...mapActions('search', [
            'addSearchHistoryItem'
        ]),

        handleFocusing () {
            this.uiState = 'focusin'
            this.search()
        },

        handleFocusout () {
            this.uiState = 'focusout'
        },

        async submit () {
            await this.search()
            this.addSearchHistoryItem(this.query)
        },

        async search () {
            if (!this.query.trim()) {
                return
            }

            this.processState = 'request'

            const { data } = await apiSearch.getSuggestions(this.query)

            this.suggestions = data.DATA
            this.processState = 'success'
        }
    }
}
</script>

<style lang="scss">
    @import 'scss/search';
</style>
