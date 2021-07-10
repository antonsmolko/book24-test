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
                v-for="(item, index) in limitedHistory"
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
                        @click.stop="removeItem(item)"
                        type="button"
                        class="search__suggestions--clear"
                    ><icon-clear /></button>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import IconClear from '@/components/icons/IconClear'

export default {
    name: 'DropdownSearchHistoryList',

    components: {
        IconClear
    },

    model: {
        event: 'search'
    },

    data: () => ({
        searchHistory: [],
    }),

    computed: {
        ...mapGetters('search', [
            'limitedHistory'
        ])
    },

    methods: {
        ...mapActions('search', [
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
