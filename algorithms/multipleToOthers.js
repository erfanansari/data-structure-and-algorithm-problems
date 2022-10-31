function multipleToOthers(arr) {
    let multiplied = 1
    for (const el of arr) {
        multiplied *= el
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = multiplied / arr[i]
    }
    return arr
}

console.log(multipleToOthers([1, 2, 3, 4, 5])) // [120, 60, 40, 30, 24])
console.log(multipleToOthers([9, 8, 5])) // [40, 45, 72]
