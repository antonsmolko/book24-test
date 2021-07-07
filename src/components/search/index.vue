<template>
    <form autocomplete="off" class="search">
        <div class="search__form-group _focus">
            <div class="search__form-group--body">
                <div class="search__form-group--container">
                    <div class="search__form-group--before">
                        <icon-search class="search__form-group--icon" />
                    </div>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Поиск книг, авторов"
                        name="query"
                        autocomplete="off"
                        value=""
                        class="search__form-group--control"
                    >
                    <div class="search__form-group--after">
                        <button type="button" class="search__form-group--clear">
                            <img src="@/assets/img/svg/close-circle.svg" alt="clear">
                        </button>
                    </div>
                </div>
            </div>
            <button type="submit" class="search__form-group--button">
                <span class="">Найти</span>
            </button>
        </div>
        <div class="search__dropdown">
            <div class="search__suggestions">
                <div class="search__suggestions--title">
                    История поиска
                    <button class="search__suggestions--title-clear" type="button">Очистить</button>
                </div>
                <ul class="search__suggestions--list">
                    <li class="search__suggestions--item">
                        <a class="search__suggestions--link" href="#">
                            мара и морок
                            <button type="button" class="search__suggestions--clear">
                                <icon-clear />
                            </button>
                        </a>
                    </li>
                    <li class="search__suggestions--item">
                        <a class="search__suggestions--link" href="#">
                            мара и морок
                            <button type="button" class="search__suggestions--clear">
                                <icon-clear />
                            </button>
                        </a>

                    </li>
                    <li class="search__suggestions--item">
                        <a class="search__suggestions--link" href="#">
                            мара и морок
                            <button type="button" class="search__suggestions--clear">
                                <icon-clear />
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="search__suggestions">
                <div class="search__suggestions--title">
                    Популярные запросы
                </div>
                <ul class="search__suggestions--list">
                    <li class="search__suggestions--item">
                        <a class="search__suggestions--link" href="#">
                            мара и морок
                        </a>
                    </li>
                    <li class="search__suggestions--item">
                        <a class="search__suggestions--link" href="#">
                            мара и морок
                        </a>

                    </li>
                    <li class="search__suggestions--item">
                        <a class="search__suggestions--link" href="#">
                            мара и морок
                        </a>
                    </li>
                </ul>
            </div>
            <div class="search__suggestions">
                <ul class="search__suggestions--list _category">
                    <li class="search__suggestions--item _category">
                        <a class="search__suggestions--link _category" href="#">
                            <b>математик</b>а
                        </a>
                        <div class="search__suggestions--bread-crumbs">
                            <a class="search__suggestions--link _category-bread-crumb" href="#">
                                Учебная литература
                            </a>
                            <a class="search__suggestions--link _category-bread-crumb" href="#">
                                Начальная школа
                            </a>
                            <a class="search__suggestions--link _category-bread-crumb" href="#">
                                Математика
                            </a>
                        </div>

                    </li>
                    <li class="search__suggestions--item _category">
                        <a class="search__suggestions--link _category" href="#">
                            <b>математик</b>а
                        </a>
                        <div class="search__suggestions--bread-crumbs">
                            <a class="search__suggestions--link _category-bread-crumb" href="#">
                                Учебная литература
                            </a>
                            <a class="search__suggestions--link _category-bread-crumb" href="#">
                                Начальная школа
                            </a>
                            <a class="search__suggestions--link _category-bread-crumb" href="#">
                                Математика
                            </a>
                        </div>
                    </li>
                    <li class="search__suggestions--item _product">
                        <a class="search__suggestions--product" href="#">
                            <span class="search__suggestions--product-image">
                                <img src="https://ndc.book24.ru/resize/220x270/iblock/d41/d412a69ce6cbe3c3abc3766fed95725e/ed5c176d31f2e66becbfc98b591bcda0.jpg" alt="">
                            </span>
                            <div>
                                <span class="search__suggestions--product-title">
                                    Моро. <b>Математик</b>а. Рабочая тетрадь. 2 класс. В 2-х ч. Ч. 2
                                </span>
                                <div class="search__suggestions--product-price">
                                    <span class="search__suggestions--product-price-current">310 р.</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="search__suggestions--item _product">
                        <a class="search__suggestions--product" href="#">
                            <span class="search__suggestions--product-image">
                                <img src="https://ndc.book24.ru/resize/220x270/iblock/d41/d412a69ce6cbe3c3abc3766fed95725e/ed5c176d31f2e66becbfc98b591bcda0.jpg" alt="">
                            </span>
                            <div>
                                <span class="search__suggestions--product-title">
                                    Моро. <b>Математик</b>а. Рабочая тетрадь. 2 класс. В 2-х ч. Ч. 2
                                </span>
                                <div class="search__suggestions--product-price">
                                    <span class="search__suggestions--product-price-current">310 р.</span>
                                    <span class="search__suggestions--product-price-old">320 р.</span>
                                    <span class="search__suggestions--product-price-sale">-4%</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </form>
</template>

<script>
import IconSearch from "@/components/icons/IconSearch"
import IconClear from "@/components/icons/IconClear"

export default {
    name: 'Search',

    components: {
        IconSearch,
        IconClear
    }
}
</script>

<style lang="scss">
@import 'search';
</style>
