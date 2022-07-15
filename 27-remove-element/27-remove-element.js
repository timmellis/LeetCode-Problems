/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=nums.length
    for(i=0; i<nums.length; i++) {
        if(nums[i]===val) {
            nums.splice(i,1,"_")
            k--
        }
    }
    nums.sort()
    
    console.log(nums, k)
    return k
    
};