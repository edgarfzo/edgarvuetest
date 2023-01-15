import * as vue from 'vue';
import { PropType, JSXComponent, ExtractPropTypes } from 'vue';

declare function deepEqual(a: any, b: any): boolean;
declare type EventProp<T = (...args: any[]) => any> = T | T[];
declare const EventProp: PropType<EventProp<(...args: any[]) => any>>;

declare type ValidationResult = string | boolean;
declare type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare const VCheckbox: vue.DefineComponent<{
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
    falseIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
    trueIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
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
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    focused: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"input" | "blur" | "submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<EventProp<(...args: any[]) => any>>;
    'onClick:append': vue.PropType<EventProp<(...args: any[]) => any>>;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:focused': (focused: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
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
    falseIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
    trueIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
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
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    focused: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"input" | "blur" | "submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    messages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<EventProp<(...args: any[]) => any>>;
    'onClick:append': vue.PropType<EventProp<(...args: any[]) => any>>;
}>> & {
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
}, {
    inline: boolean;
    error: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    indeterminate: boolean;
    messages: string | string[];
    density: Density;
    ripple: boolean;
    focused: boolean;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    falseIcon: (string & {}) | IconValue;
    trueIcon: (string & {}) | IconValue;
    valueComparator: typeof deepEqual;
    indeterminateIcon: IconValue;
}>;
declare type VCheckbox = InstanceType<typeof VCheckbox>;

declare const VCheckboxBtn: vue.DefineComponent<{
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
    falseIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
    trueIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
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
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: any) => true;
    'update:indeterminate': (val: boolean) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    falseIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
    trueIcon: {
        type: vue.PropType<(string & {}) | IconValue>;
        default: (string & {}) | IconValue;
    };
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
    indeterminate: BooleanConstructor;
    indeterminateIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
}, {
    inline: boolean;
    error: boolean;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    indeterminate: boolean;
    density: Density;
    ripple: boolean;
    falseIcon: (string & {}) | IconValue;
    trueIcon: (string & {}) | IconValue;
    valueComparator: typeof deepEqual;
    indeterminateIcon: IconValue;
}>;
declare type VCheckboxBtn = InstanceType<typeof VCheckboxBtn>;

export { VCheckbox, VCheckboxBtn };
