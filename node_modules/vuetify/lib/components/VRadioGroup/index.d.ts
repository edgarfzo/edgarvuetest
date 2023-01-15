import * as vue from 'vue';
import { PropType, JSXComponent } from 'vue';

declare function deepEqual(a: any, b: any): boolean;
declare type EventProp<T = (...args: any[]) => any> = T | T[];
declare const EventProp: PropType<EventProp<(...args: any[]) => any>>;

declare type ValidationResult = string | boolean;
declare type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VRadioGroup: vue.DefineComponent<{
    trueIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    name: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
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
    label: StringConstructor;
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
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    trueIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    falseIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    inline: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    name: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    readonly: BooleanConstructor;
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    modelValue: null;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
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
    label: StringConstructor;
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
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    type: string;
    inline: boolean;
    error: boolean;
    height: string | number;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    readonly: boolean;
    messages: string | string[];
    density: Density;
    ripple: boolean;
    focused: boolean;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
    falseIcon: IconValue;
    trueIcon: IconValue;
    valueComparator: typeof deepEqual;
}>;
declare type VRadioGroup = InstanceType<typeof VRadioGroup>;

export { VRadioGroup };
