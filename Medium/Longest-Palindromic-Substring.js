var isPanlindrome = function(j){
    if(j.length === 0 || j.length === 1 )return true
    if(j[0] !== j[j.length-1]) return false
    return isPanlindrome(j.substring(1,j.length-1))
}

var longestPalindrome = function(s) {
    if(isPanlindrome(s)) return s
    let maxSub = s[0];
    for(let i = 0; i < s.length ; i ++){
        for(let p = 1; p < s.length+1 ; p ++){
            let cur = s.substr(i,p)
            let bool = isPanlindrome(cur)
            if(bool || cur.length === 1) {
                if(maxSub.length < cur.length){
                    maxSub = cur
                }
            }
        }
    }
    return maxSub
};

//-----------------Other's Answer------------------
// var longestPalindrome = function(s) {
//     if (s.length < 2) return s;
//     let max = '';
//     for (let i = 0; i < s.length; i++) {
//       let left = helper(i, i, s);
//       let right = helper(i, i + 1, s);
//       let currMax = left.length >= right.length ? left : right;
//       max = currMax.length > max.length ? currMax : max;
//     }
    
//     return max;
//   };
  
//   function helper(left, right, s) {
//     let curr = '';
  
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       curr = s.substring(left, right + 1);
//       left -= 1;
//       right += 1;
//     }
    
//     return curr;
//   }