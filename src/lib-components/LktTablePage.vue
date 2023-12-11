<script lang="ts">
export default {name: "LktTablePage", inheritAttrs: false}
</script>

<script lang="ts" setup>
// Emits
import {computed, nextTick, PropType, ref, useSlots} from "vue";
import {LktTableColumn} from "lkt-table/dist/types/instances/LktTableColumn";
import {LktObject} from "lkt-ts-interfaces";

// Slots
const slots = useSlots();

// Props
const props = defineProps({
    page: {type: Number, default: 1},
    resource: {type: String, default: ''},
    title: {type: String, default: ''},
    columns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => []},
    filters: {type: Array, default: () => ({})},
});

const Page = ref(props.page),
    items = ref([]),
    refreshComputedProperties = ref(true),
    loading = ref(true);

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
        items.value = r;
        loading.value = false;
    },
    onLoading = () => nextTick(() => loading.value = true);
</script>


<template>
    <section class="lkt-table-page">
        <header v-if="title || slots.buttons">
            <h2 v-if="title">{{ title }}</h2>

            <div class="lkt-field-table__buttons" v-if="slots.buttons">
                <slot name="buttons"></slot>
            </div>
        </header>

        <lkt-loader v-if="loading"></lkt-loader>

        <lkt-table v-model="items" :columns="columns" v-if="!loading">
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

        <lkt-paginator
            v-model="Page"
            v-bind:resource="resource"
            v-bind:filters="filters"
            v-on:results="onResults"
            v-on:loading="onLoading"
        ></lkt-paginator>
    </section>
</template>