<template>
    <div class="search__suggestions">
        <div class="search__suggestions--title">
            История поиска
            <button
                @click="clearAll"
                class="search__suggestions--title-clear"
                type="button"
            >Очистить</button>
        </div>
        <ul class="search__suggestions--list">
            <li
                v-for="(item, index) in limitedSearchHistory"
                :key="index"
                class="search__suggestions--item"
            >
                <a
                    @click.prevent="$emit('search', item)"
                    class="search__suggestions--link"
                    href="#"
                >
                    {{ item }}
                    <button
                        @click="removeItem(item)"
                        type="button"
                        class="search__suggestions--clear"
                    >
                        <icon-clear />
                    </button>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import IconClear from '@/components/icons/IconClear'

export default {
    name: 'SearchHistoryList',

    components: {
        IconClear
    },

    model: {
        prop: 'model',
        event: 'search'
    },

    props: {
        model: {
            type: String,
            default: ''
        }
    },

    data: () => ({
        searchHistory: [],
    }),

    computed: {
        limitedSearchHistory () {
            return this.$store.getters['search/takeSearchHistory'](this.$config.SEARCH_HISTORY_LIMIT)
        }
    },

    created () {
        this.fetchSearchHistory()
    },

    methods: {
        ...mapActions('search', [
            'fetchSearchHistory',
            'setSearchHistory',
            'removeSearchHistoryItem'
        ]),
        clearAll () {
            this.setSearchHistory([])
        },
        removeItem (item) {
            this.removeSearchHistoryItem(item)
        }
    }
}
</script>
