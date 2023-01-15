import * as vue from 'vue';
import { JSXComponent, PropType, VNodeChild, ComponentInternalInstance, Ref, ComputedRef, InjectionKey, UnwrapRef } from 'vue';

declare type IconValue = string | JSXComponent;
declare const IconValue: PropType<IconValue>;

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

interface GroupItem {
    id: number;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
}
interface GroupProvide {
    register: (item: GroupItem, cmp: ComponentInternalInstance) => void;
    unregister: (id: number) => void;
    select: (id: number, value: boolean) => void;
    selected: Ref<Readonly<number[]>>;
    isSelected: (id: number) => boolean;
    prev: () => void;
    next: () => void;
    selectedClass: Ref<string | undefined>;
    items: ComputedRef<{
        id: number;
        value: unknown;
        disabled: boolean | undefined;
    }[]>;
    disabled: Ref<boolean | undefined>;
    getItemIndex: (value: unknown) => number;
}
interface GroupItemProvide {
    id: number;
    isSelected: Ref<boolean>;
    toggle: () => void;
    select: (value: boolean) => void;
    selectedClass: Ref<(string | undefined)[] | false>;
    value: Ref<unknown>;
    disabled: Ref<boolean | undefined>;
    group: GroupProvide;
}

interface SlideGroupSlot {
    next: GroupProvide['next'];
    prev: GroupProvide['prev'];
    select: GroupProvide['select'];
    isSelected: GroupProvide['isSelected'];
}
declare const VSlideGroup: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            symbol: any;
            direction: string;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            modelValue: any;
            selectedClass: string;
            nextIcon: IconValue;
            prevIcon: IconValue;
            centerActive: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            modelValue: {
                type: null;
                default: undefined;
            };
            multiple: BooleanConstructor;
            mandatory: vue.PropType<boolean | "force">;
            max: NumberConstructor;
            selectedClass: {
                type: vue.PropType<string>;
                default: string;
            };
            disabled: BooleanConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            centerActive: BooleanConstructor;
            direction: {
                type: StringConstructor;
                default: string;
            };
            symbol: {
                type: null;
                default: InjectionKey<GroupProvide>;
            };
            nextIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            prevIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            showArrows: {
                type: (StringConstructor | BooleanConstructor)[];
                validator: (v: any) => boolean;
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prev" | "v-slot:next">>> & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "symbol" | "direction" | "disabled" | "multiple" | "tag" | "modelValue" | "selectedClass" | "nextIcon" | "prevIcon" | "centerActive">;
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
        $emit: (event: "update:modelValue", value: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            modelValue: {
                type: null;
                default: undefined;
            };
            multiple: BooleanConstructor;
            mandatory: vue.PropType<boolean | "force">;
            max: NumberConstructor;
            selectedClass: {
                type: vue.PropType<string>;
                default: string;
            };
            disabled: BooleanConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            centerActive: BooleanConstructor;
            direction: {
                type: StringConstructor;
                default: string;
            };
            symbol: {
                type: null;
                default: InjectionKey<GroupProvide>;
            };
            nextIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            prevIcon: {
                type: vue.PropType<IconValue>;
                default: string;
            };
            showArrows: {
                type: (StringConstructor | BooleanConstructor)[];
                validator: (v: any) => boolean;
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prev" | "v-slot:next">>> & {
            "onUpdate:modelValue"?: ((value: any) => any) | undefined;
        }, {
            selected: vue.Ref<readonly number[]>;
            scrollTo: (location: 'prev' | 'next') => void;
            scrollOffset: vue.Ref<number>;
            focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (value: any) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prev" | "v-slot:next">, string, {
            symbol: any;
            direction: string;
            disabled: boolean;
            multiple: boolean;
            tag: string;
            modelValue: any;
            selectedClass: string;
            nextIcon: IconValue;
            prevIcon: IconValue;
            centerActive: boolean;
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
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
        modelValue: {
            type: null;
            default: undefined;
        };
        multiple: BooleanConstructor;
        mandatory: vue.PropType<boolean | "force">;
        max: NumberConstructor;
        selectedClass: {
            type: vue.PropType<string>;
            default: string;
        };
        disabled: BooleanConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        centerActive: BooleanConstructor;
        direction: {
            type: StringConstructor;
            default: string;
        };
        symbol: {
            type: null;
            default: InjectionKey<GroupProvide>;
        };
        nextIcon: {
            type: vue.PropType<IconValue>;
            default: string;
        };
        prevIcon: {
            type: vue.PropType<IconValue>;
            default: string;
        };
        showArrows: {
            type: (StringConstructor | BooleanConstructor)[];
            validator: (v: any) => boolean;
        };
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:prev" | "v-slot:next">>> & {
        "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        selected: vue.Ref<readonly number[]>;
        scrollTo: (location: 'prev' | 'next') => void;
        scrollOffset: vue.Ref<number>;
        focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    modelValue: {
        type: null;
        default: undefined;
    };
    multiple: BooleanConstructor;
    mandatory: vue.PropType<boolean | "force">;
    max: NumberConstructor;
    selectedClass: {
        type: vue.PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    centerActive: BooleanConstructor;
    direction: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: null;
        default: InjectionKey<GroupProvide>;
    };
    nextIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: vue.PropType<IconValue>;
        default: string;
    };
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:prev" | "v-slot:next">>> & {
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}, {
    selected: vue.Ref<readonly number[]>;
    scrollTo: (location: 'prev' | 'next') => void;
    scrollOffset: vue.Ref<number>;
    focus: (location?: 'next' | 'prev' | 'first' | 'last') => void;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (value: any) => boolean;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:prev" | "v-slot:next">, string, {
    symbol: any;
    direction: string;
    disabled: boolean;
    multiple: boolean;
    tag: string;
    modelValue: any;
    selectedClass: string;
    nextIcon: IconValue;
    prevIcon: IconValue;
    centerActive: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<{
        default: [SlideGroupSlot];
        prev: [SlideGroupSlot];
        next: [SlideGroupSlot];
    }>;
});
declare type VSlideGroup = InstanceType<typeof VSlideGroup>;

