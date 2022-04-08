/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n, middle;       
        while (start <= end) {
            middle = ~~((start+end)/2);
            if (isBadVersion(middle)) {
                end = middle - 1;
            }else {
                start = middle + 1;
            }
        }
        return start;
    };
};