import * as vue from 'vue';
import { VNodeChild, PropType, JSXComponent } from 'vue';

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

declare const VAppBar: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            flat: boolean;
            absolute: boolean;
            location: "top" | "bottom";
            height: string | number;
            order: string | number;
            tag: string;
            collapse: boolean;
            rounded: string | number | boolean;
            density: Density;
            extended: boolean;
            extensionHeight: string | number;
            floating: boolean;
            modelValue: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            height: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: {
                type: StringConstructor;
            };
            order: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            absolute: BooleanConstructor;
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
            image: StringConstructor;
            title: StringConstructor;
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            location: {
                type: PropType<"top" | "bottom">;
                default: string;
                validator: (value: any) => boolean;
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "flat" | "absolute" | "location" | "height" | "order" | "tag" | "collapse" | "rounded" | "density" | "extended" | "extensionHeight" | "floating" | "modelValue">;
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
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            height: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            name: {
                type: StringConstructor;
            };
            order: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            absolute: BooleanConstructor;
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
            image: StringConstructor;
            title: StringConstructor;
            modelValue: {
                type: BooleanConstructor;
                default: boolean;
            };
            location: {
                type: PropType<"top" | "bottom">;
                default: string;
                validator: (value: any) => boolean;
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: boolean) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">, string, {
            flat: boolean;
            absolute: boolean;
            location: "top" | "bottom";
            height: string | number;
            order: string | number;
            tag: string;
            collapse: boolean;
            rounded: string | number | boolean;
            density: Density;
            extended: boolean;
            extensionHeight: string | number;
            floating: boolean;
            modelValue: boolean;
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
        height: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        name: {
            type: StringConstructor;
        };
        order: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        absolute: BooleanConstructor;
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
        image: StringConstructor;
        title: StringConstructor;
        modelValue: {
            type: BooleanConstructor;
            default: boolean;
        };
        location: {
            type: PropType<"top" | "bottom">;
            default: string;
            validator: (value: any) => boolean;
        };
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>> & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: {
        type: StringConstructor;
    };
    order: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    absolute: BooleanConstructor;
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
    image: StringConstructor;
    title: StringConstructor;
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    location: {
        type: PropType<"top" | "bottom">;
        default: string;
        validator: (value: any) => boolean;
    };
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: boolean) => boolean;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:image" | "v-slot:prepend" | "v-slot:append" | "v-slot:title" | "v-slot:extension">, string, {
    flat: boolean;
    absolute: boolean;
    location: "top" | "bottom";
    height: string | number;
    order: string | number;
    tag: string;
    collapse: boolean;
    rounded: string | number | boolean;
    density: Density;
    extended: boolean;
    extensionHeight: string | number;
    floating: boolean;
    modelValue: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<VToolbarSlots>;
});
declare type VAppBar = InstanceType<typeof VAppBar>;

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VAppBarNavIcon: vue.DefineComponent<{
    icon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
}>>, {
    icon: IconValue;
}>;
declare type VAppBarNavIcon = InstanceType<typeof VAppBarNavIcon>;

declare const VAppBarTitle: vue.DefineComponent<any, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<any>, {} | {
    [x: string]: any;
}>;
declare type VAppBarTitle = InstanceType<typeof VAppBarTitle>;

export { VAppBar, VAppBarNavIcon, VAppBarTitle };
