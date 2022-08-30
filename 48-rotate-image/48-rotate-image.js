/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var rotate = function(matrix) {
    const len = matrix.length
    for(let i=0; i<len; i++) {
        for(let r=len-1; r>=0; r--) {
            matrix[i].push(matrix[r][0])
            matrix[r].shift()
        }
    }
};





// var rotate = function(matrix) {
//     const len = matrix.length
//     for(let i=0; i<len; i++) {
//         let newRow = []
//         for(let r=0;r<len;r++) {
//             newRow.unshift(matrix[r][i])
//             // matrix[r][i] = null
//         }
//         matrix.push(newRow)
//     }
//     for(i=0;i<len;i++) {
//         matrix.shift()
//     }
// };