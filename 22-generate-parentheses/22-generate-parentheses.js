/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr = []
    for(i=0;i<n;i++) {
        
        if(i===0) arr.push("()")
        
        else {
            let tempArr = []
            
            for(j=0;j<arr.length;j++) {
                let str = arr[j]
                
                for(a=0;a<=str.length;a++) {
                    const current = str.slice(0,a) + "()" + str.slice(a)
                    if(!tempArr.includes(current)) tempArr.push(current)
                }
            }
            arr = tempArr
        }
    }
    // return arr.sort()
    return arr
};

/*

n=1
["()"]

n=2
["()()","(())"]
//Working:  ["()()","(())","()()"x]

n=3
["()(())","(()())","((()))","(())()","()()()"]
// Working: ["()(())","(()())","((()))","(()())"x,"(())()",
            "()()()","(())()"x,"()()()"x,"()(())"x,"()()()"x,]

n=4
// Working: ["()()(())","(())(())","x()()(())","()(()())","()((()))","()(()())x","()(())()",
            "()(()())x","(()()())","((())())","(()()x())","(()(()))","(()()()x)","(()())()",
            "((()))",
            "(())()",
            "()()()"]

*/