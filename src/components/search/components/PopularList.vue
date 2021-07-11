<template>
    <div class="search__suggestions">
        <div class="search__suggestions--title">Популярные запросы</div>
        <ul class="search__suggestions--list">
            <li v-for="item in list" :key="item.id" class="search__suggestions--item _regular">
                <a
                    href="#"
                    @click.prevent="$emit('submit', item.attributes.phrase)"
                    class="search__suggestions--link smart-link"
                >{{ item.attributes.phrase }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PopularList",

    model: {
        event: 'submit'
    },

    props: {
        list: {
            type: Array,
            default: () => []
        }
    }
}
</script>
