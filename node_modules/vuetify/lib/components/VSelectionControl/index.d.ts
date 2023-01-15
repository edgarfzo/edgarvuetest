import * as vue from 'vue';
import { JSXComponent, PropType, ExtractPropTypes, Ref, nextTick, WritableComputedRef, CSSProperties } from 'vue';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare function deepEqual(a: any, b: any): boolean;

declare type SelectionControlSlot = {
    model: WritableComputedRef<any>;
    textColorClasses: Ref<string[]>;
    textColorStyles: Ref<CSSProperties>;
    props: {
        onBlur: (e: Event) => void;
        onFocus: (e: FocusEvent) => void;
        id: string;
    };
};
declare const VSelectionControl: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            inline: boolean;
            error: boolean;
            disabled: boolean;
            multiple: boolean | null;
            readonly: boolean;
            density: Density;
            ripple: boolean;
            valueComparator: typeof deepEqual;
        }> & Omit<Readonly<ExtractPropTypes<Omit<{
            density: {
                type: vue.PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            theme: StringConstructor;
            color: StringConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            id: StringConstructor;
            inline: BooleanConstructor;
            falseIcon: vue.PropType<IconValue>;
            trueIcon: vue.PropType<IconValue>;
            ripple: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: vue.PropType<boolean | null>;
                default: null;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            modelValue: null;
            type: StringConstructor;
            valueComparator: {
                type: vue.PropType<typeof deepEqual>;
                default: typeof deepEqual;
            };
            label: StringConstructor;
            trueValue: null;
            falseValue: null;
            value: null;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:input">>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "inline" | "error" | "disabled" | "multiple" | "readonly" | "density" | "ripple" | "valueComparator">;
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
            density: {
                type: vue.PropType<Density>;
                default: string;
                validator: (v: any) => boolean;
            };
            theme: StringConstructor;
            color: StringConstructor;
            disabled: BooleanConstructor;
            error: BooleanConstructor;
            id: StringConstructor;
            inline: BooleanConstructor;
            falseIcon: vue.PropType<IconValue>;
            trueIcon: vue.PropType<IconValue>;
            ripple: {
                type: BooleanConstructor;
                default: boolean;
            };
            multiple: {
                type: vue.PropType<boolean | null>;
                default: null;
            };
            name: StringConstructor;
            readonly: BooleanConstructor;
            modelValue: null;
            type: StringConstructor;
            valueComparator: {
                type: vue.PropType<typeof deepEqual>;
                default: typeof deepEqual;
            };
            label: StringConstructor;
            trueValue: null;
            falseValue: null;
            value: null;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:input">>>, {
            isFocused: Ref<boolean>;
            input: Ref<HTMLInputElement | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (val: any) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:input">, string, {
            inline: boolean;
            error: boolean;
            disabled: boolean;
            multiple: boolean | null;
            readonly: boolean;
            density: Density;
            ripple: boolean;
            valueComparator: typeof deepEqual;
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
        $nextTick: typeof nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<ExtractPropTypes<Omit<{
        density: {
            type: vue.PropType<Density>;
            default: string;
            validator: (v: any) => boolean;
        };
        theme: StringConstructor;
        color: StringConstructor;
        disabled: BooleanConstructor;
        error: BooleanConstructor;
        id: StringConstructor;
        inline: BooleanConstructor;
        falseIcon: vue.PropType<IconValue>;
        trueIcon: vue.PropType<IconValue>;
        ripple: {
            type: BooleanConstructor;
            default: boolean;
        };
        multiple: {
            type: vue.PropType<boolean | null>;
            default: null;
        };
        name: StringConstructor;
        readonly: BooleanConstructor;
        modelValue: null;
        type: StringConstructor;
        valueComparator: {
            type: vue.PropType<typeof deepEqual>;
            default: typeof deepEqual;
        };
        label: StringConstructor;
        trueValue: null;
        falseValue: null;
        value: null;
    }, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:input">>> & vue.ShallowUnwrapRef<{
        isFocused: Ref<boolean>;
        input: Ref<HTMLInputElement | undefined>;
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<ExtractPropTypes<Omit<{
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: vue.PropType<IconValue>;
    trueIcon: vue.PropType<IconValue>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    label: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "onUpdate:modelValue" | "v-slot:input">>>, {
    isFocused: Ref<boolean>;
    input: Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (val: any) => boolean;
}, "$children" | "v-slots" | "v-slot:default" | "modelValue" | "update:modelValue" | "v-slot:input">, string, {
    inline: boolean;
    error: boolean;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    density: Density;
    ripple: boolean;
    valueComparator: typeof deepEqual;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new <T>() => {
    $props: {
        modelValue?: T | undefined;
        'onUpdate:modelValue'?: ((val: T) => any) | undefined;
    } & {
        $children?: {} | vue.VNodeChild | {
            default?: (() => vue.VNodeChild) | undefined;
            input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | (() => vue.VNodeChild) | undefined;
            input?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:input"?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
    };
});
declare type VSelectionControl = InstanceType<typeof VSelectionControl>;

export { VSelectionControl };
