import * as vue from 'vue';
import { VNodeChild, PropType, JSXComponent, ExtractPropTypes } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';

declare type SlotsToProps<T extends Record<string, any>> = T extends Record<string, Slot> ? ({
    $children?: (VNodeChild | (keyof T extends 'default' ? T['default'] : {}) | {
        [K in keyof T]?: T[K];
    });
    'v-slots'?: {
        [K in keyof T]?: T[K] | false;
    };
} & {
    [K in keyof T as `v-slot:${K & string}`]?: T[K] | false;
}) : T extends Record<string, any[]> ? SlotsToProps<MakeSlots<T>> : never;
declare type Slot<T extends any[] = any[]> = (...args: T) => VNodeChild;
declare type MakeSlots<T extends Record<string, any[]>> = {
    [K in keyof T]?: Slot<T[K]>;
};

declare type SelectItemKey = boolean | string | (string | number)[] | ((item: Record<string, any>, fallback?: any) => any);
declare type EventProp<T = (...args: any[]) => any> = T | T[];
declare const EventProp: PropType<EventProp<(...args: any[]) => any>>;

declare type SelectStrategyFn = (data: {
    id: unknown;
    value: boolean;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Map<unknown, 'on' | 'off' | 'indeterminate'>;

declare type OpenStrategyFn = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown>;
declare type OpenSelectStrategyFn = (data: {
    id: unknown;
    value: boolean;
    opened: Set<unknown>;
    selected: Map<unknown, 'on' | 'off' | 'indeterminate'>;
    children: Map<unknown, unknown[]>;
    parents: Map<unknown, unknown>;
    event?: Event;
}) => Set<unknown> | null;
declare type OpenStrategy = {
    open: OpenStrategyFn;
    select: OpenSelectStrategyFn;
};

declare type SelectStrategy = 'single-leaf' | 'leaf' | 'independent' | 'single-independent' | 'classic' | SelectStrategyFn;
declare type OpenStrategyProp = 'single' | 'multiple' | 'list' | OpenStrategy;

declare type Density = null | 'default' | 'comfortable' | 'compact';

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

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare type ListGroupActivatorSlot = {
    props: {
        onClick: (e: Event) => void;
        class: string;
    };
};
declare const VListGroup: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
            subgroup: boolean;
            collapseIcon: IconValue;
            expandIcon: IconValue;
            fluid: boolean;
        }> & Omit<Readonly<ExtractPropTypes<Omit<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            collapseIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            expandIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            prependIcon: vue.PropType<IconValue>;
            appendIcon: vue.PropType<IconValue>;
            fluid: BooleanConstructor;
            subgroup: BooleanConstructor;
            value: null;
            title: StringConstructor;
        }, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "tag" | "subgroup" | "collapseIcon" | "expandIcon" | "fluid">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            collapseIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            expandIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            prependIcon: vue.PropType<IconValue>;
            appendIcon: vue.PropType<IconValue>;
            fluid: BooleanConstructor;
            subgroup: BooleanConstructor;
            value: null;
            title: StringConstructor;
        }, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:activator">>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:activator">, string, {
            tag: string;
            subgroup: boolean;
            collapseIcon: IconValue;
            expandIcon: IconValue;
            fluid: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<ExtractPropTypes<Omit<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        activeColor: StringConstructor;
        color: StringConstructor;
        collapseIcon: {
            type: vue.PropType<IconValue>;
            default: string;
        };
        expandIcon: {
            type: vue.PropType<IconValue>;
            default: string;
        };
        prependIcon: vue.PropType<IconValue>;
        appendIcon: vue.PropType<IconValue>;
        fluid: BooleanConstructor;
        subgroup: BooleanConstructor;
        value: null;
        title: StringConstructor;
    }, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    collapseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    expandIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prependIcon: vue.PropType<IconValue>;
    appendIcon: vue.PropType<IconValue>;
    fluid: BooleanConstructor;
    subgroup: BooleanConstructor;
    value: null;
    title: StringConstructor;
}, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:activator">>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:activator">, string, {
    tag: string;
    subgroup: boolean;
    collapseIcon: IconValue;
    expandIcon: IconValue;
    fluid: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T extends InternalListItem>() => {
    $props: {
        items?: T[] | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            activator?: ((args_0: ListGroupActivatorSlot) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            activator?: false | ((args_0: ListGroupActivatorSlot) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:activator"?: false | ((args_0: ListGroupActivatorSlot) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    };
});
declare type VListGroup = InstanceType<typeof VListGroup>;

interface InternalListItem extends InternalItem {
    type?: 'item' | 'subheader' | 'divider';
}
declare const VList: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            nav: boolean;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            rounded: string | number | boolean;
            density: Density;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            selectStrategy: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            openStrategy: OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {});
            lines: false | "one" | "two" | "three";
            itemTitle: SelectItemKey;
            itemValue: SelectItemKey;
            itemChildren: SelectItemKey;
            itemProps: SelectItemKey;
            returnObject: boolean;
            itemType: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            items: {
                type: PropType<any[]>;
                default: () => never[];
            };
            itemTitle: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            itemValue: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            itemChildren: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            itemProps: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            returnObject: BooleanConstructor;
            itemType: {
                type: StringConstructor;
                default: string;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            selectStrategy: {
                type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
                default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            };
            openStrategy: {
                type: PropType<OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {})>;
                default: OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {});
            };
            opened: PropType<unknown[]>;
            selected: PropType<unknown[]>;
            mandatory: BooleanConstructor;
            activeColor: StringConstructor;
            activeClass: StringConstructor;
            bgColor: StringConstructor;
            disabled: BooleanConstructor;
            lines: {
                type: PropType<false | "one" | "two" | "three">;
                default: string;
            };
            nav: BooleanConstructor;
        }, "$children" | "items" | "v-slots" | "v-slot:header" | "v-slot:item" | "v-slot:subheader">>> & {
            "onUpdate:selected"?: ((val: unknown[]) => any) | undefined;
            "onUpdate:opened"?: ((val: unknown[]) => any) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "nav" | "disabled" | "tag" | "mandatory" | "rounded" | "density" | "variant" | "selectStrategy" | "openStrategy" | "lines" | "itemTitle" | "itemValue" | "itemChildren" | "itemProps" | "returnObject" | "itemType">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "click:open", value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) & ((event: "click:select", value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => void) & ((event: "update:selected", val: unknown[]) => void) & ((event: "update:opened", val: unknown[]) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            items: {
                type: PropType<any[]>;
                default: () => never[];
            };
            itemTitle: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            itemValue: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            itemChildren: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            itemProps: {
                type: PropType<SelectItemKey>;
                default: string;
            };
            returnObject: BooleanConstructor;
            itemType: {
                type: StringConstructor;
                default: string;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            selectStrategy: {
                type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
                default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            };
            openStrategy: {
                type: PropType<OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {})>;
                default: OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {});
            };
            opened: PropType<unknown[]>;
            selected: PropType<unknown[]>;
            mandatory: BooleanConstructor;
            activeColor: StringConstructor;
            activeClass: StringConstructor;
            bgColor: StringConstructor;
            disabled: BooleanConstructor;
            lines: {
                type: PropType<false | "one" | "two" | "three">;
                default: string;
            };
            nav: BooleanConstructor;
        }, "$children" | "items" | "v-slots" | "v-slot:header" | "v-slot:item" | "v-slot:subheader">>> & {
            "onUpdate:selected"?: ((val: unknown[]) => any) | undefined;
            "onUpdate:opened"?: ((val: unknown[]) => any) | undefined;
            "onClick:open"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
            "onClick:select"?: ((value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => any) | undefined;
        }, {
            open: (id: unknown, value: boolean, event?: Event | undefined) => void;
            select: (id: unknown, value: boolean, event?: Event | undefined) => void;
            focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:selected': (val: unknown[]) => boolean;
            'update:opened': (val: unknown[]) => boolean;
            'click:open': (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => boolean;
            'click:select': (value: {
                id: unknown;
                value: boolean;
                path: unknown[];
            }) => boolean;
        }, "$children" | "items" | "v-slots" | "v-slot:header" | "v-slot:item" | "v-slot:subheader">, string, {
            nav: boolean;
            disabled: boolean;
            tag: string;
            mandatory: boolean;
            rounded: string | number | boolean;
            density: Density;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            selectStrategy: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
            openStrategy: OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {});
            lines: false | "one" | "two" | "three";
            itemTitle: SelectItemKey;
            itemValue: SelectItemKey;
            itemChildren: SelectItemKey;
            itemProps: SelectItemKey;
            returnObject: boolean;
            itemType: string;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
        color: StringConstructor;
        variant: Omit<{
            type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            default: string;
            validator: (v: any) => boolean;
        }, "type" | "default"> & {
            type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        };
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        rounded: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        items: {
            type: PropType<any[]>;
            default: () => never[];
        };
        itemTitle: {
            type: PropType<SelectItemKey>;
            default: string;
        };
        itemValue: {
            type: PropType<SelectItemKey>;
            default: string;
        };
        itemChildren: {
            type: PropType<SelectItemKey>;
            default: string;
        };
        itemProps: {
            type: PropType<SelectItemKey>;
            default: string;
        };
        returnObject: BooleanConstructor;
        itemType: {
            type: StringConstructor;
            default: string;
        };
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        density: {
            type: PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        selectStrategy: {
            type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
            default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
        };
        openStrategy: {
            type: PropType<OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {})>;
            default: OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {});
        };
        opened: PropType<unknown[]>;
        selected: PropType<unknown[]>;
        mandatory: BooleanConstructor;
        activeColor: StringConstructor;
        activeClass: StringConstructor;
        bgColor: StringConstructor;
        disabled: BooleanConstructor;
        lines: {
            type: PropType<false | "one" | "two" | "three">;
            default: string;
        };
        nav: BooleanConstructor;
    }, "$children" | "items" | "v-slots" | "v-slot:header" | "v-slot:item" | "v-slot:subheader">>> & {
        "onUpdate:selected"?: ((val: unknown[]) => any) | undefined;
        "onUpdate:opened"?: ((val: unknown[]) => any) | undefined;
        "onClick:open"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
        "onClick:select"?: ((value: {
            id: unknown;
            value: boolean;
            path: unknown[];
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        open: (id: unknown, value: boolean, event?: Event | undefined) => void;
        select: (id: unknown, value: boolean, event?: Event | undefined) => void;
        focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    items: {
        type: PropType<any[]>;
        default: () => never[];
    };
    itemTitle: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemValue: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemChildren: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    itemProps: {
        type: PropType<SelectItemKey>;
        default: string;
    };
    returnObject: BooleanConstructor;
    itemType: {
        type: StringConstructor;
        default: string;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    selectStrategy: {
        type: PropType<SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {})>;
        default: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
    };
    openStrategy: {
        type: PropType<OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {})>;
        default: OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {});
    };
    opened: PropType<unknown[]>;
    selected: PropType<unknown[]>;
    mandatory: BooleanConstructor;
    activeColor: StringConstructor;
    activeClass: StringConstructor;
    bgColor: StringConstructor;
    disabled: BooleanConstructor;
    lines: {
        type: PropType<false | "one" | "two" | "three">;
        default: string;
    };
    nav: BooleanConstructor;
}, "$children" | "items" | "v-slots" | "v-slot:header" | "v-slot:item" | "v-slot:subheader">>> & {
    "onUpdate:selected"?: ((val: unknown[]) => any) | undefined;
    "onUpdate:opened"?: ((val: unknown[]) => any) | undefined;
    "onClick:open"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
    "onClick:select"?: ((value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => any) | undefined;
}, {
    open: (id: unknown, value: boolean, event?: Event | undefined) => void;
    select: (id: unknown, value: boolean, event?: Event | undefined) => void;
    focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:selected': (val: unknown[]) => boolean;
    'update:opened': (val: unknown[]) => boolean;
    'click:open': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => boolean;
    'click:select': (value: {
        id: unknown;
        value: boolean;
        path: unknown[];
    }) => boolean;
}, "$children" | "items" | "v-slots" | "v-slot:header" | "v-slot:item" | "v-slot:subheader">, string, {
    nav: boolean;
    disabled: boolean;
    tag: string;
    mandatory: boolean;
    rounded: string | number | boolean;
    density: Density;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    selectStrategy: SelectStrategy | ("classic" & {}) | ("single-leaf" & {}) | ("leaf" & {}) | ("independent" & {}) | ("single-independent" & {});
    openStrategy: OpenStrategyProp | ("multiple" & {}) | ("single" & {}) | ("list" & {});
    lines: false | "one" | "two" | "three";
    itemTitle: SelectItemKey;
    itemValue: SelectItemKey;
    itemChildren: SelectItemKey;
    itemProps: SelectItemKey;
    returnObject: boolean;
    itemType: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        items?: T[] | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            subheader?: (() => vue.VNodeChild) | undefined;
            header?: ((args_0: ListGroupActivatorSlot) => vue.VNodeChild) | undefined;
            item?: ((args_0: T) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            subheader?: false | (() => vue.VNodeChild) | undefined;
            header?: false | ((args_0: ListGroupActivatorSlot) => vue.VNodeChild) | undefined;
            item?: false | ((args_0: T) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:subheader"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:header"?: false | ((args_0: ListGroupActivatorSlot) => vue.VNodeChild) | undefined;
        "v-slot:item"?: false | ((args_0: T) => vue.VNodeChild) | undefined;
    };
});
declare type VList = InstanceType<typeof VList>;

declare const VListImg: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;
declare type VListImg = InstanceType<typeof VListImg>;

declare type ListItemSlot = {
    isActive: boolean;
    activate: (value: boolean) => void;
    isSelected: boolean;
    select: (value: boolean) => void;
};
declare type ListItemTitleSlot = {
    title?: string;
};
declare type ListItemSubtitleSlot = {
    subtitle?: string;
};
declare const VListItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            replace: boolean;
            link: boolean;
            exact: boolean;
            active: boolean;
            nav: boolean;
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            href: StringConstructor;
            replace: BooleanConstructor;
            to: PropType<vue_router.RouteLocationRaw>;
            exact: BooleanConstructor;
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            active: {
                type: BooleanConstructor;
                default: undefined;
            };
            activeClass: StringConstructor;
            activeColor: StringConstructor;
            appendAvatar: StringConstructor;
            appendIcon: PropType<IconValue>;
            disabled: BooleanConstructor;
            lines: PropType<"one" | "two" | "three">;
            link: {
                type: BooleanConstructor;
                default: undefined;
            };
            nav: BooleanConstructor;
            prependAvatar: StringConstructor;
            prependIcon: PropType<IconValue>;
            subtitle: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            title: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            value: null;
            onClick: PropType<EventProp<(...args: any[]) => any>>;
            onClickOnce: PropType<EventProp<(...args: any[]) => any>>;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle">>> & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "replace" | "link" | "exact" | "active" | "nav" | "disabled" | "tag" | "rounded" | "density" | "variant">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: vue.Slot | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "click", e: MouseEvent | KeyboardEvent) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            color: StringConstructor;
            variant: Omit<{
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: string;
                validator: (v: any) => boolean;
            }, "type" | "default"> & {
                type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
                default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
            };
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            href: StringConstructor;
            replace: BooleanConstructor;
            to: PropType<vue_router.RouteLocationRaw>;
            exact: BooleanConstructor;
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            active: {
                type: BooleanConstructor;
                default: undefined;
            };
            activeClass: StringConstructor;
            activeColor: StringConstructor;
            appendAvatar: StringConstructor;
            appendIcon: PropType<IconValue>;
            disabled: BooleanConstructor;
            lines: PropType<"one" | "two" | "three">;
            link: {
                type: BooleanConstructor;
                default: undefined;
            };
            nav: BooleanConstructor;
            prependAvatar: StringConstructor;
            prependIcon: PropType<IconValue>;
            subtitle: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            title: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            value: null;
            onClick: PropType<EventProp<(...args: any[]) => any>>;
            onClickOnce: PropType<EventProp<(...args: any[]) => any>>;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle">>> & {
            onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            click: (e: MouseEvent | KeyboardEvent) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle">, string, {
            replace: boolean;
            link: boolean;
            exact: boolean;
            active: boolean;
            nav: boolean;
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
        color: StringConstructor;
        variant: Omit<{
            type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            default: string;
            validator: (v: any) => boolean;
        }, "type" | "default"> & {
            type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
            default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
        };
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        href: StringConstructor;
        replace: BooleanConstructor;
        to: PropType<vue_router.RouteLocationRaw>;
        exact: BooleanConstructor;
        rounded: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        density: {
            type: PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        active: {
            type: BooleanConstructor;
            default: undefined;
        };
        activeClass: StringConstructor;
        activeColor: StringConstructor;
        appendAvatar: StringConstructor;
        appendIcon: PropType<IconValue>;
        disabled: BooleanConstructor;
        lines: PropType<"one" | "two" | "three">;
        link: {
            type: BooleanConstructor;
            default: undefined;
        };
        nav: BooleanConstructor;
        prependAvatar: StringConstructor;
        prependIcon: PropType<IconValue>;
        subtitle: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        title: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        value: null;
        onClick: PropType<EventProp<(...args: any[]) => any>>;
        onClickOnce: PropType<EventProp<(...args: any[]) => any>>;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle">>> & {
        onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    color: StringConstructor;
    variant: Omit<{
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    };
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    active: {
        type: BooleanConstructor;
        default: undefined;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: PropType<IconValue>;
    disabled: BooleanConstructor;
    lines: PropType<"one" | "two" | "three">;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    nav: BooleanConstructor;
    prependAvatar: StringConstructor;
    prependIcon: PropType<IconValue>;
    subtitle: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    title: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    value: null;
    onClick: PropType<EventProp<(...args: any[]) => any>>;
    onClickOnce: PropType<EventProp<(...args: any[]) => any>>;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle">>> & {
    onClick?: ((e: MouseEvent | KeyboardEvent) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    click: (e: MouseEvent | KeyboardEvent) => boolean;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:subtitle">, string, {
    replace: boolean;
    link: boolean;
    exact: boolean;
    active: boolean;
    nav: boolean;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<{
        prepend: [ListItemSlot];
        append: [ListItemSlot];
        default: [ListItemSlot];
        title: [ListItemTitleSlot];
        subtitle: [ListItemSubtitleSlot];
    }>;
});
declare type VListItem = InstanceType<typeof VListItem>;

declare const VListItemAction: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}>>, {
    end: boolean;
    start: boolean;
    tag: string;
}>;
declare type VListItemAction = InstanceType<typeof VListItemAction>;

declare const VListItemMedia: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    start: BooleanConstructor;
    end: BooleanConstructor;
}>>, {
    end: boolean;
    start: boolean;
    tag: string;
}>;
declare type VListItemMedia = InstanceType<typeof VListItemMedia>;

declare const VListItemSubtitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;
declare type VListItemSubtitle = InstanceType<typeof VListItemSubtitle>;

declare const VListItemTitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;
declare type VListItemTitle = InstanceType<typeof VListItemTitle>;

declare const VListSubheader: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    title: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    color: StringConstructor;
    inset: BooleanConstructor;
    sticky: BooleanConstructor;
    title: StringConstructor;
}>>, {
    inset: boolean;
    tag: string;
    sticky: boolean;
}>;
declare type VListSubheader = InstanceType<typeof VListSubheader>;

export { VList, VListGroup, VListImg, VListItem, VListItemAction, VListItemMedia, VListItemSubtitle, VListItemTitle, VListSubheader };
