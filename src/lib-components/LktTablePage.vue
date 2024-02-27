<script lang="ts">
export default {name: "LktTablePage", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {computed, nextTick, PropType, ref, useSlots} from "vue";
import {LktTableColumn} from "lkt-table";
import {LktObject} from "lkt-ts-interfaces";

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    page: {type: Number, default: 1},
    resource: {type: String, default: ''},
    noResultsText: {type: String, default: 'No results'},
    title: {type: String, default: ''},
    columns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => []},
    filters: {type: Object as PropType<LktObject>, default: () => ({})},
});

const Page = ref(props.page),
    items = ref([]),
    refreshComputedProperties = ref(true),
    loading = ref(true),
    firstLoadReady = ref(false);

const columnKeys = computed((): string[] => {
        return props.columns.map(c => c.key);
    }),
    colSlots = computed((): LktObject => {
        refreshComputedProperties.value;
        let r = [];
        for (let k in slots) if (columnKeys.value.indexOf(k) !== -1) r.push(k);
        return r;
    });

const onResults = (r: any) => {
        //@ts-ignore
        if (Array.isArray(r)) items.value = r;
        loading.value = false;
        firstLoadReady.value = true;
    },
    onLoading = () => nextTick(() => loading.value = true);
</script>


<template>
    <section class="lkt-table-page">
        <header v-if="title || slots.title">
            <h2 v-if="title">{{ title }}</h2>
            <template v-if="slots.title">
                <slot name="title"></slot>
            </template>
        </header>

        <div class="lkt-table-page-buttons" v-if="slots.buttons">
            <slot name="buttons"></slot>
        </div>

        <div class="lkt-table-page-filters" v-if="firstLoadReady && slots.filters">
            <slot name="filters"></slot>
        </div>

        <lkt-loader v-if="loading"></lkt-loader>

        <lkt-table v-model="items" :columns="columns" v-if="!loading && items.length > 0">
            <template
                v-for="column in colSlots"
                v-slot:[column]="row">
                <slot
                    v-bind:name="column"
                    v-bind:item="row.item"
                    v-bind:value="row.value"
                    v-bind:column="row.column"
                ></slot>
            </template>
        </lkt-table>

        <div class="lkt-table-page-empty" v-if="!loading && items.length === 0">
            {{noResultsText}}
        </div>

        <lkt-paginator
            v-model="Page"
            v-bind:resource="resource"
            v-bind:filters="filters"
            v-on:results="onResults"
            v-on:loading="onLoading"
        ></lkt-paginator>
    </section>
</template>