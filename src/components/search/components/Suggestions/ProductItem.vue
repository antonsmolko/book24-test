<template>
    <li class="search__suggestions--item _product">
        <router-link
            @click="$emit('search', item.title)"
            :to="item.link"
            class="search__suggestions--product smart-link"
        >
            <span class="search__suggestions--product-image">
                <img :src="item.meta.image" alt="">
            </span>
            <div>
                <span
                    class="search__suggestions--product-title"
                    v-html="highlightingTextByValue(item.title, query)"
                />
                <div class="search__suggestions--product-price">
                    <span class="search__suggestions--product-price-current">{{ item.meta.price }} р.</span>
                    <span
                        v-if="item.meta.discount && item.meta.original_price"
                        class="search__suggestions--product-price-old"
                    >{{ item.meta.original_price }} р.</span>
                    <span
                        v-if="item.meta.discount"
                        class="search__suggestions--product-price-discount"
                    >-{{ item.meta.discount }}%</span>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
import { highlightingTextByValue } from "@/helpers"

export default {
    name: 'ProductItem',

    props: {
        item: {
            type: Object,
            required: true
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
