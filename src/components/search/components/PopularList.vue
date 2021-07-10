<template>
    <div class="search__suggestions">
        <div class="search__suggestions--title">Популярные запросы</div>
        <ul class="search__suggestions--list">
            <li v-for="item in list" :key="item.id" class="search__suggestions--item">
                <router-link
                    :to="`/search/?q=${item.attributes.phrase}`"
                    @click.native="$emit('click', item.attributes.phrase)"
                    class="search__suggestions--link"
                >{{ item.attributes.phrase }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PopularList",

    model: {
        event: 'click'
    },

    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>
