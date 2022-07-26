/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {

    // Set initial longest palindrome (longPal) to the first letter of the string
    let longPal = s[0]
    
    // GO through each character, then check outwards from each in both odd and even configs
    for(i=0; i<s.length; i++) {
        
        // ODD LENGTHS
        let a = i, b = i
        while(a >= 0 && b < s.length && s[a] === s[b]) {
            a--
            b++
        }
        if ((b-1) - (a+1) + 1 > longPal.length) {
            longPal = s.slice(a+1, b)
        }
        
        //EVEN LENGTHS
        a = i, b = i+1
        while(a >= 0 && b < s.length && s[a] === s[b]) {
            a--
            b++
        }
        if ((b-1) - (a+1) + 1 > longPal.length) {
            longPal = s.slice(a+1, b)
        }
            
    }
    return longPal
};










/* var longestPalindrome = function(s) {
    //if the string itself is a palindrome, it must be the longest
    if(s === s.split("").reverse().join("")) return s
    
    let longPal = s[0]
    
    for(i=0;i<s.length; i++) {
        for(j=i+1; j<s.length; j++) {
            let temp = s.split("").slice(i,j+1).join("")
            let tempRev = s.split("").slice(i,j+1).reverse().join("")
            // console.log(temp, tempRev)
 
            if(temp===tempRev && temp.length > longPal.length) {
                longPal = temp
                // console.log("NEW LONG PAL: ", longPal)
            } 
        }
    }
    return longPal
};
*/

// THE ABOVE WORKS AS A BRUTE FORCE METHOD, BUT SUPER LONG STRINGS WILL EXCEED TIME LIMITS
// TRY: 
// Check char at s[a], starting with a=0
// Scan through string s for next instance (b) of s[a], 
// for(i=1; i<(b-a)/2; i++) compare s[a+i] === s[b-i]
// IF THEY MATCH, continue with s[a+2] === s[i-2] and so on 
// until cross midpoint of substring ((b-a)/2). If still a match, record slice(a,b+1) as new longPal
// (FOR CODE WITH CONSOLE.LOGs, SEE ALL THE WAY BELOW)



// var longestPalindrome = function(s) {

//     // Set initial longest palindrome (longPal) to the first letter of the string
//     let longPal = s[0]
    
//     // Special case: check if starting string is palindrome by split in half, flip second half
//     let backHalf = s.slice(Math.floor(s.length/2))
//     console.log(s.length, backHalf.length, backHalf)
//     if (backHalf.split("").reverse().join("") === s.slice(0,Math.floor(s.length/2))) return s
    
//     // For each character (a) in string, scan for each next instance of that character (b)
//     for (a=0; a<s.length; a++) {
//         for (b=a+1; b<s.length; b++) {
            
//             // When a match for s[a] === s[b] is found...
//             if(s[a] === s[b]) {
                
//                 let isPal = false                
                
//                 // Special case: if chars are only 1 away (i.e. "xx") then must be palindrome
//                 if (b===a+1) isPal = true

//                 // ...use increment counter (i) to scan inwards from each char until the middle is reached ((b-a)/2)
//                 for (i=1; i<=(b-a)/2; i++) {
                    
//                     // At any point, if the current char pair doesn't match, break the loop
//                     if(s[a+i] !== s[b-i]) break;
                    
//                     // If (i) reaches the center marker, it must be a palindrome 
//                     if(i+1>=(b-a)/2) isPal = true
//                 }
                
//                 // Take the slice of that substring. If longer than current longPal, set new substring.
//                 let temp = s.split("").slice(a,b+1).join("")
//                 if(isPal && temp.length > longPal.length) longPal = temp
//             }
//         }
//     }
//     return longPal
// };



///////////////// WITH CONSOLE LOGS, BELOW: ////////////////////
/*
var longestPalindrome = function(s) {

    // Set initial longest palindrome (longPal) to the first letter of the string
    let longPal = s[0]
    
    // For each character (a) in string, scan for each next instance of that character (b)
    for (a=0; a<s.length; a++) {
        for (b=a+1; b<s.length; b++) {
            
            // When a match for s[a] === s[b] is found...
            if(s[a] === s[b]) {
                console.log(s[a],s[b],a,b)
                
                let isPal = false
                
                // Special case: if chars are only 1 away (i.e. "xx") then must be palindrome
                if (b===a+1) isPal = true

                // ...use increment counter (i) to scan inwards from each char until the middle is reached ((b-a)/2)
                for (i=1; i<=(b-a)/2; i++) {
                    console.log("CHECKING: ",s[a+i], s[b-i])
                    
                    // At any point, if the current char pair doesn't match, break the loop
                    if(s[a+i] !== s[b-i]) break;
                    
                    // If (i) reaches the center marker, it must be a palindrome 
                    if(i+1>=(b-a)/2) {
                        console.log("DONE")
                        isPal = true
                    }
                }
                // Take the slice of that substring. If longer than current longPal, set new substring.
                let temp = s.split("").slice(a,b+1).join("")
                if(isPal && temp.length > longPal.length) {
                    longPal = temp
                    console.log("NEW:", longPal)
                }           
            }
        }
    }
    return longPal
};
*/