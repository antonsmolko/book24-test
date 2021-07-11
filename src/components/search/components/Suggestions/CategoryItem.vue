<template>
    <li class="search__suggestions--item _category">
        <router-link
            v-html="highlightingTextByValue(item.title, query)"
            :to="item.link"
            @click="$emit('search', item.title)"
            class="search__suggestions--link smart-link _category"
        />
        <div class="search__suggestions--bread-crumbs">
            <router-link
                v-for="crumb in item.meta.bread_crumb"
                :key="crumb.url"
                :to="crumb.url"
                v-html="highlightingTextByValue(crumb.name, query)"
                class="search__suggestions--link _category-bread-crumb"
            />
        </div>
    </li>
</template>

<script>
import { highlightingTextByValue} from "@/helpers"

export default {
    name: 'CategoryItem',

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

    data: () => ({
        highlightingTextByValue
    })
}
</script>
