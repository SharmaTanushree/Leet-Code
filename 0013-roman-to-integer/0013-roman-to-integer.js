/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   const Romans = {
        I : 1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let result=0;
    
    for(let i=0; i<=s.length-2;i++){
      let firstChar = Romans[s[i]];
      let secondChar = Romans[s[i+1]];

        if(firstChar < secondChar){
            result -= firstChar;
        }
        else{
            result += firstChar;
        }
    }
    result += Romans[s[s.length-1]];
    return result;
};

romanToInt('XXVX');