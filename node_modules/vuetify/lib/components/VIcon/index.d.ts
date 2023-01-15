import * as vue from 'vue';
import { PropType, JSXComponent } from 'vue';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;
declare const VComponentIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
declare type VComponentIcon = InstanceType<typeof VComponentIcon>;
declare const VSvgIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
declare type VSvgIcon = InstanceType<typeof VSvgIcon>;
declare const VLigatureIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
declare type VLigatureIcon = InstanceType<typeof VLigatureIcon>;
declare const VClassIcon: vue.DefineComponent<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    icon: {
        type: PropType<IconValue>;
    };
    tag: {
        type: StringConstructor;
        required: true;
    };
}>>, {}>;
declare type VClassIcon = InstanceType<typeof VClassIcon>;

declare const VIcon: vue.DefineComponent<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: vue.PropType<IconValue>;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    tag: Omit<{
        type: StringConstructor;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<string>;
        default: string;
    };
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    color: StringConstructor;
    start: BooleanConstructor;
    end: BooleanConstructor;
    icon: vue.PropType<IconValue>;
}>>, {
    end: boolean;
    start: boolean;
    size: string | number;
    tag: string;
}>;
declare type VIcon = InstanceType<typeof VIcon>;

export { VClassIcon, VComponentIcon, VIcon, VLigatureIcon, VSvgIcon };
