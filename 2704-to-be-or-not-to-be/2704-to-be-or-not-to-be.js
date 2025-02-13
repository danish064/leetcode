/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const value = val;
    const toBe = (newVal) => {
        if (newVal === value) {
            return true;
        }
        throw new Error("Not Equal");
    }
    const notToBe = (newVal) => {
        if (newVal !== value) {
            return true;
        }
        throw new Error('Equal');
    }
    return { toBe, notToBe };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */