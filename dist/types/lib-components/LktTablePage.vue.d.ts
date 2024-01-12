import { PropType } from "vue";
import { LktTableColumn } from "lkt-table/dist/types/instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        page: {
            type: NumberConstructor;
            default: number;
        };
        resource: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        columns: {
            type: PropType<LktTableColumn[]>;
            default: () => LktTableColumn[];
        };
        filters: {
            type: PropType<LktObject>;
            default: () => {};
        };
    }>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        page: {
            type: NumberConstructor;
            default: number;
        };
        resource: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        columns: {
            type: PropType<LktTableColumn[]>;
            default: () => LktTableColumn[];
        };
        filters: {
            type: PropType<LktObject>;
            default: () => {};
        };
    }>>, {
        columns: LktTableColumn[];
        title: string;
        filters: {};
        page: number;
        resource: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        page: {
            type: NumberConstructor;
            default: number;
        };
        resource: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        columns: {
            type: PropType<LktTableColumn[]>;
            default: () => LktTableColumn[];
        };
        filters: {
            type: PropType<LktObject>;
            default: () => {};
        };
    }>>, {}, {}, {}, {}, {
        columns: LktTableColumn[];
        title: string;
        filters: {};
        page: number;
        resource: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    page: {
        type: NumberConstructor;
        default: number;
    };
    resource: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: PropType<LktTableColumn[]>;
        default: () => LktTableColumn[];
    };
    filters: {
        type: PropType<LktObject>;
        default: () => {};
    };
}>>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    columns: LktTableColumn[];
    title: string;
    filters: {};
    page: number;
    resource: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<any, {
        item: any;
        value: any;
        column: any;
    }> & {
        buttons: (_: {}) => any;
    };
});
export default _default;
