/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let nState = n;

    return function() {
        nState = nState + 1;

        return nState - 1;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */