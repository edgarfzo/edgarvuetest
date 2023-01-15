import * as vue from 'vue';
import { PropType } from 'vue';

declare type SelectItemKey = boolean | string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);

interface InternalItem<T = any> {
    title: string;
    value: any;
    props: {
        [key: string]: any;
        title: string;
        value: any;
    };
    children?: InternalItem<T>[];
    raw: T;
}

declare type DataTableCompareFunction<T = any> = (a: T, b: T) => number;
declare type DataTableHeader = {
    key: string;
    value?: SelectItemKey;
    title: string;
    colspan?: number;
    rowspan?: number;
    fixed?: boolean;
    align?: 'start' | 'end';
    width?: number;
    minWidth?: string;
    maxWidth?: string;
    sortable?: boolean;
    sort?: DataTableCompareFunction;
};
declare type DataTableItem = InternalItem & {
    type: 'item';
    columns: Record<string, unknown>;
};
declare type GroupHeaderItem = {
    type: 'group-header';
    id: string;
    key: string;
    value: string;
    depth: number;
    items: (GroupHeaderItem | DataTableItem)[];
};
declare type InternalDataTableItem = DataTableItem | GroupHeaderItem;

declare type SortItem = {
    key: string;
    order?: boolean | 'asc' | 'desc';
};

/**
 * - match without highlight
 * - single match (index), length already known
 * - single match (start, end)
 * - multiple matches (start, end), probably shouldn't overlap
 */
declare type FilterMatch = boolean | number | [number, number] | [number, number][];
declare type FilterFunction = (value: string, query: string, item?: any) => FilterMatch;
declare type FilterKeyFunctions = Record<string, FilterFunction>;
declare type FilterKeys = string | string[];
declare type FilterMode = 'some' | 'every' | 'union' | 'intersection';

declare const VDataTable: vue.DefineComponent<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sortBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<string[]>;
        default: () => never[];
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    headers: {
        type: vue.PropType<DataTableHeader[] | DataTableHeader[][]>;
        default: () => never[];
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: Omit<{
        type: vue.PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<SelectItemKey>;
        default: SelectItemKey;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    search: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any[]) => true;
    'update:page': (value: number) => true;
    'update:itemsPerPage': (value: number) => true;
    'update:sortBy': (value: any) => true;
    'update:options': (value: any) => true;
    'update:groupBy': (value: any) => true;
    'update:expanded': (value: any) => true;
    'click:row': (event: Event, value: {
        item: DataTableItem;
    }) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sortBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<string[]>;
        default: () => never[];
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    headers: {
        type: vue.PropType<DataTableHeader[] | DataTableHeader[][]>;
        default: () => never[];
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: Omit<{
        type: vue.PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<SelectItemKey>;
        default: SelectItemKey;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    search: StringConstructor;
}>> & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onClick:row"?: ((event: Event, value: {
        item: DataTableItem;
    }) => any) | undefined;
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((value: number) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
}, {
    expanded: string[];
    page: string | number;
    headers: DataTableHeader[] | DataTableHeader[][];
    noDataText: string;
    sortBy: SortItem[];
    items: any[];
    modelValue: any[];
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    returnObject: boolean;
    hideNoData: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    fixedHeader: boolean;
    fixedFooter: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemsPerPage: string | number;
}>;
declare type VDataTable = InstanceType<typeof VDataTable>;

