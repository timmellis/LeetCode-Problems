/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
   
    let arr = dominoes.split("")
    let left = -1

    for(let i=0; i < arr.length; i++) {

        // IF i VALUE IS ".", SKIP TO NEXT i
        if(arr[i]==='.') {
            if(i===arr.length-1 && arr[left]==='R') {
                for (a=left; a<=i; a++) arr[a] = "R"
            }
            else continue
        }
        
        // IF i VALUE IS "L"...
        else if (arr[i]==='L') {
            
            // IF FIRST INSTANCE OR left VALUE IS "L", FILL ALL BETWEEN WITH "L"
            if(left===-1 || arr[left]==='L') {
                for(a=left; a<i; a++) { arr[a] = "L" }
            }
            // IF left VALUE IS "R", FIND MIDDLE AND REPLACE WITH "R" OR "L" FROM EITHER SIDE
            else if (arr[left]==='R') {
                const half = Math.ceil((i-left)/2)
                for(a=0; a<half; a++) { 
                    arr[left+a] = "R"
                    arr[i-a] = "L"
                }
            }
        }
        
        // IF i VALUE IS "R"...
        else if (arr[i]==='R') {
            // IF FIRST INSTANCE OR left VALUE IS "L", DO NOTHING
            if(left===-1 || arr[left]==='L') {null}
            
            // IF left VALUE IS "R", FILL ALL BETWEEN WITH "R"
            else if(arr[left]==='R') {
                for(a=left; a<i; a++) { arr[a] = "R" }
            }
        }
        
        // IF NOT SKIPPED, RESET left TO CURRENT i
        left = i
    }
    
    return arr.join("")
};




// var pushDominoes = function(dominoes) {
   
//     let arr = dominoes.split("")
    
//     if(arr.indexOf(".") >= 0) {
//         console.log("IS A DOT", arr, arr.indexOf("."))
        
//         for(i=0; i<arr.length; i++) {
//             if(arr[i]===".") {
//                 if(i>0 && i<arr.length && arr[i-1]==="R" && arr[i+1]==="L") arr[i] = "N"
//                  else if(i<arr.length && arr[i+1]==="L") arr[i] = "L"
//                  else if(i>0 && arr[i-1]==="R") arr[i] = "R"
//                 else arr[i] = "N"
                
//                 console.log("AFTER CHANGE",arr)
//             }
//         }

//     } else {
//         console.log("NO DOT, mapping...", arr.map(a => a==="N" ? "." : a).join(""))
//         return arr.map(a => a==="N" ? "." : a).join("")        
//     }
//     // return pushDominoes(arr.join(""))
// };