export const isString = (value: unknown): value is string => typeof value === 'string';

export const isNotUndefinedOrEmpty = (value: string | undefined): value is string => !isUndefinedOrEmpty(value);

export const isNotUndefinedOrWhiteSpace = (value: string | undefined): value is string =>
    !isUndefinedOrWhiteSpace(value);

export const isUndefinedOrEmpty = (value: string | undefined): value is undefined | '' =>
    value === undefined || value === '';

export const isUndefinedOrWhiteSpace = (value: string | undefined): value is undefined | '' =>
    value === undefined || value.trim() === '';
