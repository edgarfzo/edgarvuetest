import * as vue from 'vue';
import { ComponentInternalInstance, Ref, ComputedRef, JSXComponent, PropType, VNodeChild } from 'vue';

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

interface TouchHandlers {
    start?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    end?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    move?: (wrapperEvent: {
        originalEvent: TouchEvent;
    } & TouchData) => void;
    left?: (wrapper: TouchData) => void;
    right?: (wrapper: TouchData) => void;
    up?: (wrapper: TouchData) => void;
    down?: (wrapper: TouchData) => void;
}
interface TouchData {
    touchstartX: number;
    touchstartY: number;
    touchmoveX: number;
    touchmoveY: number;
    touchendX: number;
    touchendY: number;
    offsetX: number;
    offsetY: number;
}

declare type ControlProps = {
    icon: IconValue;
    class: string;
    onClick: () => void;
    ariaLabel: string;
};
declare const VWindow: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            reverse: boolean;
            direction: string;
            disabled: boolean;
            tag: string;
            mandatory: "force";
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
        }> & Omit<Readonly<vue.ExtractPropTypes<Omit<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            continuous: BooleanConstructor;
            nextIcon: {
                type: PropType<IconValue>;
                default: string;
            };
            prevIcon: {
                type: PropType<IconValue>;
                default: string;
            };
            reverse: BooleanConstructor;
            showArrows: {
                type: (StringConstructor | BooleanConstructor)[];
                validator: (v: any) => boolean;
            };
            touch: {
                type: PropType<boolean | TouchHandlers>;
                default: undefined;
            };
            direction: {
                type: StringConstructor;
                default: string;
            };
            modelValue: null;
            disabled: BooleanConstructor;
            selectedClass: {
                type: StringConstructor;
                default: string;
            };
            mandatory: {
                default: "force";
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:additional" | "v-slot:prev" | "v-slot:next">>> & {
            "onUpdate:modelValue"?: ((v: any) => any) | undefined;
        } & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, "reverse" | "direction" | "disabled" | "tag" | "mandatory" | "touch" | "selectedClass" | "continuous" | "nextIcon" | "prevIcon">;
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
        $emit: (event: "update:modelValue", v: any) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
            theme: StringConstructor;
            tag: {
                type: StringConstructor;
                default: string;
            };
            continuous: BooleanConstructor;
            nextIcon: {
                type: PropType<IconValue>;
                default: string;
            };
            prevIcon: {
                type: PropType<IconValue>;
                default: string;
            };
            reverse: BooleanConstructor;
            showArrows: {
                type: (StringConstructor | BooleanConstructor)[];
                validator: (v: any) => boolean;
            };
            touch: {
                type: PropType<boolean | TouchHandlers>;
                default: undefined;
            };
            direction: {
                type: StringConstructor;
                default: string;
            };
            modelValue: null;
            disabled: BooleanConstructor;
            selectedClass: {
                type: StringConstructor;
                default: string;
            };
            mandatory: {
                default: "force";
            };
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:additional" | "v-slot:prev" | "v-slot:next">>> & {
            "onUpdate:modelValue"?: ((v: any) => any) | undefined;
        }, {
            group: GroupProvide;
        }, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
            'update:modelValue': (v: any) => boolean;
        }, "$children" | "v-slots" | "v-slot:default" | "v-slot:additional" | "v-slot:prev" | "v-slot:next">, string, {
            reverse: boolean;
            direction: string;
            disabled: boolean;
            tag: string;
            mandatory: "force";
            touch: boolean | TouchHandlers;
            selectedClass: string;
            continuous: boolean;
            nextIcon: IconValue;
            prevIcon: IconValue;
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
        theme: StringConstructor;
        tag: {
            type: StringConstructor;
            default: string;
        };
        continuous: BooleanConstructor;
        nextIcon: {
            type: PropType<IconValue>;
            default: string;
        };
        prevIcon: {
            type: PropType<IconValue>;
            default: string;
        };
        reverse: BooleanConstructor;
        showArrows: {
            type: (StringConstructor | BooleanConstructor)[];
            validator: (v: any) => boolean;
        };
        touch: {
            type: PropType<boolean | TouchHandlers>;
            default: undefined;
        };
        direction: {
            type: StringConstructor;
            default: string;
        };
        modelValue: null;
        disabled: BooleanConstructor;
        selectedClass: {
            type: StringConstructor;
            default: string;
        };
        mandatory: {
            default: "force";
        };
    }, "$children" | "v-slots" | "v-slot:default" | "v-slot:additional" | "v-slot:prev" | "v-slot:next">>> & {
        "onUpdate:modelValue"?: ((v: any) => any) | undefined;
    } & vue.ShallowUnwrapRef<{
        group: GroupProvide;
    }> & {} & vue.ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<Readonly<vue.ExtractPropTypes<Omit<{
    theme: StringConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
    continuous: BooleanConstructor;
    nextIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    prevIcon: {
        type: PropType<IconValue>;
        default: string;
    };
    reverse: BooleanConstructor;
    showArrows: {
        type: (StringConstructor | BooleanConstructor)[];
        validator: (v: any) => boolean;
    };
    touch: {
        type: PropType<boolean | TouchHandlers>;
        default: undefined;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    modelValue: null;
    disabled: BooleanConstructor;
    selectedClass: {
        type: StringConstructor;
        default: string;
    };
    mandatory: {
        default: "force";
    };
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:additional" | "v-slot:prev" | "v-slot:next">>> & {
    "onUpdate:modelValue"?: ((v: any) => any) | undefined;
}, {
    group: GroupProvide;
}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Omit<{
    'update:modelValue': (v: any) => boolean;
}, "$children" | "v-slots" | "v-slot:default" | "v-slot:additional" | "v-slot:prev" | "v-slot:next">, string, {
    reverse: boolean;
    direction: string;
    disabled: boolean;
    tag: string;
    mandatory: "force";
    touch: boolean | TouchHandlers;
    selectedClass: string;
    continuous: boolean;
    nextIcon: IconValue;
    prevIcon: IconValue;
}> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & (new () => {
    $props: SlotsToProps<{
        default: [{
            group: GroupProvide;
        }];
        additional: [{
            group: GroupProvide;
        }];
        prev: [{
            props: ControlProps;
        }];
        next: [{
            props: ControlProps;
        }];
    }>;
});
declare type VWindow = InstanceType<typeof VWindow>;

declare const VWindowItem: vue.DefineComponent<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'group:selected': (val: {
        value: boolean;
    }) => true;
}, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<vue.ExtractPropTypes<{
    eager: BooleanConstructor;
    value: null;
    disabled: BooleanConstructor;
    selectedClass: StringConstructor;
    reverseTransition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
    transition: {
        type: (StringConstructor | BooleanConstructor)[];
        default: undefined;
    };
}>> & {
    "onGroup:selected"?: ((val: {
        value: boolean;
    }) => any) | undefined;
}, {
    transition: string | boolean;
    eager: boolean;
    disabled: boolean;
    reverseTransition: string | boolean;
}>;
declare type VWindowItem = InstanceType<typeof VWindowItem>;

export { VWindow, VWindowItem };
