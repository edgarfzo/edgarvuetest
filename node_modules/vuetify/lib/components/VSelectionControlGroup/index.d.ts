import * as vue from 'vue';
import { JSXComponent, PropType } from 'vue';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare function deepEqual(a: any, b: any): boolean;

declare const VSelectionControlGroup: vue.DefineComponent<{
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    defaultsTarget: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (val: any) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    theme: StringConstructor;
    color: StringConstructor;
    disabled: BooleanConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: PropType<IconValue>;
    trueIcon: PropType<IconValue>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    defaultsTarget: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: any) => any) | undefined;
}, {
    inline: boolean;
    error: boolean;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    density: Density;
    ripple: boolean;
    valueComparator: typeof deepEqual;
    defaultsTarget: string;
}>;
declare type VSelectionControlGroup = InstanceType<typeof VSelectionControlGroup>;

export { VSelectionControlGroup };
