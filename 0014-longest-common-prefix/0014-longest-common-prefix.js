/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let value = strs[0];
    let len = value.length;
    
    for(let i=len; i>0; i--){
        
      let  str1 = value.slice(0,i);
      //let str2 = value.slice(-i);
      
      if(strs.every(e=>e.startsWith(str1))) return str1;
      //if(strs.every(e=>e.includes(str2))) return str2; 
        
    }
     
    return "";
};