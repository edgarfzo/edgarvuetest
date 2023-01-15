import * as vue from 'vue';

interface VVirtualScrollSlot<T> {
    item: T;
    index: number;
}
declare const VVirtualScroll: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            visibleItems: string | number;
            itemKey: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            items: {
                type: ArrayConstructor;
                default: () => never[];
            };
            itemKey: {
                type: StringConstructor;
                default: string;
            };
            itemHeight: (StringConstructor | NumberConstructor)[];
            visibleItems: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
        }, "$children" | "items" | "v-slots" | "v-slot:default">>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "visibleItems" | "itemKey">;
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
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            items: {
                type: ArrayConstructor;
                default: () => never[];
            };
            itemKey: {
                type: StringConstructor;
                default: string;
            };
            itemHeight: (StringConstructor | NumberConstructor)[];
            visibleItems: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
        }, "$children" | "items" | "v-slots" | "v-slot:default">>>, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slots" | "v-slot:default">, string, {
            visibleItems: string | number;
            itemKey: string;
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
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        items: {
            type: ArrayConstructor;
            default: () => never[];
        };
        itemKey: {
            type: StringConstructor;
            default: string;
        };
        itemHeight: (StringConstructor | NumberConstructor)[];
        visibleItems: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    }, "$children" | "items" | "v-slots" | "v-slot:default">>> & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    items: {
        type: ArrayConstructor;
        default: () => never[];
    };
    itemKey: {
        type: StringConstructor;
        default: string;
    };
    itemHeight: (StringConstructor | NumberConstructor)[];
    visibleItems: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, "$children" | "items" | "v-slots" | "v-slot:default">>>, void, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "items" | "v-slots" | "v-slot:default">, string, {
    visibleItems: string | number;
    itemKey: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        items: readonly T[];
    } & {
        $children?: vue.VNodeChild | {
            default?: ((args_0: VVirtualScrollSlot<T>) => vue.VNodeChild) | undefined;
        } | ((args_0: VVirtualScrollSlot<T>) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((args_0: VVirtualScrollSlot<T>) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((args_0: VVirtualScrollSlot<T>) => vue.VNodeChild) | undefined;
    };
});
declare type VVirtualScroll = InstanceType<typeof VVirtualScroll>;

export { VVirtualScroll };
