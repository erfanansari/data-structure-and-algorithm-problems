function addUpTo(n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        total += 1
    }
    return total
}

function _addUpTo(n) {
    return (n * (n + 1)) / 2
}

const t1 = performance.now()
addUpTo(1_000_000_000)
const t2 = performance.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
