import { isString } from '@laboratory/stdlib';

export const tryIt = (value: unknown): boolean => isString(value);
