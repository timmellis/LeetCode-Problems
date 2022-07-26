/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    // control case, s is shorter than number of rows requires
    if (s.length < numRows || numRows<=1) return s
    
    let res = []
    for(i=0;i<numRows;i++) {
        res.push([])
    }
    
    let p = 0
    let dir = 1
    
        for(i=0; i<numRows; i=i+dir) {
            
            if(p>=s.length) {
                break
            } 
             else {
                 res[i].push(s[p])
             }
            p++
            
            if((dir===1 && i===numRows-1) || (dir===-1 && i===0)) {
                dir *= -1
            }
        }
          return res.flat().join("")
};