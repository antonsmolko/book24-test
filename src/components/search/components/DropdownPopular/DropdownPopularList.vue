<template>
    <div class="search__suggestions">
        <div class="search__suggestions--title">Популярные запросы</div>
        <ul class="search__suggestions--list">
            <dropdown-popular-item
                v-for="(item, index) in list"
                :key="index"
                :item="item"
                :query="query"
            />
        </ul>
    </div>
</template>

<script>
import DropdownPopularItem from "@/components/search/components/DropdownPopular/DropdownPopularItem"

export default {
    name: 'DropdownPopularList',

    components: {
        DropdownPopularItem
    },

    props: {
        list: {
            type: Array,
            default: () => []
        },

        query: {
            type: String,
            default: ''
        }
    }
}
</script>
