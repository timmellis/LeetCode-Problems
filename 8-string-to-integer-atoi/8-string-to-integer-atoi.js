/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let arr = s.trimStart().split("")
    let p = 1
    if(arr[0]==="-") p *= -1
    if(arr[0]==="-" || arr[0]==="+") arr.shift()
    
    if(isNaN(parseInt(arr[0]))) return 0
    
    let res = parseInt(arr.join("")) * p

    if (isNaN(res)) return 0
    else if (res > (2**31)-1) return (2**31)-1
    else if (res < (-2)**31) return (-2)**31
    else return res
};