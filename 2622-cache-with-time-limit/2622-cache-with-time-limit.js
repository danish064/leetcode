var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let returnVal = false;
    const val = this.cache.get(key);

    if (val && Date.now() - val.c_time <= duration) {
        returnVal = true;
    }

    this.cache.set(
        key,
        {
            value,
            duration,
            c_time: Date.now()
        }
    )
    return returnVal;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const val = this.cache.get(key);
    if (val && Date.now() - val.c_time <= val.duration) {
        return val.value;
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let count = 0;
    this.cache.forEach((value, key, map) => {
        if (Date.now() - value.c_time <= value.duration)
            count++;
    })
    return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */