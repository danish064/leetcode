/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [], right = [], middle = [];

    for (let el of arr) {
        let transformed = fn(el);
        let pivotValue = fn(pivot);

        if (transformed < pivotValue) left.push(el);
        else if (transformed > pivotValue) right.push(el);
        else middle.push(el); // Handle duplicates
    }

    return [...sortBy(left, fn), ...middle, ...sortBy(right, fn)];
};