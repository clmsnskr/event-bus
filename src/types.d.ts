declare module 'deep-equal' {
  interface DeepEqualOptions {
    strict: boolean;
  }

  function deepEqual(actual: any, expected: any, opts?: DeepEqualOptions): boolean;

  export = deepEqual;
}
