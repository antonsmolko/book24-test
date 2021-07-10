<template>
    <li class="search__suggestions--item">
        <router-link
            :to="item.link"
            v-html="highlightedTitle"
            @click="$emit('search', item.title)"
            class="search__suggestions--link"
        />
    </li>
</template>

<script>
import { highlightingTextByValue} from "@/helpers"

export default {
    name: 'HintItem',

    props: {
        item: {
            type: Object,
            default: () => ({})
        },

        query: {
            type: String,
            default: ''
        }
    },

    computed: {
        highlightedTitle () {
            return highlightingTextByValue(this.item.title, this.query)
        }
    }
}
</script>
