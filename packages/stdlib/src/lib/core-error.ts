import { isString } from './string';

const convertInnerErrorToObject = (
    innerError: Error | undefined,
): CoreErrorProperties | ErrorProperties | undefined => {
    if (innerError === undefined) {
        return undefined;
    }

    if (isCoreError(innerError)) {
        return innerError.toObject();
    }

    return {
        message: innerError.message,
        stack: innerError.stack,
    };
};

export class CoreError<TCode extends string = string, TInfo = unknown> extends Error {
    code: TCode | undefined;
    info: TInfo | undefined;
    innerError: Error | undefined;

    constructor(message: string);
    constructor(code: TCode, message: string, innerError?: Error, info?: TInfo);
    constructor(codeOrMessage: TCode | string, message?: string, innerError?: Error, info?: TInfo) {
        super(isString(message) ? message : codeOrMessage);

        this.code = isString(message) ? (codeOrMessage as TCode) : undefined;
        this.info = info;
        this.innerError = innerError;
    }

    toObject(): CoreErrorProperties<TCode, TInfo> {
        return {
            code: this.code,
            info: this.info,
            innerError: convertInnerErrorToObject(this.innerError),
            message: this.message,
            stack: this.stack,
        };
    }
}

export interface CoreErrorProperties<TCode extends string = string, TInfo = unknown> extends ErrorProperties {
    code?: TCode;
    info?: TInfo;
    innerError?: CoreErrorProperties | ErrorProperties;
}

export interface ErrorProperties {
    message: string;
    stack?: string;
}

export const isCoreError = (value: unknown): value is CoreError => value instanceof CoreError;

export const isCoreErrorProperties = (value: unknown): value is CoreErrorProperties => {
    if (!isErrorProperties(value)) {
        return false;
    }

    const { code, innerError } = value as CoreErrorProperties;

    // Note: isErrorProperties check is good enough for type checking, so not recursively checking isCoreErrorProperties
    return (code === undefined || isString(code)) && (innerError === undefined || isErrorProperties(innerError));
};

export const isErrorProperties = (value: unknown): value is ErrorProperties => {
    const { message, stack } = value as ErrorProperties;

    return isString(message) && (stack === undefined || isString(stack));
};
