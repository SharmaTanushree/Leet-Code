/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
const visited={};
   const res=[];
   for(let i=0;i<nums.length;i++){
    const num = nums[i];
    const complement = target-num;
    if(visited[complement] !== undefined){       
        res.push(visited[complement]);
        res.push(i);
    } 
    visited[num]=i;
   }
      return res;
  
};