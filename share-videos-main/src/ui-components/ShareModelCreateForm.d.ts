/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShareModelCreateFormInputValues = {
    videoId?: string;
    URL?: string;
    domain?: string;
    name?: string;
    clientId?: string;
    pageId?: string;
};
export declare type ShareModelCreateFormValidationValues = {
    videoId?: ValidationFunction<string>;
    URL?: ValidationFunction<string>;
    domain?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    clientId?: ValidationFunction<string>;
    pageId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShareModelCreateFormOverridesProps = {
    ShareModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    videoId?: PrimitiveOverrideProps<TextFieldProps>;
    URL?: PrimitiveOverrideProps<TextFieldProps>;
    domain?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    clientId?: PrimitiveOverrideProps<TextFieldProps>;
    pageId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShareModelCreateFormProps = React.PropsWithChildren<{
    overrides?: ShareModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShareModelCreateFormInputValues) => ShareModelCreateFormInputValues;
    onSuccess?: (fields: ShareModelCreateFormInputValues) => void;
    onError?: (fields: ShareModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShareModelCreateFormInputValues) => ShareModelCreateFormInputValues;
    onValidate?: ShareModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShareModelCreateForm(props: ShareModelCreateFormProps): React.ReactElement;
