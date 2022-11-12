// @errors: 2344
// ---cut---

import { Equal, Expect } from '@type-challenges/utils'

// Implement this type
type ReturnOf<F extends (...args: any[]) => void> = F extends {
    (...args: any[]): infer RT
}
    ? RT
    : never

// Tests

const flipCoin = () => (Math.random() > 0.5 ? 'heads' : 'tails')
const rockPaperScissors = (arg: 1 | 2 | 3) => {
    return arg === 1
        ? ('rock' as const)
        : arg === 2
        ? ('paper' as const)
        : ('scissors' as const)
}

type cases = [
    // simple 1
    Expect<Equal<boolean, ReturnOf<() => boolean>>>,
    // simple 2
    Expect<Equal<123, ReturnOf<() => 123>>>,
    Expect<Equal<ComplexObject, ReturnOf<() => ComplexObject>>>,
    Expect<Equal<Promise<boolean>, ReturnOf<() => Promise<boolean>>>>,
    Expect<Equal<() => 'foo', ReturnOf<() => () => 'foo'>>>,
    Expect<Equal<'heads' | 'tails', ReturnOf<typeof flipCoin>>>,
    Expect<
        Equal<'rock' | 'paper' | 'scissors', ReturnOf<typeof rockPaperScissors>>
    >,
    Expect<
        Equal<
            'rock' | 'paper' | 'scissors',
            ReturnType<typeof rockPaperScissors>
        >
    >,
]

type ComplexObject = {
    a: [12, 'foo']
    bar: 'hello'
    prev(): number
}
