/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []
    
    let sets = []
    nums.sort((a,b)=>a-b)
    
    for (i=0; i < nums.length-2; i++) {
        // console.log("i="+i+" (value="+nums[i]+")")
        while(i>0 && nums[i]===nums[i-1]) {
            i++ // if target value is same as previous, skip it
            // console.log("jk, did that already, i="+i+" (val="+nums[i]+")")
        }
        
        let low = i+1
        let hi = nums.length-1
        let sumTarget = nums[i]*-1
        
        while (low < hi) { 
            if(nums[low] + nums[hi] === sumTarget) {
                sets.push( [ nums[i], nums[low], nums[hi] ] )
                // console.log("Set found: [" + nums[i] +","+ nums[low] +","+ nums[hi] + "]")
                
                while(low < hi && nums[low] === nums[low+1]) low++
                while (low < hi && nums[hi] === nums[hi-1]) hi--
                low++
                hi--                    
            } 
            else if (nums[low] + nums[hi] < sumTarget) low++
            else hi--
        }        
        
    }
    return sets
};

// var threeSum = function(nums) {
//     if (nums.length < 3) return []
    
//   function arrayEquals(a, b) {
//     return Array.isArray(a) && Array.isArray(b) 
//       && a.length === b.length
//       && a.every((val, index) => val === b[index]);
//   }
    
//     let trips = []
//     for (i=0; i<nums.length-2; i++) {
//         for (j=i+1; j<nums.length-1; j++) {
//             let thisSum = nums[i] + nums[j]
//             if (nums.slice(j+1).includes(thisSum*-1)) {
//                 thisTrip = [nums[i], nums[j], thisSum*-1].sort()
//                 if (!trips.some(a => arrayEquals(a,thisTrip) ) ) trips.unshift(thisTrip)
//             }

//                         // for (k=j+1; k<nums.length; k++) {
//                         //     const thisTrip = [ nums[i], nums[j], nums[k] ]
//                         //     if ( thisTrip.reduce((a,b)=>a+b) === 0 
//                         //       && !trips.some(a=>arrayEquals(a.sort(),thisTrip.sort()))
//                         //       ) {
//                         //         trips.unshift(thisTrip)
//                         //     }
//                         // }
            
//         }
//     }
//     return trips
// };