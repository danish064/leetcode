/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let group = {};
    for (let i = 0; i < this.length; i++) {
        let curr_id = fn(this[i]);
        if (group.hasOwnProperty(curr_id)) {
            group[curr_id].push(this[i]);
        } else {
            group[curr_id] = new Array();
            group[curr_id].push(this[i])
        }
    }
    return group;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */