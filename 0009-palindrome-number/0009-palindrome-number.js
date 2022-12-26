/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x<0) return false;
    const orgString = x.toString();
    const revString = orgString.split('').reverse().join('');
    return orgString == revString;
};