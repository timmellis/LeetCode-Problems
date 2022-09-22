/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false
    
    sArr = s.split("").sort()
    tArr = t.split("").sort()
    
    for(i=0; i<s.length; i++) {
        if(sArr[i] !== tArr[i]) return false
        // if(s.split("").sort()[i] !== t.split("").sort()[i]) return false
    }
    return true   
};