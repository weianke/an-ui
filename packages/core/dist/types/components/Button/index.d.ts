export declare const AnButton: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        nativeType: {
            type: import('vue').PropType<import('./types').NativeType>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        round: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: import('vue').ComputedRef<boolean>;
        size: import('vue').ComputedRef<string>;
        type: import('vue').ComputedRef<string>;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (val: MouseEvent) => void;
    }, import('vue').PublicProps, {
        tag: string | import('vue').Component;
        nativeType: import('./types').NativeType;
        useThrottle: boolean;
        throttleDuration: number;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        icon: {
            type: import('vue').PropType<string>;
        };
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        circle: {
            type: import('vue').PropType<boolean>;
        };
        tag: {
            type: import('vue').PropType<string | import('vue').Component>;
            default: string;
        };
        nativeType: {
            type: import('vue').PropType<import('./types').NativeType>;
            default: string;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
        loading: {
            type: import('vue').PropType<boolean>;
        };
        plain: {
            type: import('vue').PropType<boolean>;
        };
        round: {
            type: import('vue').PropType<boolean>;
        };
        loadingIcon: {
            type: import('vue').PropType<string>;
        };
        autofocus: {
            type: import('vue').PropType<boolean>;
        };
        useThrottle: {
            type: import('vue').PropType<boolean>;
            default: boolean;
        };
        throttleDuration: {
            type: import('vue').PropType<number>;
            default: number;
        };
    }>> & Readonly<{
        onClick?: ((val: MouseEvent) => any) | undefined;
    }>, {
        ref: import('vue').Ref<HTMLButtonElement | void>;
        disabled: import('vue').ComputedRef<boolean>;
        size: import('vue').ComputedRef<string>;
        type: import('vue').ComputedRef<string>;
    }, {}, {}, {}, {
        tag: string | import('vue').Component;
        nativeType: import('./types').NativeType;
        useThrottle: boolean;
        throttleDuration: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    icon: {
        type: import('vue').PropType<string>;
    };
    size: {
        type: import('vue').PropType<import('./types').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('./types').ButtonType>;
    };
    circle: {
        type: import('vue').PropType<boolean>;
    };
    tag: {
        type: import('vue').PropType<string | import('vue').Component>;
        default: string;
    };
    nativeType: {
        type: import('vue').PropType<import('./types').NativeType>;
        default: string;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
    loading: {
        type: import('vue').PropType<boolean>;
    };
    plain: {
        type: import('vue').PropType<boolean>;
    };
    round: {
        type: import('vue').PropType<boolean>;
    };
    loadingIcon: {
        type: import('vue').PropType<string>;
    };
    autofocus: {
        type: import('vue').PropType<boolean>;
    };
    useThrottle: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    throttleDuration: {
        type: import('vue').PropType<number>;
        default: number;
    };
}>> & Readonly<{
    onClick?: ((val: MouseEvent) => any) | undefined;
}>, {
    ref: import('vue').Ref<HTMLButtonElement | void>;
    disabled: import('vue').ComputedRef<boolean>;
    size: import('vue').ComputedRef<string>;
    type: import('vue').ComputedRef<string>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (val: MouseEvent) => void;
}, string, {
    tag: string | import('vue').Component;
    nativeType: import('./types').NativeType;
    useThrottle: boolean;
    throttleDuration: number;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: Readonly<Record<string, any>> & Record<string, any>;
}) & import('vue').Plugin;
export declare const AnButtonGroup: {
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        size: {
            type: import('vue').PropType<import('./types').ButtonSize>;
        };
        type: {
            type: import('vue').PropType<import('./types').ButtonType>;
        };
        disabled: {
            type: import('vue').PropType<boolean>;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
    size: {
        type: import('vue').PropType<import('./types').ButtonSize>;
    };
    type: {
        type: import('vue').PropType<import('./types').ButtonType>;
    };
    disabled: {
        type: import('vue').PropType<boolean>;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
}) & import('vue').Plugin;
export * from './types';
