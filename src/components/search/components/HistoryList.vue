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
                class="search__suggestions--item"
            >
                <router-link
                    :to="`/search/?q=${item}`"
                    @click.native="$emit('click', item)"
                    class="search__suggestions--link"
                >
                    {{ item }}
                </router-link>
                <button
                    @click.stop="removeItem(item)"
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
        event: 'click',
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
