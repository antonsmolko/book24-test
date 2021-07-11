<template>
    <div class="search__suggestions">
        <div class="search__suggestions--title">
            История поиска
            <button
                @click.prevent.stop="clearAll"
                class="search__suggestions--title-clear"
                type="button"
            >Очистить</button>
        </div>
        <ul class="search__suggestions--list">
            <li
                v-for="(item, index) in limitedHistory"
                :key="index"
                class="search__suggestions--item _regular"
            >
                <a
                    href="#"
                    @click.prevent="$emit('submit', item)"
                    class="search__suggestions--link smart-link"
                >
                    {{ item }}
                </a>
                <button
                    @click.stop="removeItem(item, index)"
                    type="button"
                    class="search__suggestions--clear"
                ><icon-clear/></button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import IconClear from '@/components/icons/IconClear'

export default {
    name: 'HistoryList',

    components: {
        IconClear
    },

    model: {
        event: 'submit'
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

        removeItem (item, index) {
            this.removeSearchHistoryItem(item)
            this.$emit('remove-item', index)
        }
    }
}
</script>
