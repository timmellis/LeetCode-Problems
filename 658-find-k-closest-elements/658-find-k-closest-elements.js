/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let res = []
    
    // if(arr.includes(x)) {
    //     res.push(x)
    //     k--
    // }
    
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