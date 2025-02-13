/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount != this.length) return new Array();



    // for (let r = 0; r < rowsCount; r++) {

    //     for (let c = 0; c < colsCount; c++) {

    //     }
    // }
    // const iterator = Array.prototype.values();

    let snail_arr = new Array();
    let ptr = 0;
    
    for (let r = 0; r < rowsCount; r++) {
        ptr = r;
        let oneCol = new Array();

        let c = 0;
        for (let c = 0; c < colsCount; c++) {

            oneCol.push(this[ptr]);

            // IF CURRENT VALUE FOR WAS TOP TO BOTTOM COLUMN
            if (c == 0 || c % 2 == 0) {
                ptr = ptr + (rowsCount * 2) - 1 - (r * 2);
            }
            // BOTTOM TO TOP
            else {
                ptr = ptr + 1 + (r * 2);
            }
        }
        snail_arr.push(oneCol);
    }

    return snail_arr;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */