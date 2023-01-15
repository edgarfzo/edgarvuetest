import * as vue from 'vue';
import { JSXComponent, PropType } from 'vue';

declare function deepEqual(a: any, b: any): boolean;

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare const VRadio: vue.DefineComponent<{
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
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
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
}>>, {
    inline: boolean;
    error: boolean;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    density: Density;
    ripple: boolean;
    falseIcon: (string & {}) | IconValue;
    trueIcon: (string & {}) | IconValue;
    valueComparator: typeof deepEqual;
}>;
declare type VRadio = InstanceType<typeof VRadio>;

export { VRadio };
