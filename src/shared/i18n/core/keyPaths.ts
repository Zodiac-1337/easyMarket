type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

export type KeyPaths<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? K | Join<K, KeyPaths<T[K]>>
        : K;
    }[keyof T & string]
  : never;
