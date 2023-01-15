import * as vue from 'vue';
import { JSXComponent, PropType, VNodeChild, Prop } from 'vue';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

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

declare type VRatingItemSlot = {
    value: number;
    index: number;
    isFilled: boolean;
    isHovered: boolean;
    icon: IconValue;
    color?: string;
    props: Record<string, unknown>;
};
declare type VRatingItemLabelSlot = {
    value: number;
    index: number;
    label?: string;
};
declare const VRating: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            length: string | number;
            disabled: boolean;
            size: string | number;
            readonly: boolean;
            tag: string;
            density: Density;
            modelValue: string | number;
            ripple: boolean;
            clearable: boolean;
            hover: boolean;
            halfIncrements: boolean;
            itemAriaLabel: string;
            emptyIcon: IconValue;
            fullIcon: IconValue;
            itemLabelPosition: string;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            density: {
                type: vue.PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            name: StringConstructor;
            itemAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            clearable: BooleanConstructor;
            disabled: BooleanConstructor;
            emptyIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            fullIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            halfIncrements: BooleanConstructor;
            hover: BooleanConstructor;
            length: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            readonly: BooleanConstructor;
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            itemLabels: Prop<string[], string[]>;
            itemLabelPosition: {
                type: StringConstructor;
                default: string;
                validator: (v: any) => boolean;
            };
            ripple: BooleanConstructor;
        }, "$children" | "v-slots" | "v-slot:item" | "v-slot:item-label">>> & {
            "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "length" | "disabled" | "size" | "readonly" | "tag" | "density" | "modelValue" | "ripple" | "clearable" | "hover" | "halfIncrements" | "itemAriaLabel" | "emptyIcon" | "fullIcon" | "itemLabelPosition">;
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
        $emit: (event: "update:modelValue", value: string | number) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                default: string;
            };
            density: {
                type: vue.PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            name: StringConstructor;
            itemAriaLabel: {
                type: StringConstructor;
                default: string;
            };
            activeColor: StringConstructor;
            color: StringConstructor;
            clearable: BooleanConstructor;
            disabled: BooleanConstructor;
            emptyIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            fullIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            halfIncrements: BooleanConstructor;
            hover: BooleanConstructor;
            length: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            readonly: BooleanConstructor;
            modelValue: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            itemLabels: Prop<string[], string[]>;
            itemLabelPosition: {
                type: StringConstructor;
                default: string;
                validator: (v: any) => boolean;
            };
            ripple: BooleanConstructor;
        }, "$children" | "v-slots" | "v-slot:item" | "v-slot:item-label">>> & {
            "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: number | string) => boolean;
        }, "$children" | "v-slots" | "v-slot:item" | "v-slot:item-label">, string, {
            length: string | number;
            disabled: boolean;
            size: string | number;
            readonly: boolean;
            tag: string;
            density: Density;
            modelValue: string | number;
            ripple: boolean;
            clearable: boolean;
            hover: boolean;
            halfIncrements: boolean;
            itemAriaLabel: string;
            emptyIcon: IconValue;
            fullIcon: IconValue;
            itemLabelPosition: string;
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
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
        density: {
            type: vue.PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        name: StringConstructor;
        itemAriaLabel: {
            type: StringConstructor;
            default: string;
        };
        activeColor: StringConstructor;
        color: StringConstructor;
        clearable: BooleanConstructor;
        disabled: BooleanConstructor;
        emptyIcon: {
            type: vue.PropType<IconValue>;
            default: string;
        };
        fullIcon: {
            type: vue.PropType<IconValue>;
            default: string;
        };
        halfIncrements: BooleanConstructor;
        hover: BooleanConstructor;
        length: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        readonly: BooleanConstructor;
        modelValue: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        itemLabels: Prop<string[], string[]>;
        itemLabelPosition: {
            type: StringConstructor;
            default: string;
            validator: (v: any) => boolean;
        };
        ripple: BooleanConstructor;
    }, "$children" | "v-slots" | "v-slot:item" | "v-slot:item-label">>> & {
        "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    name: StringConstructor;
    itemAriaLabel: {
        type: StringConstructor;
        default: string;
    };
    activeColor: StringConstructor;
    color: StringConstructor;
    clearable: BooleanConstructor;
    disabled: BooleanConstructor;
    emptyIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    fullIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    halfIncrements: BooleanConstructor;
    hover: BooleanConstructor;
    length: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    readonly: BooleanConstructor;
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    itemLabels: Prop<string[], string[]>;
    itemLabelPosition: {
        type: StringConstructor;
        default: string;
        validator: (v: any) => boolean;
    };
    ripple: BooleanConstructor;
}, "$children" | "v-slots" | "v-slot:item" | "v-slot:item-label">>> & {
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: number | string) => boolean;
}, "$children" | "v-slots" | "v-slot:item" | "v-slot:item-label">, string, {
    length: string | number;
    disabled: boolean;
    size: string | number;
    readonly: boolean;
    tag: string;
    density: Density;
    modelValue: string | number;
    ripple: boolean;
    clearable: boolean;
    hover: boolean;
    halfIncrements: boolean;
    itemAriaLabel: string;
    emptyIcon: IconValue;
    fullIcon: IconValue;
    itemLabelPosition: string;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: SlotsToProps<{
        item: [VRatingItemSlot];
        'item-label': [VRatingItemLabelSlot];
    }>;
});
declare type VRating = InstanceType<typeof VRating>;

export { VRating };
