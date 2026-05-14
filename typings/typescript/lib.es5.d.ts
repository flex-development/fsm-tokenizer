declare global {
  interface ArrayConstructor {
    /**
     * Check if `value` is an array.
     *
     * @template {any} T
     *  The array item type
     *
     * @param {unknown} value
     *  The value to check
     * @return {value is ReadonlyArray<T> | T[]}
     *  `true` if `value` is an array, `false` otherwise
     */
    isArray<T>(value: unknown): value is T[] | readonly T[]
  }
}

export {}
