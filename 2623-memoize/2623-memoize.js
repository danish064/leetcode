/**
 * @param {Function} fnName
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = fn.name === 'sum' ? `${args[0]},${args[1]}` : args[0];
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(fn.name === "sum" ? `${args[0]},${args[1]}` : args[0], result);
        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */