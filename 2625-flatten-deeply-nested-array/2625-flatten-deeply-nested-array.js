/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let flat_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object' && n != 0) {
            flat_arr.push(...flat(arr[i], n - 1));
        } else {
            flat_arr.push(arr[i]);
        }
    }
    return flat_arr;
};