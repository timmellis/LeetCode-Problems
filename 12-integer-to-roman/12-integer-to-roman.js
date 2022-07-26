/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    let res = []
    
    let arr = num.toString().split("").reverse()
    
    for (i=0; i<arr.length; i++) {
        let c = ""
        if(i===0) {
            if(arr[i] == 9) c = "IX"
            else if(arr[i] == 4) c="IV"
            else {
                if(arr[i]>=5) {
                    c="V"
                    arr[i] -= 5
                }
                for (x = arr[i]; x>0; x--) {
                    c += "I"
                }
            }
        }
        else if (i===1) {
            if(arr[i] == 9) c = "XC"
            else if(arr[i] == 4) c="XL"
            else {
                if(arr[i]>=5) {
                    c="L"
                    arr[i] -= 5
                }
                for (x = arr[i]; x>0; x--) {
                    c += "X"
                }
            }
        }
        else if (i===2) {
            if(arr[i] == 9) c = "CM"
            else if(arr[i] == 4) c="CD"
            else {
                if(arr[i]>=5) {
                    c="D"
                    arr[i] -= 5
                }
                for (x = arr[i]; x>0; x--) {
                    c += "C"
                }
            }
        }
        else {
            for (x = arr[i]; x>0; x--) {
            c += "M"
            }
        }
        
        res.push(c)
    }
    return res.reverse().join("")
};