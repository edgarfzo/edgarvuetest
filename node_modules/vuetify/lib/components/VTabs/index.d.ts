import * as vue from 'vue';
import { PropType, JSXComponent } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare type TabItem = string | Record<string, any>;
declare const VTabs: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    alignTabs: {
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    };
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
    modelValue: null;
    mandatory: {
        type: PropType<boolean | "force">;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (v: unknown) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    alignTabs: {
        type: PropType<"center" | "end" | "start" | "title">;
        default: string;
    };
    color: StringConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    fixedTabs: BooleanConstructor;
    items: {
        type: PropType<TabItem[]>;
        default: () => never[];
    };
    stacked: BooleanConstructor;
    bgColor: StringConstructor;
    grow: BooleanConstructor;
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    hideSlider: BooleanConstructor;
    sliderColor: StringConstructor;
    modelValue: null;
    mandatory: {
        type: PropType<boolean | "force">;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((v: unknown) => any) | undefined;
}, {
    height: string | number;
    direction: "horizontal" | "vertical";
    tag: string;
    mandatory: boolean | "force";
    items: TabItem[];
    density: Density;
    stacked: boolean;
    grow: boolean;
    hideSlider: boolean;
    alignTabs: "center" | "end" | "start" | "title";
    fixedTabs: boolean;
}>;
declare type VTabs = InstanceType<typeof VTabs>;

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VTab: vue.DefineComponent<{
    theme: StringConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    fixed: BooleanConstructor;
    icon: PropType<boolean | IconValue>;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    stacked: BooleanConstructor;
    title: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    theme: StringConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: PropType<string>;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    fixed: BooleanConstructor;
    icon: PropType<boolean | IconValue>;
    prependIcon: PropType<IconValue>;
    appendIcon: PropType<IconValue>;
    stacked: BooleanConstructor;
    title: StringConstructor;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: StringConstructor;
    sliderColor: StringConstructor;
    hideSlider: BooleanConstructor;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
}>>, {
    replace: boolean;
    fixed: boolean;
    exact: boolean;
    direction: "horizontal" | "vertical";
    disabled: boolean;
    tag: string;
    selectedClass: string;
    stacked: boolean;
    ripple: boolean;
    hideSlider: boolean;
}>;
declare type VTab = InstanceType<typeof VTab>;

export { VTab, VTabs };
