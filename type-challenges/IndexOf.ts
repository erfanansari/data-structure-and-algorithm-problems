// @errors: 2344
// ---cut---

import { Equal, Expect } from '@type-challenges/utils'

// Implement this type
type IndexOf<
    T extends any[],
    U extends number,
    Acc extends any[] = [],
> = T[0] extends U
    ? Acc['length']
    : T extends [infer F, ...infer R]
    ? IndexOf<R, U, [...Acc, F]>
    : -1

// Tests

type cases = [
    Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
    Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
    Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
]
