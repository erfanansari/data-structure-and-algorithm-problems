function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}
// logAtLeast5(3)

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

// logAtMost5(50)

// simple operations => O(1)
// loops => O(N)
// recursion => O(logN)
// nested loops => O(N^2)

const arr = [
    { value: 'filan', label: 'Filan', type: 'Crypto' },
    { value: 'bisar', label: 'Bisar', type: 'Crypto' },
    { value: 'test', label: 'Test', type: 'Stock' },
    { value: 'this', label: 'This', type: 'Stock' },
]

function groupBy2(xs, prop) {
    var grouped = {}
    for (var i = 0; i < xs.length; i++) {
        var p = xs[i][prop]
        if (!grouped[p]) {
            grouped[p] = []
        }
        grouped[p].push(xs[i])
    }
    return grouped
}

const obj = groupBy2(arr, 'type')

let data = []
for (const prop in obj) {
    const temp = {
        label: prop,
        options: obj[prop].map(({ value, label }) => ({ value, label })),
    }
    data.push(temp)
}
console.log(data)
