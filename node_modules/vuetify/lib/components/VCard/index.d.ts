import * as vue from 'vue';
import { JSXComponent, PropType } from 'vue';
// @ts-ignore
import * as vue_router from 'vue-router';

declare type Density = null | 'default' | 'comfortable' | 'compact';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
declare type Tblock = typeof block[number];
declare type Tinline = typeof inline[number];
declare type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

declare const VCard: vue.DefineComponent<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    loading: (StringConstructor | BooleanConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    theme: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
    hover: BooleanConstructor;
    image: StringConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    ripple: BooleanConstructor;
    subtitle: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    color: StringConstructor;
    variant: Omit<{
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: string;
        validator: (v: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">;
        default: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    href: StringConstructor;
    replace: BooleanConstructor;
    to: vue.PropType<vue_router.RouteLocationRaw>;
    exact: BooleanConstructor;
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    position: {
        type: vue.PropType<"fixed" | "absolute" | "static" | "relative" | "sticky">;
        validator: (v: any) => boolean;
    };
    location: vue.PropType<Anchor>;
    loading: (StringConstructor | BooleanConstructor)[];
    elevation: {
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    };
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    border: (StringConstructor | BooleanConstructor | NumberConstructor)[];
    theme: StringConstructor;
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    disabled: BooleanConstructor;
    flat: BooleanConstructor;
    hover: BooleanConstructor;
    image: StringConstructor;
    link: {
        type: BooleanConstructor;
        default: undefined;
    };
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    ripple: BooleanConstructor;
    subtitle: StringConstructor;
    text: StringConstructor;
    title: StringConstructor;
}>>, {
    replace: boolean;
    link: boolean;
    flat: boolean;
    exact: boolean;
    disabled: boolean;
    tag: string;
    rounded: string | number | boolean;
    density: Density;
    variant: "flat" | "text" | "elevated" | "tonal" | "outlined" | "plain";
    ripple: boolean;
    hover: boolean;
}>;
declare type VCard = InstanceType<typeof VCard>;

declare const VCardActions: vue.DefineComponent<{}, {}, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{}>>, {}>;
declare type VCardActions = InstanceType<typeof VCardActions>;

declare const VCardItem: vue.DefineComponent<{
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    subtitle: StringConstructor;
    title: StringConstructor;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    appendAvatar: StringConstructor;
    appendIcon: vue.PropType<IconValue>;
    prependAvatar: StringConstructor;
    prependIcon: vue.PropType<IconValue>;
    subtitle: StringConstructor;
    title: StringConstructor;
}>>, {
    density: Density;
}>;
declare type VCardItem = InstanceType<typeof VCardItem>;

declare const VCardSubtitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;
declare type VCardSubtitle = InstanceType<typeof VCardSubtitle>;

declare const VCardText: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;
declare type VCardText = InstanceType<typeof VCardText>;

declare const VCardTitle: vue.DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tag: string;
}>;
declare type VCardTitle = InstanceType<typeof VCardTitle>;

export { VCard, VCardActions, VCardItem, VCardSubtitle, VCardText, VCardTitle };
