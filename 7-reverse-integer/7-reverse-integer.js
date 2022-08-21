/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x>=0 ? 1 : -1
    const res = parseInt(x.toString().split("").reverse().join("")) * sign
    return Math.abs(res) > Math.abs(2**31-1) ? 0 : res
};