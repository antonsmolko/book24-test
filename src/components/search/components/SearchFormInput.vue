<template>
    <div class="search__form-group--container">
        <div class="search__form-group--before">
            <icon-search class="search__form-group--icon"/>
        </div>
        <input
            ref="input"
            @focusin="$emit('focusin')"
            @input="$emit('input', value)"
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
            <button v-show="value" @click="clear" type="button" class="search__form-group--clear">
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
        },
        blur: {
            type: Boolean,
            default: false
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
        },
        blur (value) {
            value && this.onBlur()
        }
    },

    methods: {
        clear () {
            this.$emit('input', '')
            this.focusin()
        },

        focusin () {
            this.$refs.input.focus()
        },

        onBlur () {
            this.$refs.input.blur()
        }
    }
}
</script>
