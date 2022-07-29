/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    let arr = []
    
    if (digits==="") return arr
    
    let nums = {
        2: ['a','b','c'],
        3: ['d','e','f'],
        4: ['g','h','i'],
        5: ['j','k','l'],
        6: ['m','n','o'],
        7: ['p','q','r','s'],
        8: ['t','u','v'],
        9: ['w','x','y','z']
    }
    
    // FOR EACH DIGIT IN GIVEN DIGIT STRING
    for (i=0; i<digits.length; i++) {
    
        // IF THIS IS THE FIRST DIGIT, JUST PUT ALL THE LETTERS IN arr
        if(i===0) arr = [...nums[digits[i]] ]
        
        // OTHERWISE...
        else {
            
            let temp = []
            
            // ...FOR EACH POSSIBLE LETTER ASSOCIATED WITH CURRENT DIGIT (i): 
            for(d=0;d<nums[digits[i]].length; d++) {
                
                // ...FOR EACH VALUE IN arr, ADD CURRENT LETTER AND PUSH TO temp
                for(v=0;v<arr.length;v++) {
                    temp.push(arr[v] + nums[digits[i]][d])
                }
            }
            
            // FINALLY, MAKE arr = temp AND RESET temp
            console.log("TEMP:",temp)
            arr=temp
            temp=[]
            
        }

        
        
    }
    console.log("ARR=",arr)
    return arr
};