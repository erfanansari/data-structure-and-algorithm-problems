// @errors: 2344
// ---cut---

import { Equal, Expect, NotEqual } from '@type-challenges/utils'

// Implement this type
type Split<
    S extends string,
    SEP extends string,
> = S extends `${infer R}${SEP}${infer T}`
    ? [R, ...Split<T, SEP>]
    : S extends ''
    ? []
    : string extends S
    ? string[]
    : [S]

let hi: Split<'hello world damn', ' '>

// Tests

type cases = [
    Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
    Expect<
        Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>
    >,
    Expect<
        Equal<
            Split<'Hi! How are you?', ''>,
            [
                'H',
                'i',
                '!',
                ' ',
                'H',
                'o',
                'w',
                ' ',
                'a',
                'r',
                'e',
                ' ',
                'y',
                'o',
                'u',
                '?',
            ]
        >
    >,
    Expect<Equal<Split<'', ''>, []>>,
    Expect<Equal<Split<string, 'whatever'>, string[]>>,
]