declare const VSlideGroupItem: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            disabled: boolean;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            value: null;
            disabled: BooleanConstructor;
            selectedClass: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default">>> & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "disabled">;
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
        $emit: (event: "group:selected", val: {
            value: boolean;
        }) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            value: null;
            disabled: BooleanConstructor;
            selectedClass: StringConstructor;
        }, "$children" | "v-slots" | "v-slot:default">>> & {
            "onGroup:selected"?: ((val: {
                value: boolean;
            }) => any) | undefined;
        }, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
            [key: string]: any;
        }>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'group:selected': (val: {
                value: boolean;
            }) => boolean;
        }, "$children" | "v-slots" | "v-slot:default">, string, {
            disabled: boolean;
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
        $nextTick: typeof vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & Readonly<vue.ExtractPropTypes<Omit<{
        value: null;
        disabled: BooleanConstructor;
        selectedClass: StringConstructor;
    }, "$children" | "v-slots" | "v-slot:default">>> & {
        "onGroup:selected"?: ((val: {
            value: boolean;
        }) => any) | undefined;
    } & vue.ShallowUnwrapRef<() => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[] | undefined> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
}, "$children" | "v-slots" | "v-slot:default">>> & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>[] | undefined, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'group:selected': (val: {
        value: boolean;
    }) => boolean;
}, "$children" | "v-slots" | "v-slot:default">, string, {
    disabled: boolean;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<{
        default: [
            {
                isSelected: UnwrapRef<GroupItemProvide['isSelected']>;
                select: GroupItemProvide['select'];
                toggle: GroupItemProvide['toggle'];
                selectedClass: UnwrapRef<GroupItemProvide['selectedClass']>;
            }
        ];
    }>;
});
declare type VSlideGroupItem = InstanceType<typeof VSlideGroupItem>;

export { VSlideGroup, VSlideGroupItem };
