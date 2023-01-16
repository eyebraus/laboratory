export type Initializer<T> = (overrides: Partial<T>) => T;

export const Initializer =
    <T>(defaults: T): Initializer<T> =>
    (overrides: Partial<T>) => ({
        ...defaults,
        ...overrides,
    });
