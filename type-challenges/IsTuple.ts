// @errors: 2344

import { Equal, Expect } from '@type-challenges/utils'

// ---cut---

// Implement this type
type IsTuple<T> = T extends readonly any[]
    ? [...T, any]['length'] extends T['length']
        ? false
        : true
    : false // not event an array like thing

// Tests
type cases = [
    Expect<Equal<IsTuple<[]>, true>>,
    Expect<Equal<IsTuple<[number]>, true>>,
    Expect<Equal<IsTuple<readonly [1]>, true>>,
    Expect<Equal<IsTuple<{ length: 1 }>, false>>,
    Expect<Equal<IsTuple<number[]>, false>>,
]
