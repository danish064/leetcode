/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {

    let c_arr = new Array();
    for (let i = 0; i < arr.length; i++) {
        const curr_sub_arr = Math.floor(i / size);
        if(!c_arr[curr_sub_arr]) {
            c_arr[curr_sub_arr] = new Array();
        }
        c_arr[curr_sub_arr].push(arr[i]);
    }
    return c_arr;
};
