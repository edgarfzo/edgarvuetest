import * as vue from 'vue';
import { VNodeChild, ExtractPropTypes, PropType } from 'vue';

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

declare type Density = null | 'prominent' | 'default' | 'comfortable' | 'compact';
declare type VToolbarSlots = MakeSlots<{
    default: [];
    image: [];
    prepend: [];
    append: [];
    title: [];
    extension: [];
}>;
declare const VToolbar: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            absolute: boolean;
            height: string | number;
            tag: string;
            collapse: boolean;
            rounded: string | number | boolean;
            density: Density;
            extended: boolean;
            extensionHeight: string | number;
            floating: boolean;
        }> & Omit<Readonly<ExtractPropTypes<Omit<{
            theme: StringConstructor;
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
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            absolute: BooleanConstructor;
            collapse: BooleanConstructor;
            color: StringConstructor;
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            extended: BooleanConstructor;
            extensionHeight: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            flat: BooleanConstructor;
            floating: BooleanConstructor;
            height: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            image: StringConstructor;
            title: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "flat" | "absolute" | "height" | "tag" | "collapse" | "rounded" | "density" | "extended" | "extensionHeight" | "floating">;
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
            theme: StringConstructor;
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
            elevation: {
                type: (StringConstructor | NumberConstructor)[];
                validator(v: any): boolean;
            };
            border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            absolute: BooleanConstructor;
            collapse: BooleanConstructor;
            color: StringConstructor;
            density: {
                type: PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            extended: BooleanConstructor;
            extensionHeight: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            flat: BooleanConstructor;
            floating: BooleanConstructor;
            height: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            image: StringConstructor;
            title: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>>, {
            contentHeight: vue.ComputedRef<number>;
            extensionHeight: vue.ComputedRef<number>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">, string, {
            flat: boolean;
            absolute: boolean;
            height: string | number;
            tag: string;
            collapse: boolean;
            rounded: string | number | boolean;
            density: Density;
            extended: boolean;
            extensionHeight: string | number;
            floating: boolean;
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
        theme: StringConstructor;
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
        elevation: {
            type: (StringConstructor | NumberConstructor)[];
            validator(v: any): boolean;
        };
        border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        absolute: BooleanConstructor;
        collapse: BooleanConstructor;
        color: StringConstructor;
        density: {
            type: PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        extended: BooleanConstructor;
        extensionHeight: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        flat: BooleanConstructor;
        floating: BooleanConstructor;
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        image: StringConstructor;
        title: StringConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>> & vue.ShallowUnwrapRef<{
        contentHeight: vue.ComputedRef<number>;
        extensionHeight: vue.ComputedRef<number>;
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
    theme: StringConstructor;
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
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    absolute: BooleanConstructor;
    collapse: BooleanConstructor;
    color: StringConstructor;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    extended: BooleanConstructor;
    extensionHeight: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    flat: BooleanConstructor;
    floating: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    image: StringConstructor;
    title: StringConstructor;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>>, {
    contentHeight: vue.ComputedRef<number>;
    extensionHeight: vue.ComputedRef<number>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">, string, {
    flat: boolean;
    absolute: boolean;
    height: string | number;
    tag: string;
    collapse: boolean;
    rounded: string | number | boolean;
    density: Density;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<VToolbarSlots>;
});
declare type VToolbar = InstanceType<typeof VToolbar>;

declare const VToolbarTitle: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            tag: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            text: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:text">>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "tag">;
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
            tag: {
                type: StringConstructor;
                default: string;
            };
            text: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:text">>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "v-slot:text">, string, {
            tag: string;
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
        tag: {
            type: StringConstructor;
            default: string;
        };
        text: StringConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:text">>> & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    text: StringConstructor;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:text">>>, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<Record<string, any>, "$children" | "v-slots" | "v-slot:default" | "v-slot:text">, string, {
    tag: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<{
        default: [];
        text: [];
    }>;
});
declare type VToolbarTitle = InstanceType<typeof VToolbarTitle>;

declare const VToolbarItems: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
}>>, {
    variant: string;
}>;
declare type VToolbarItems = InstanceType<typeof VToolbarItems>;

export { VToolbar, VToolbarItems, VToolbarTitle };
