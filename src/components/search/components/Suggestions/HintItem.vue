<template>
    <li class="search__suggestions--item _regular">
        <a
            href="#"
            v-html="highlightedTitle"
            @click.prevent="$emit('submit', item.title)"
            class="search__suggestions--link smart-link"
        />
    </li>
</template>

<script>
import { highlightingTextByValue} from "@/helpers"

export default {
    name: 'HintItem',

    model: {
        event: 'submit',
        prop: 'query'
    },

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
