import * as vue from 'vue';
import { JSXComponent, PropType } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';
// @ts-ignore
import { RouteLocationRaw } from 'vue-router';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface LinkProps {
    href: string | undefined;
    replace: boolean | undefined;
    to: RouteLocationRaw | undefined;
    exact: boolean | undefined;
}

declare type BreadcrumbItem = string | (LinkProps & {
    text: string;
    disabled?: boolean;
});
declare const VBreadcrumbs: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            divider: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            tag: Omit<{
                type: StringConstructor;
                default: string;
            }, "type" | "default"> & {
                type: PropType<string>;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            activeClass: StringConstructor;
            activeColor: StringConstructor;
            bgColor: StringConstructor;
            color: StringConstructor;
            disabled: BooleanConstructor;
            divider: {
                type: StringConstructor;
                default: string;
            };
            icon: PropType<IconValue>;
            items: {
                type: PropType<BreadcrumbItem[]>;
                default: () => never[];
            };
        }, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:title" | "v-slot:divider">>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "disabled" | "tag" | "rounded" | "density" | "divider">;
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
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            tag: Omit<{
                type: StringConstructor;
                default: string;
            }, "type" | "default"> & {
                type: PropType<string>;
                default: string;
            };
            rounded: {
                type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
                default: undefined;
            };
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            activeClass: StringConstructor;
            activeColor: StringConstructor;
            bgColor: StringConstructor;
            color: StringConstructor;
            disabled: BooleanConstructor;
            divider: {
                type: StringConstructor;
                default: string;
            };
            icon: PropType<IconValue>;
            items: {
                type: PropType<BreadcrumbItem[]>;
                default: () => never[];
            };
        }, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:title" | "v-slot:divider">>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:title" | "v-slot:divider">, string, {
            disabled: boolean;
            tag: string;
            rounded: string | number | boolean;
            density: Density;
            divider: string;
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
        tag: Omit<{
            type: StringConstructor;
            default: string;
        }, "type" | "default"> & {
            type: PropType<string>;
            default: string;
        };
        rounded: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: undefined;
        };
        density: {
            type: PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        activeClass: StringConstructor;
        activeColor: StringConstructor;
        bgColor: StringConstructor;
        color: StringConstructor;
        disabled: BooleanConstructor;
        divider: {
            type: StringConstructor;
            default: string;
        };
        icon: PropType<IconValue>;
        items: {
            type: PropType<BreadcrumbItem[]>;
            default: () => never[];
        };
    }, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:title" | "v-slot:divider">>> & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: PropType<string>;
        default: string;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    bgColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    divider: {
        type: StringConstructor;
        default: string;
    };
    icon: PropType<IconValue>;
    items: {
        type: PropType<BreadcrumbItem[]>;
        default: () => never[];
    };
}, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:title" | "v-slot:divider">>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slots" | "v-slot:default" | "v-slot:prepend" | "v-slot:title" | "v-slot:divider">, string, {
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    divider: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        items?: T[] | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            prepend?: (() => vue.VNodeChild) | undefined;
            title?: ((args_0: {
                item: T;
                index: number;
            }) => vue.VNodeChild) | undefined;
            divider?: ((args_0: {
                item: T;
                index: number;
            }) => vue.VNodeChild) | undefined;
            default?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            prepend?: false | (() => vue.VNodeChild) | undefined;
            title?: false | ((args_0: {
                item: T;
                index: number;
            }) => vue.VNodeChild) | undefined;
            divider?: false | ((args_0: {
                item: T;
                index: number;
            }) => vue.VNodeChild) | undefined;
            default?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:prepend"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:title"?: false | ((args_0: {
            item: T;
            index: number;
        }) => vue.VNodeChild) | undefined;
        "v-slot:divider"?: false | ((args_0: {
            item: T;
            index: number;
        }) => vue.VNodeChild) | undefined;
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
    };
});
declare type VBreadcrumbs = InstanceType<typeof VBreadcrumbs>;

declare const VBreadcrumbsItem: vue.DefineComponent<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    active: BooleanConstructor;
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    title: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    active: BooleanConstructor;
    activeClass: StringConstructor;
    activeColor: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    title: StringConstructor;
}>>, {
    replace: boolean;
    exact: boolean;
    active: boolean;
    disabled: boolean;
    tag: string;
}>;
declare type VBreadcrumbsItem = InstanceType<typeof VBreadcrumbsItem>;

declare const VBreadcrumbsDivider: vue.DefineComponent<{
    divider: (StringConstructor | NumberConstructor)[];
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    divider: (StringConstructor | NumberConstructor)[];
}>>, {}>;

export { VBreadcrumbs, VBreadcrumbsDivider, VBreadcrumbsItem };
