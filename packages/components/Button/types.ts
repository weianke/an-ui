

import type { Component } from "vue";
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
}