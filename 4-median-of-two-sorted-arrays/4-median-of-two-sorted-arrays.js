/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a,b)=>a-b)
    console.log(arr)
    const m = (arr.length+1)/2
    if(Number.isInteger(m)) return arr[m-1]
    else {
        let mSum = arr[Math.floor(m-1)] + arr[Math.ceil(m-1)]
        return mSum/2
    }
};