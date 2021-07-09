<template>
    <div class="search__form-group--container">
        <div class="search__form-group--before">
            <icon-search class="search__form-group--icon" />
        </div>
        <input
            @focusin="$emit('focusin')"
            @focusout="$emit('focusout')"
            @input="input"
            v-model="value"
            id="search-input"
            type="text"
            placeholder="Поиск книг, авторов"
            name="query"
            autocomplete="off"
            value=""
            class="search__form-group--control"
        >
        <div class="search__form-group--after">
            <button @click="$emit('input', '')" type="button" class="search__form-group--clear">
                <img src="@/assets/img/svg/close-circle.svg" alt="clear">
            </button>
        </div>
    </div>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch'

export default {
    name: 'SearchFormInput',

    components: {
        IconSearch
    },

    model: {
        prop: 'model',
        event: 'input'
    },

    props: {
        model: {
            type: String,
            default: ''
        }
    },

    data: () => ({
        value: ''
    }),

    watch: {
        model: {
            handler: function (value) {
                this.value = value
            },
            immediate: true
        }
    },

    methods: {
        input (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>
