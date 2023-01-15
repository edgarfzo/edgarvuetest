import * as vue from 'vue';

declare type ValidationResult = string | boolean;
declare type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

declare const VValidation: vue.DefineComponent<{
    focused: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: vue.PropType<"input" | "blur" | "submit" | undefined>;
    validationValue: null;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    focused: BooleanConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    errorMessages: {
        type: vue.PropType<string | string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    readonly: BooleanConstructor;
    rules: {
        type: vue.PropType<ValidationRule[]>;
        default: () => never[];
    };
    modelValue: null;
    validateOn: vue.PropType<"input" | "blur" | "submit" | undefined>;
    validationValue: null;
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    error: boolean;
    disabled: boolean;
    readonly: boolean;
    focused: boolean;
    errorMessages: string | string[];
    maxErrors: string | number;
    rules: ValidationRule[];
}>;
declare type VValidation = InstanceType<typeof VValidation>;

export { VValidation };