declare const VDataTableRows: vue.DefineComponent<{
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<InternalDataTableItem[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'click:row': (event: Event, value: {
        item: DataTableItem;
    }) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    hideNoData: BooleanConstructor;
    items: {
        type: PropType<InternalDataTableItem[]>;
        default: () => never[];
    };
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    rowHeight: NumberConstructor;
}>> & {
    "onClick:row"?: ((event: Event, value: {
        item: DataTableItem;
    }) => any) | undefined;
}, {
    noDataText: string;
    loadingText: string;
    items: InternalDataTableItem[];
    hideNoData: boolean;
}>;
declare type VDataTableRows = InstanceType<typeof VDataTableRows>;

declare const VDataTableRow: vue.DefineComponent<{
    item: PropType<DataTableItem>;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    item: PropType<DataTableItem>;
}>>, {}>;
declare type VDataTableRow = InstanceType<typeof VDataTableRow>;

declare const VDataTableVirtual: vue.DefineComponent<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    visibleItems: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sortBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: Omit<{
        type: vue.PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<SelectItemKey>;
        default: SelectItemKey;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<DataTableHeader[] | DataTableHeader[][]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<string[]>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    search: StringConstructor;
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any[]) => true;
    'update:sortBy': (value: any) => true;
    'update:options': (value: any) => true;
    'update:groupBy': (value: any) => true;
    'update:expanded': (value: any) => true;
    'click:row': (event: Event, value: {
        item: DataTableItem;
    }) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    customFilter: vue.PropType<FilterFunction>;
    customKeyFilter: vue.PropType<FilterKeyFunctions>;
    filterKeys: vue.PropType<FilterKeys>;
    filterMode: {
        type: vue.PropType<FilterMode>;
        default: string;
    };
    noFilter: BooleanConstructor;
    visibleItems: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sortBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: Omit<{
        type: vue.PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<SelectItemKey>;
        default: SelectItemKey;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<DataTableHeader[] | DataTableHeader[][]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<string[]>;
        default: () => never[];
    };
    groupBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    search: StringConstructor;
}>> & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((value: any) => any) | undefined;
    "onUpdate:expanded"?: ((value: any) => any) | undefined;
    "onClick:row"?: ((event: Event, value: {
        item: DataTableItem;
    }) => any) | undefined;
    "onUpdate:options"?: ((value: any) => any) | undefined;
    "onUpdate:groupBy"?: ((value: any) => any) | undefined;
}, {
    expanded: string[];
    headers: DataTableHeader[] | DataTableHeader[][];
    noDataText: string;
    sortBy: SortItem[];
    items: any[];
    modelValue: any[];
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    returnObject: boolean;
    hideNoData: boolean;
    filterMode: FilterMode;
    noFilter: boolean;
    fixedHeader: boolean;
    fixedFooter: boolean;
    multiSort: boolean;
    mustSort: boolean;
    groupBy: SortItem[];
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    visibleItems: string | number;
    itemHeight: string | number;
}>;
declare type VDataTableVirtual = InstanceType<typeof VDataTableVirtual>;

declare const VDataTableServer: vue.DefineComponent<{
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sortBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: Omit<{
        type: vue.PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<SelectItemKey>;
        default: SelectItemKey;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<DataTableHeader[] | DataTableHeader[][]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<string[]>;
        default: () => never[];
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    color: StringConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    itemsLength: (StringConstructor | NumberConstructor)[];
}, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any[]) => true;
    'update:page': (page: number) => true;
    'update:itemsPerPage': (page: number) => true;
    'update:sortBy': (sortBy: any) => true;
    'update:options': (options: any) => true;
    'update:expanded': (options: any) => true;
    'click:row': (event: Event, value: {
        item: DataTableItem;
    }) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    page: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemsPerPage: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    sortBy: {
        type: vue.PropType<SortItem[]>;
        default: () => never[];
    };
    multiSort: BooleanConstructor;
    mustSort: BooleanConstructor;
    showSelect: BooleanConstructor;
    modelValue: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    items: {
        type: vue.PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemValue: Omit<{
        type: vue.PropType<SelectItemKey>;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<SelectItemKey>;
        default: SelectItemKey;
    };
    itemChildren: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: vue.PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    headers: {
        type: vue.PropType<DataTableHeader[] | DataTableHeader[][]>;
        default: () => never[];
    };
    expandOnClick: BooleanConstructor;
    showExpand: BooleanConstructor;
    expanded: {
        type: vue.PropType<string[]>;
        default: () => never[];
    };
    hideNoData: BooleanConstructor;
    noDataText: {
        type: StringConstructor;
        default: string;
    };
    height: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    fixedHeader: BooleanConstructor;
    fixedFooter: BooleanConstructor;
    color: StringConstructor;
    loading: (StringConstructor | BooleanConstructor)[];
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    itemsLength: (StringConstructor | NumberConstructor)[];
}>> & {
    "onUpdate:modelValue"?: ((value: any[]) => any) | undefined;
    "onUpdate:sortBy"?: ((sortBy: any) => any) | undefined;
    "onUpdate:expanded"?: ((options: any) => any) | undefined;
    "onClick:row"?: ((event: Event, value: {
        item: DataTableItem;
    }) => any) | undefined;
    "onUpdate:page"?: ((page: number) => any) | undefined;
    "onUpdate:itemsPerPage"?: ((page: number) => any) | undefined;
    "onUpdate:options"?: ((options: any) => any) | undefined;
}, {
    expanded: string[];
    page: string | number;
    headers: DataTableHeader[] | DataTableHeader[][];
    noDataText: string;
    loadingText: string;
    sortBy: SortItem[];
    items: any[];
    modelValue: any[];
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    returnObject: boolean;
    hideNoData: boolean;
    fixedHeader: boolean;
    fixedFooter: boolean;
    multiSort: boolean;
    mustSort: boolean;
    showSelect: boolean;
    expandOnClick: boolean;
    showExpand: boolean;
    itemsPerPage: string | number;
}>;
declare type VDataTableServer = InstanceType<typeof VDataTableServer>;

export { VDataTable, VDataTableRow, VDataTableRows, VDataTableServer, VDataTableVirtual };
