export type Union<TName extends string, TValue extends string = TName> = { [value in TName]: TValue };

export type CapitalizedUnion<TName extends string, TValue extends string = TName> = Union<TName, Capitalize<TValue>>;
export type LowercasedUnion<TName extends string, TValue extends string = TName> = Union<TName, Lowercase<TValue>>;

export type UncapitalizedUnion<TName extends string, TValue extends string = TName> = Union<
    TName,
    Uncapitalize<TValue>
>;

export type UppercasedUnion<TName extends string, TValue extends string = TName> = Union<TName, Uppercase<TValue>>;
