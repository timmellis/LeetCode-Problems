/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let max = 0, maxHeight = 0
    
    
    for(i=0; i<height.length; i++) {
        if(height[i] > maxHeight) {
            maxHeight = height[i]
            
            for(j=i+1; j<height.length; j++) {
                let h, w = j-i

                h = (height[i] <= height[j]) ? height[i] : height[j]
                // console.log(`[${i},${j}]`, height[i], height[j], h, w)

                if(h*w > max) {
                    // console.log("NEW MAX:", h*w)
                    max = h*w
                }
            }
        }
    }
    return max
};



// STRAIGHTFORWARD APPROACH
/*
var maxArea = function(height) {
    
    let max = 0
    
    for(i=0; i<height.length; i++) {
        for(j=i+1; j<height.length; j++) {
            let h, w = j-i
            
            h = (height[i] <= height[j]) ? height[i] : height[j]
            // console.log(`[${i},${j}]`, height[i], height[j], h, w)
            
            if(h*w > max) {
                // console.log("NEW MAX:", h*w)
                max = h*w
            }
        }
    }
    return max
};
*/