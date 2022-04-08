/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    var start = 0;
    var end = nums.length - 1;
   
    while (start <= end) {
        var middle = ~~((start + end) / 2);
        if (nums[middle] == target) return middle;
        else if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        
    }
    return -1;
    
};