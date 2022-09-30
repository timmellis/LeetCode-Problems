/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var findClosestElements = function(arr, k, x) {
    
    if (x <= arr[0]) return arr.slice(0,k)
    else if (x >= arr[arr.length-1]) return arr.slice(arr.length-k)
    
    
    let left = 0, right = arr.length-k
    
    while(left < right) {
        let mid = Math.floor((left + right) / 2)
//         console.log("left:",left,"right:",right, "mid:",mid,"arr[mid]:",arr[mid])
        
        if (mid == left) {
            if(Math.abs(arr[mid]-x) <= Math.abs((arr[mid+k])-x)) break;
            else left++
        }
        else {
            // console.log("compare dist of: ", arr[mid],"(",Math.abs(arr[mid]-x), ") vs:", arr[mid+k], "(", Math.abs(arr[mid+k]-x) , ")")
            if(Math.abs(arr[mid]-x) <= Math.abs((arr[mid+k])-x) ) {
                right = mid
            }
            else {
                left = mid
            }
        }
    }
    return arr.slice(left, left+k)
    
    
}

/// WORK OUT FROM TARGET METHOD:
/*
var findClosestElements = function(arr, k, x) {
    let res = []

    if (x <= arr[0]) res = arr.slice(0,k)
    else if (x >= arr[arr.length-1]) res = arr.slice(arr.length-k)
    
    else {
        let xindex
        
        if(arr.includes(x)) xindex = arr.indexOf(x)
        else {
            for(i=1;i<arr.length;i++) {
                if(arr[i-1] < x && arr[i] > x) {
                    xindex = i
                    break;
                }
            }
        }
        
        // console.log("xindex=",xindex)
        
        for(c=k; c>0; c--) {
            const a = arr[xindex-1], b = arr[xindex]
            // console.log("comparing: ", a, b)
            if(Math.abs(a-x) < Math.abs(b-x) || (Math.abs(a-x) == Math.abs(b-x) && a < b)) {
                res.push(a)
                arr = [...arr.slice(0,xindex-1), ...arr.slice(xindex)]
                xindex--
            } else {
                res.push(b)
                arr = [...arr.slice(0,xindex), ...arr.slice(xindex+1)]
            }
            if(xindex === arr.length) xindex--
            // console.log("arr=",arr, "res=",res)
        }
        res.sort((p,q)=>p-q)
    }
        
    return res
};
*/