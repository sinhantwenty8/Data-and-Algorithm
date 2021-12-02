var helper = function(input1,input2){
    let result = ""
    let pointer = 0
    while(input1[pointer] && input2[pointer]){
        if(input1[pointer] == input2[pointer])result += input1[pointer]
        else return result 
         pointer ++
    }
    return result
}

var longestCommonPrefix = function(strs) {
    if(strs.length === 1)return strs[0]
    let pointer = 0
    let result = helper(strs[pointer],strs[pointer+1])
    pointer ++
    while(pointer < strs.length-1){
        const output = helper(strs[pointer],strs[pointer+1])
        if(output <= result) result = output
        pointer ++
    }
    return result
};

//-----------------Other's Answer------------------
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return '';
//     let r = '';
//     for (let i = 0; i < strs[0].length; i++) {
//       for (let j = 1; j < strs.length; j++) {
//         if (strs[0][i] !== strs[j][i]) return r;
//       }
//       r += strs[0][i];
//     }
//     return r;
//   };
  
  