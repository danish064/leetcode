/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    // return Object
    // Object.prototype.toString.call(someVar) === '[object Array]'

    if (obj.constructor.name == "Array") {
        return obj.length == 0;
    } else {
        return Object.keys(obj).length == 0;
    }
};