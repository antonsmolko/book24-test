<template>
    <li class="search__suggestions--item">
        <a class="search__suggestions--link" :href="item.link" v-html="formattedTitle"></a>
    </li>
</template>

<script>
export default {
    name: 'DropdownPopularItem',

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
        formattedTitle () {
            const replaceValue = `<b>${this.query}</b>`
            return `<span>${this.item.title.replace(this.query, replaceValue)}</span>`
        }
    }
}
</script>
