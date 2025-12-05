import { Component, ComputedRef, Ref } from 'vue';

/**
 * Button types for styling purposes.
 */
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info" | "text";
export type ButtonSize = "small" | "medium" | "large";
export type NativeType = "button" | "submit" | "reset";
export interface ButtonProps {
    tag?: string | Component;
    type?: ButtonType;
    size?: ButtonSize;
    nativeType?: NativeType;
    disabled?: boolean;
    loading?: boolean;
    icon?: string;
    circle?: boolean;
    plain?: boolean;
    round?: boolean;
    loadingIcon?: string;
    autofocus?: boolean;
    useThrottle?: boolean;
    throttleDuration?: number;
}
export interface ButtonEmits {
    (e: "click", val: MouseEvent): void;
}
export interface ButtonInstance {
    ref: Ref<HTMLButtonElement | void>;
    disabled: ComputedRef<boolean>;
    size: ComputedRef<string>;
    type: ComputedRef<string>;
}
export interface ButtonGroupProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}
export interface ButtonGroupContext {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
}
