/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    hash = {}
    for(c of s) {
        hash[c] = (hash[c] || 0) + 1
    }
    for(c of t) {
        if(!hash[c]) return false
        else hash[c]--
    }
    return true
};


// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false
    
//     sArr = s.split("").sort()
//     tArr = t.split("").sort()

//     for(i=0; i<s.length; i++) {
//         if(sArr[i] !== tArr[i]) return false
//     }
//     return true   
// };