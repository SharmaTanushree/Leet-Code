/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = [...new Set(nums)];
    nums.splice(0,nums.length,...n);
    return n.length;

};