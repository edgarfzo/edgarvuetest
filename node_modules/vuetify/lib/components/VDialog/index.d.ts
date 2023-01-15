import * as vue from 'vue';
import { Ref, VNodeChild, nextTick } from 'vue';

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
declare type ScrollStrategyFn = (data: ScrollStrategyData, props: StrategyProps$1) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps$1 {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFn;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps$1): void;
declare function repositionScrollStrategy(data: ScrollStrategyData): void;

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
declare type Tblock = typeof block[number];
declare type Tinline = typeof inline[number];
declare type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

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

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
declare type LocationStrategyFn = (data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFn;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => void;
};

declare type OverlaySlots = MakeSlots<{
    default: [{
        isActive: Ref<boolean>;
    }];
    activator: [{
        isActive: boolean;
        props: Record<string, any>;
    }];
}>;

declare const VDialog: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
            zIndex: string | number;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            fullscreen: boolean;
            scrollable: boolean;
            retainFocus: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                }>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                };
            };
            theme: StringConstructor;
            scrollStrategy: Omit<{
                type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                default: string;
                validator: (val: any) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                default: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
            };
            locationStrategy: {
                type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined)>;
                default: string;
                validator: (val: any) => boolean;
            };
            location: {
                type: vue.PropType<Anchor>;
                default: string;
            };
            origin: Omit<{
                type: vue.PropType<"auto" | Anchor | "overlap">;
                default: string;
            }, "type" | "default"> & {
                type: vue.PropType<"auto" | Anchor | "overlap">;
                default: "auto" | Anchor | "overlap";
            };
            offset: vue.PropType<string | number | number[] | undefined>;
            eager: BooleanConstructor;
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            closeDelay: (StringConstructor | NumberConstructor)[];
            openDelay: (StringConstructor | NumberConstructor)[];
            activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
            activatorProps: {
                type: vue.PropType<Record<string, any>>;
                default: () => {};
            };
            openOnClick: {
                type: BooleanConstructor;
                default: undefined;
            };
            openOnHover: BooleanConstructor;
            openOnFocus: {
                type: BooleanConstructor;
                default: undefined;
            };
            closeOnContentClick: BooleanConstructor;
            absolute: BooleanConstructor;
            attach: vue.PropType<string | boolean | Element>;
            closeOnBack: {
                type: BooleanConstructor;
                default: boolean;
            };
            contained: BooleanConstructor;
            contentClass: null;
            contentProps: null;
            disabled: BooleanConstructor;
            noClickAnimation: BooleanConstructor;
            modelValue: BooleanConstructor;
            persistent: BooleanConstructor;
            scrim: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            zIndex: Omit<{
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            }, "type" | "default"> & {
                type: vue.PropType<string | number>;
                default: string | number;
            };
            fullscreen: BooleanConstructor;
            retainFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollable: BooleanConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "absolute" | "location" | "origin" | "transition" | "zIndex" | "eager" | "disabled" | "modelValue" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "locationStrategy" | "scrollStrategy" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "fullscreen" | "scrollable" | "retainFocus">;
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
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            transition: Omit<{
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                }>;
                default: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                }) | {
                    component: vue.DefineComponent<{
                        target: vue.PropType<HTMLElement>;
                    }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                        target: vue.PropType<HTMLElement>;
                    }>>, {}>;
                };
            };
            theme: StringConstructor;
            scrollStrategy: Omit<{
                type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                default: string;
                validator: (val: any) => boolean;
            }, "type" | "default"> & {
                type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                default: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
            };
            locationStrategy: {
                type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined)>;
                default: string;
                validator: (val: any) => boolean;
            };
            location: {
                type: vue.PropType<Anchor>;
                default: string;
            };
            origin: Omit<{
                type: vue.PropType<"auto" | Anchor | "overlap">;
                default: string;
            }, "type" | "default"> & {
                type: vue.PropType<"auto" | Anchor | "overlap">;
                default: "auto" | Anchor | "overlap";
            };
            offset: vue.PropType<string | number | number[] | undefined>;
            eager: BooleanConstructor;
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            closeDelay: (StringConstructor | NumberConstructor)[];
            openDelay: (StringConstructor | NumberConstructor)[];
            activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
            activatorProps: {
                type: vue.PropType<Record<string, any>>;
                default: () => {};
            };
            openOnClick: {
                type: BooleanConstructor;
                default: undefined;
            };
            openOnHover: BooleanConstructor;
            openOnFocus: {
                type: BooleanConstructor;
                default: undefined;
            };
            closeOnContentClick: BooleanConstructor;
            absolute: BooleanConstructor;
            attach: vue.PropType<string | boolean | Element>;
            closeOnBack: {
                type: BooleanConstructor;
                default: boolean;
            };
            contained: BooleanConstructor;
            contentClass: null;
            contentProps: null;
            disabled: BooleanConstructor;
            noClickAnimation: BooleanConstructor;
            modelValue: BooleanConstructor;
            persistent: BooleanConstructor;
            scrim: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            zIndex: Omit<{
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            }, "type" | "default"> & {
                type: vue.PropType<string | number>;
                default: string | number;
            };
            fullscreen: BooleanConstructor;
            retainFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollable: BooleanConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, Omit<Omit<{
            $: vue.ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                absolute: boolean;
                location: Anchor;
                origin: "auto" | Anchor | "overlap";
                transition: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
                zIndex: string | number;
                eager: boolean;
                disabled: boolean;
                modelValue: boolean;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined);
                scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
                closeOnBack: boolean;
                contained: boolean;
                noClickAnimation: boolean;
                persistent: boolean;
                scrim: string | boolean;
                _disableGlobalStack: boolean;
            }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
                transition: {
                    type: vue.PropType<string | boolean | (vue.TransitionProps & {
                        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                    })>;
                    default: string;
                    validator: (val: unknown) => boolean;
                };
                theme: StringConstructor;
                scrollStrategy: {
                    type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                    default: string;
                    validator: (val: any) => boolean;
                };
                locationStrategy: {
                    type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                        updateLocation: (e: Event) => void;
                    } | undefined)>;
                    default: string;
                    validator: (val: any) => boolean;
                };
                location: {
                    type: vue.PropType<Anchor>;
                    default: string;
                };
                origin: {
                    type: vue.PropType<"auto" | Anchor | "overlap">;
                    default: string;
                };
                offset: vue.PropType<string | number | number[] | undefined>;
                eager: BooleanConstructor;
                height: (StringConstructor | NumberConstructor)[];
                maxHeight: (StringConstructor | NumberConstructor)[];
                maxWidth: (StringConstructor | NumberConstructor)[];
                minHeight: (StringConstructor | NumberConstructor)[];
                minWidth: (StringConstructor | NumberConstructor)[];
                width: (StringConstructor | NumberConstructor)[];
                closeDelay: (StringConstructor | NumberConstructor)[];
                openDelay: (StringConstructor | NumberConstructor)[];
                activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
                activatorProps: {
                    type: vue.PropType<Record<string, any>>;
                    default: () => {};
                };
                openOnClick: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                openOnHover: BooleanConstructor;
                openOnFocus: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                closeOnContentClick: BooleanConstructor;
                absolute: BooleanConstructor;
                attach: vue.PropType<string | boolean | Element>;
                closeOnBack: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contained: BooleanConstructor;
                contentClass: null;
                contentProps: null;
                disabled: BooleanConstructor;
                noClickAnimation: BooleanConstructor;
                modelValue: BooleanConstructor;
                persistent: BooleanConstructor;
                scrim: {
                    type: (StringConstructor | BooleanConstructor)[];
                    default: boolean;
                };
                zIndex: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                _disableGlobalStack: BooleanConstructor;
            }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
                onAfterLeave?: (() => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "absolute" | "location" | "origin" | "transition" | "zIndex" | "eager" | "disabled" | "modelValue" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "locationStrategy" | "scrollStrategy" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
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
            $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
            $el: any;
            $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
                transition: {
                    type: vue.PropType<string | boolean | (vue.TransitionProps & {
                        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                    })>;
                    default: string;
                    validator: (val: unknown) => boolean;
                };
                theme: StringConstructor;
                scrollStrategy: {
                    type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                    default: string;
                    validator: (val: any) => boolean;
                };
                locationStrategy: {
                    type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                        updateLocation: (e: Event) => void;
                    } | undefined)>;
                    default: string;
                    validator: (val: any) => boolean;
                };
                location: {
                    type: vue.PropType<Anchor>;
                    default: string;
                };
                origin: {
                    type: vue.PropType<"auto" | Anchor | "overlap">;
                    default: string;
                };
                offset: vue.PropType<string | number | number[] | undefined>;
                eager: BooleanConstructor;
                height: (StringConstructor | NumberConstructor)[];
                maxHeight: (StringConstructor | NumberConstructor)[];
                maxWidth: (StringConstructor | NumberConstructor)[];
                minHeight: (StringConstructor | NumberConstructor)[];
                minWidth: (StringConstructor | NumberConstructor)[];
                width: (StringConstructor | NumberConstructor)[];
                closeDelay: (StringConstructor | NumberConstructor)[];
                openDelay: (StringConstructor | NumberConstructor)[];
                activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
                activatorProps: {
                    type: vue.PropType<Record<string, any>>;
                    default: () => {};
                };
                openOnClick: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                openOnHover: BooleanConstructor;
                openOnFocus: {
                    type: BooleanConstructor;
                    default: undefined;
                };
                closeOnContentClick: BooleanConstructor;
                absolute: BooleanConstructor;
                attach: vue.PropType<string | boolean | Element>;
                closeOnBack: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                contained: BooleanConstructor;
                contentClass: null;
                contentProps: null;
                disabled: BooleanConstructor;
                noClickAnimation: BooleanConstructor;
                modelValue: BooleanConstructor;
                persistent: BooleanConstructor;
                scrim: {
                    type: (StringConstructor | BooleanConstructor)[];
                    default: boolean;
                };
                zIndex: {
                    type: (StringConstructor | NumberConstructor)[];
                    default: number;
                };
                _disableGlobalStack: BooleanConstructor;
            }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
                onAfterLeave?: (() => any) | undefined;
                "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
                "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
            }, {
                activatorEl: vue.Ref<HTMLElement | undefined>;
                animateClick: () => void;
                contentEl: vue.Ref<HTMLElement | undefined>;
                globalTop: Readonly<vue.Ref<boolean>>;
                localTop: vue.ComputedRef<boolean>;
                updateLocation: vue.Ref<((e: Event) => void) | undefined>;
            }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
                'click:outside': (e: MouseEvent) => boolean;
                'update:modelValue': (value: boolean) => boolean;
                afterLeave: () => boolean;
            }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">, string, {
                absolute: boolean;
                location: Anchor;
                origin: "auto" | Anchor | "overlap";
                transition: string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                });
                zIndex: string | number;
                eager: boolean;
                disabled: boolean;
                modelValue: boolean;
                activatorProps: Record<string, any>;
                openOnClick: boolean;
                openOnHover: boolean;
                openOnFocus: boolean;
                closeOnContentClick: boolean;
                locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined);
                scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
                closeOnBack: boolean;
                contained: boolean;
                noClickAnimation: boolean;
                persistent: boolean;
                scrim: string | boolean;
                _disableGlobalStack: boolean;
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
        } & Readonly<vue.ExtractPropTypes<Omit<{
            transition: {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            };
            theme: StringConstructor;
            scrollStrategy: {
                type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                default: string;
                validator: (val: any) => boolean;
            };
            locationStrategy: {
                type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined)>;
                default: string;
                validator: (val: any) => boolean;
            };
            location: {
                type: vue.PropType<Anchor>;
                default: string;
            };
            origin: {
                type: vue.PropType<"auto" | Anchor | "overlap">;
                default: string;
            };
            offset: vue.PropType<string | number | number[] | undefined>;
            eager: BooleanConstructor;
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            closeDelay: (StringConstructor | NumberConstructor)[];
            openDelay: (StringConstructor | NumberConstructor)[];
            activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
            activatorProps: {
                type: vue.PropType<Record<string, any>>;
                default: () => {};
            };
            openOnClick: {
                type: BooleanConstructor;
                default: undefined;
            };
            openOnHover: BooleanConstructor;
            openOnFocus: {
                type: BooleanConstructor;
                default: undefined;
            };
            closeOnContentClick: BooleanConstructor;
            absolute: BooleanConstructor;
            attach: vue.PropType<string | boolean | Element>;
            closeOnBack: {
                type: BooleanConstructor;
                default: boolean;
            };
            contained: BooleanConstructor;
            contentClass: null;
            contentProps: null;
            disabled: BooleanConstructor;
            noClickAnimation: BooleanConstructor;
            modelValue: BooleanConstructor;
            persistent: BooleanConstructor;
            scrim: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            zIndex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            _disableGlobalStack: BooleanConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.ShallowUnwrapRef<{
            activatorEl: vue.Ref<HTMLElement | undefined>;
            animateClick: () => void;
            contentEl: vue.Ref<HTMLElement | undefined>;
            globalTop: Readonly<vue.Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: vue.Ref<((e: Event) => void) | undefined>;
        }> & {} & vue.ComponentCustomProperties & {
            $props: {
                $children?: {} | vue.VNodeChild | {
                    default?: ((args_0: {
                        isActive: vue.Ref<boolean>;
                    }) => vue.VNodeChild) | undefined;
                    activator?: ((args_0: {
                        isActive: boolean;
                        props: Record<string, any>;
                    }) => vue.VNodeChild) | undefined;
                };
                'v-slots'?: {
                    default?: false | ((args_0: {
                        isActive: vue.Ref<boolean>;
                    }) => vue.VNodeChild) | undefined;
                    activator?: false | ((args_0: {
                        isActive: boolean;
                        props: Record<string, any>;
                    }) => vue.VNodeChild) | undefined;
                } | undefined;
            } & {
                "v-slot:default"?: false | ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                "v-slot:activator"?: false | ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            };
        }, "offset" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onAfterLeave" | "$children" | "theme" | "v-slots" | "contentClass" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "eager" | "disabled" | "modelValue" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "locationStrategy" | "scrollStrategy" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: boolean) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">, string, {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
            zIndex: string | number;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            fullscreen: boolean;
            scrollable: boolean;
            retainFocus: boolean;
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
    } & Readonly<vue.ExtractPropTypes<Omit<{
        transition: Omit<{
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        }, "type" | "default"> & {
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            }>;
            default: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            }) | {
                component: vue.DefineComponent<{
                    target: vue.PropType<HTMLElement>;
                }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                    target: vue.PropType<HTMLElement>;
                }>>, {}>;
            };
        };
        theme: StringConstructor;
        scrollStrategy: Omit<{
            type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
            default: string;
            validator: (val: any) => boolean;
        }, "type" | "default"> & {
            type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
            default: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
        };
        locationStrategy: {
            type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)>;
            default: string;
            validator: (val: any) => boolean;
        };
        location: {
            type: vue.PropType<Anchor>;
            default: string;
        };
        origin: Omit<{
            type: vue.PropType<"auto" | Anchor | "overlap">;
            default: string;
        }, "type" | "default"> & {
            type: vue.PropType<"auto" | Anchor | "overlap">;
            default: "auto" | Anchor | "overlap";
        };
        offset: vue.PropType<string | number | number[] | undefined>;
        eager: BooleanConstructor;
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        closeDelay: (StringConstructor | NumberConstructor)[];
        openDelay: (StringConstructor | NumberConstructor)[];
        activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
        activatorProps: {
            type: vue.PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        absolute: BooleanConstructor;
        attach: vue.PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        zIndex: Omit<{
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        }, "type" | "default"> & {
            type: vue.PropType<string | number>;
            default: string | number;
        };
        fullscreen: BooleanConstructor;
        retainFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollable: BooleanConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<Omit<Omit<{
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            zIndex: string | number;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            transition: {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            };
            theme: StringConstructor;
            scrollStrategy: {
                type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                default: string;
                validator: (val: any) => boolean;
            };
            locationStrategy: {
                type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined)>;
                default: string;
                validator: (val: any) => boolean;
            };
            location: {
                type: vue.PropType<Anchor>;
                default: string;
            };
            origin: {
                type: vue.PropType<"auto" | Anchor | "overlap">;
                default: string;
            };
            offset: vue.PropType<string | number | number[] | undefined>;
            eager: BooleanConstructor;
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            closeDelay: (StringConstructor | NumberConstructor)[];
            openDelay: (StringConstructor | NumberConstructor)[];
            activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
            activatorProps: {
                type: vue.PropType<Record<string, any>>;
                default: () => {};
            };
            openOnClick: {
                type: BooleanConstructor;
                default: undefined;
            };
            openOnHover: BooleanConstructor;
            openOnFocus: {
                type: BooleanConstructor;
                default: undefined;
            };
            closeOnContentClick: BooleanConstructor;
            absolute: BooleanConstructor;
            attach: vue.PropType<string | boolean | Element>;
            closeOnBack: {
                type: BooleanConstructor;
                default: boolean;
            };
            contained: BooleanConstructor;
            contentClass: null;
            contentProps: null;
            disabled: BooleanConstructor;
            noClickAnimation: BooleanConstructor;
            modelValue: BooleanConstructor;
            persistent: BooleanConstructor;
            scrim: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            zIndex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            _disableGlobalStack: BooleanConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "absolute" | "location" | "origin" | "transition" | "zIndex" | "eager" | "disabled" | "modelValue" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "locationStrategy" | "scrollStrategy" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
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
        $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            transition: {
                type: vue.PropType<string | boolean | (vue.TransitionProps & {
                    component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
                })>;
                default: string;
                validator: (val: unknown) => boolean;
            };
            theme: StringConstructor;
            scrollStrategy: {
                type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
                default: string;
                validator: (val: any) => boolean;
            };
            locationStrategy: {
                type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                    updateLocation: (e: Event) => void;
                } | undefined)>;
                default: string;
                validator: (val: any) => boolean;
            };
            location: {
                type: vue.PropType<Anchor>;
                default: string;
            };
            origin: {
                type: vue.PropType<"auto" | Anchor | "overlap">;
                default: string;
            };
            offset: vue.PropType<string | number | number[] | undefined>;
            eager: BooleanConstructor;
            height: (StringConstructor | NumberConstructor)[];
            maxHeight: (StringConstructor | NumberConstructor)[];
            maxWidth: (StringConstructor | NumberConstructor)[];
            minHeight: (StringConstructor | NumberConstructor)[];
            minWidth: (StringConstructor | NumberConstructor)[];
            width: (StringConstructor | NumberConstructor)[];
            closeDelay: (StringConstructor | NumberConstructor)[];
            openDelay: (StringConstructor | NumberConstructor)[];
            activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
            activatorProps: {
                type: vue.PropType<Record<string, any>>;
                default: () => {};
            };
            openOnClick: {
                type: BooleanConstructor;
                default: undefined;
            };
            openOnHover: BooleanConstructor;
            openOnFocus: {
                type: BooleanConstructor;
                default: undefined;
            };
            closeOnContentClick: BooleanConstructor;
            absolute: BooleanConstructor;
            attach: vue.PropType<string | boolean | Element>;
            closeOnBack: {
                type: BooleanConstructor;
                default: boolean;
            };
            contained: BooleanConstructor;
            contentClass: null;
            contentProps: null;
            disabled: BooleanConstructor;
            noClickAnimation: BooleanConstructor;
            modelValue: BooleanConstructor;
            persistent: BooleanConstructor;
            scrim: {
                type: (StringConstructor | BooleanConstructor)[];
                default: boolean;
            };
            zIndex: {
                type: (StringConstructor | NumberConstructor)[];
                default: number;
            };
            _disableGlobalStack: BooleanConstructor;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
            onAfterLeave?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
        }, {
            activatorEl: vue.Ref<HTMLElement | undefined>;
            animateClick: () => void;
            contentEl: vue.Ref<HTMLElement | undefined>;
            globalTop: Readonly<vue.Ref<boolean>>;
            localTop: vue.ComputedRef<boolean>;
            updateLocation: vue.Ref<((e: Event) => void) | undefined>;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'click:outside': (e: MouseEvent) => boolean;
            'update:modelValue': (value: boolean) => boolean;
            afterLeave: () => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">, string, {
            absolute: boolean;
            location: Anchor;
            origin: "auto" | Anchor | "overlap";
            transition: string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            });
            zIndex: string | number;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            _disableGlobalStack: boolean;
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
    } & Readonly<vue.ExtractPropTypes<Omit<{
        transition: {
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        };
        theme: StringConstructor;
        scrollStrategy: {
            type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
            default: string;
            validator: (val: any) => boolean;
        };
        locationStrategy: {
            type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)>;
            default: string;
            validator: (val: any) => boolean;
        };
        location: {
            type: vue.PropType<Anchor>;
            default: string;
        };
        origin: {
            type: vue.PropType<"auto" | Anchor | "overlap">;
            default: string;
        };
        offset: vue.PropType<string | number | number[] | undefined>;
        eager: BooleanConstructor;
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        closeDelay: (StringConstructor | NumberConstructor)[];
        openDelay: (StringConstructor | NumberConstructor)[];
        activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
        activatorProps: {
            type: vue.PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        absolute: BooleanConstructor;
        attach: vue.PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        zIndex: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        _disableGlobalStack: BooleanConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        activatorEl: vue.Ref<HTMLElement | undefined>;
        animateClick: () => void;
        contentEl: vue.Ref<HTMLElement | undefined>;
        globalTop: Readonly<vue.Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: vue.Ref<((e: Event) => void) | undefined>;
    }> & {} & vue.ComponentCustomProperties & {
        $props: {
            $children?: {} | vue.VNodeChild | {
                default?: ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        };
    }, "offset" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onAfterLeave" | "$children" | "theme" | "v-slots" | "contentClass" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "eager" | "disabled" | "modelValue" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "locationStrategy" | "scrollStrategy" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    transition: Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                target: vue.PropType<HTMLElement>;
            }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                target: vue.PropType<HTMLElement>;
            }>>, {}>;
        }>;
        default: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        }) | {
            component: vue.DefineComponent<{
                target: vue.PropType<HTMLElement>;
            }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
                target: vue.PropType<HTMLElement>;
            }>>, {}>;
        };
    };
    theme: StringConstructor;
    scrollStrategy: Omit<{
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
        default: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
    };
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: Omit<{
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: "auto" | Anchor | "overlap";
    };
    offset: vue.PropType<string | number | number[] | undefined>;
    eager: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    absolute: BooleanConstructor;
    attach: vue.PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    zIndex: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: vue.PropType<string | number>;
        default: string | number;
    };
    fullscreen: BooleanConstructor;
    retainFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: BooleanConstructor;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, Omit<Omit<{
    $: vue.ComponentInternalInstance;
    $data: {};
    $props: Partial<{
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
        zIndex: string | number;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
    }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
        transition: {
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        };
        theme: StringConstructor;
        scrollStrategy: {
            type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
            default: string;
            validator: (val: any) => boolean;
        };
        locationStrategy: {
            type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)>;
            default: string;
            validator: (val: any) => boolean;
        };
        location: {
            type: vue.PropType<Anchor>;
            default: string;
        };
        origin: {
            type: vue.PropType<"auto" | Anchor | "overlap">;
            default: string;
        };
        offset: vue.PropType<string | number | number[] | undefined>;
        eager: BooleanConstructor;
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        closeDelay: (StringConstructor | NumberConstructor)[];
        openDelay: (StringConstructor | NumberConstructor)[];
        activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
        activatorProps: {
            type: vue.PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        absolute: BooleanConstructor;
        attach: vue.PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        zIndex: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        _disableGlobalStack: BooleanConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "absolute" | "location" | "origin" | "transition" | "zIndex" | "eager" | "disabled" | "modelValue" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "locationStrategy" | "scrollStrategy" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack">;
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
    $emit: ((event: "update:modelValue", value: boolean) => void) & ((event: "click:outside", e: MouseEvent) => void) & ((event: "afterLeave") => void);
    $el: any;
    $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
        transition: {
            type: vue.PropType<string | boolean | (vue.TransitionProps & {
                component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
            })>;
            default: string;
            validator: (val: unknown) => boolean;
        };
        theme: StringConstructor;
        scrollStrategy: {
            type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
            default: string;
            validator: (val: any) => boolean;
        };
        locationStrategy: {
            type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined)>;
            default: string;
            validator: (val: any) => boolean;
        };
        location: {
            type: vue.PropType<Anchor>;
            default: string;
        };
        origin: {
            type: vue.PropType<"auto" | Anchor | "overlap">;
            default: string;
        };
        offset: vue.PropType<string | number | number[] | undefined>;
        eager: BooleanConstructor;
        height: (StringConstructor | NumberConstructor)[];
        maxHeight: (StringConstructor | NumberConstructor)[];
        maxWidth: (StringConstructor | NumberConstructor)[];
        minHeight: (StringConstructor | NumberConstructor)[];
        minWidth: (StringConstructor | NumberConstructor)[];
        width: (StringConstructor | NumberConstructor)[];
        closeDelay: (StringConstructor | NumberConstructor)[];
        openDelay: (StringConstructor | NumberConstructor)[];
        activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
        activatorProps: {
            type: vue.PropType<Record<string, any>>;
            default: () => {};
        };
        openOnClick: {
            type: BooleanConstructor;
            default: undefined;
        };
        openOnHover: BooleanConstructor;
        openOnFocus: {
            type: BooleanConstructor;
            default: undefined;
        };
        closeOnContentClick: BooleanConstructor;
        absolute: BooleanConstructor;
        attach: vue.PropType<string | boolean | Element>;
        closeOnBack: {
            type: BooleanConstructor;
            default: boolean;
        };
        contained: BooleanConstructor;
        contentClass: null;
        contentProps: null;
        disabled: BooleanConstructor;
        noClickAnimation: BooleanConstructor;
        modelValue: BooleanConstructor;
        persistent: BooleanConstructor;
        scrim: {
            type: (StringConstructor | BooleanConstructor)[];
            default: boolean;
        };
        zIndex: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
        _disableGlobalStack: BooleanConstructor;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
        onAfterLeave?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
    }, {
        activatorEl: vue.Ref<HTMLElement | undefined>;
        animateClick: () => void;
        contentEl: vue.Ref<HTMLElement | undefined>;
        globalTop: Readonly<vue.Ref<boolean>>;
        localTop: vue.ComputedRef<boolean>;
        updateLocation: vue.Ref<((e: Event) => void) | undefined>;
    }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
        'click:outside': (e: MouseEvent) => boolean;
        'update:modelValue': (value: boolean) => boolean;
        afterLeave: () => boolean;
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">, string, {
        absolute: boolean;
        location: Anchor;
        origin: "auto" | Anchor | "overlap";
        transition: string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        });
        zIndex: string | number;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        activatorProps: Record<string, any>;
        openOnClick: boolean;
        openOnHover: boolean;
        openOnFocus: boolean;
        closeOnContentClick: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        _disableGlobalStack: boolean;
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
} & Readonly<vue.ExtractPropTypes<Omit<{
    transition: {
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    };
    theme: StringConstructor;
    scrollStrategy: {
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    };
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: {
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    };
    offset: vue.PropType<string | number | number[] | undefined>;
    eager: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    absolute: BooleanConstructor;
    attach: vue.PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: null;
    contentProps: null;
    disabled: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    _disableGlobalStack: BooleanConstructor;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">>> & {
    onAfterLeave?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    "onClick:outside"?: ((e: MouseEvent) => any) | undefined;
} & vue.ShallowUnwrapRef<{
    activatorEl: vue.Ref<HTMLElement | undefined>;
    animateClick: () => void;
    contentEl: vue.Ref<HTMLElement | undefined>;
    globalTop: Readonly<vue.Ref<boolean>>;
    localTop: vue.ComputedRef<boolean>;
    updateLocation: vue.Ref<((e: Event) => void) | undefined>;
}> & {} & vue.ComponentCustomProperties & {
    $props: {
        $children?: {} | vue.VNodeChild | {
            default?: ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((args_0: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((args_0: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    };
}, "offset" | "height" | "width" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "onAfterLeave" | "$children" | "theme" | "v-slots" | "contentClass" | keyof vue.VNodeProps | keyof vue.AllowedComponentProps | "v-slot:default" | "onUpdate:modelValue" | "activator" | "v-slot:activator" | "closeDelay" | "openDelay" | "contentProps" | "attach" | "onClick:outside" | ("absolute" | "location" | "origin" | "transition" | "zIndex" | "eager" | "disabled" | "modelValue" | "activatorProps" | "openOnClick" | "openOnHover" | "openOnFocus" | "closeOnContentClick" | "locationStrategy" | "scrollStrategy" | "closeOnBack" | "contained" | "noClickAnimation" | "persistent" | "scrim" | "_disableGlobalStack")>, `$${any}`>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: boolean) => boolean;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:activator">, string, {
    absolute: boolean;
    location: Anchor;
    origin: "auto" | Anchor | "overlap";
    transition: string | boolean | (vue.TransitionProps & {
        component?: vue.Component<any, any, any, vue.ComputedOptions, vue.MethodOptions> | undefined;
    }) | {
        component: vue.DefineComponent<{
            target: vue.PropType<HTMLElement>;
        }, () => JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
            target: vue.PropType<HTMLElement>;
        }>>, {}>;
    };
    zIndex: string | number;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    scrollStrategy: "none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps$1) => void) | "reposition";
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    fullscreen: boolean;
    scrollable: boolean;
    retainFocus: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<OverlaySlots>;
});
declare type VDialog = InstanceType<typeof VDialog>;

export { VDialog };
