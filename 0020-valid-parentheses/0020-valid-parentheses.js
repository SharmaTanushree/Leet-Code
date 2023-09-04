/**
 * @param {string} s
 * @return {boolean}
 */

let brackets = ['[', ']', '{', '}', '(',')'];
let closingBracket = [']','}',')'];
let openingBracket = ['[','{','('];

function isParanthisis(char){ 
  return brackets.indexOf(char)>=0;
}

function isClosingBracket(char){
     
   return closingBracket.indexOf(char) >=0;
}

function isOpenningBracket(char){
       
   return openingBracket.indexOf(char) >=0;
}

function ofSameType(first, second){
    return (openingBracket.indexOf(first) == closingBracket.indexOf(second));
}


var isValid = function(s) {
let st = []  
let isStringInvalid = false

for(let i=0; i<s.length; i++){
 let char = s[i] ;
 if(!isParanthisis(char)) continue
     if(isClosingBracket(char)){
         if (st.length>0 && ofSameType(st[st.length-1], char)){
              st.pop(); 
         }
         else{
             isStringInvalid = true;
             return !isStringInvalid
         }
     }
  
     if(isOpenningBracket(char)){
         st.push(char)
     }
  
    
}
    
    if(st.length>0) {
        isStringInvalid = true;
    }
return !isStringInvalid
  


};