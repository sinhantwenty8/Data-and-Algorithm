var lengthOfLastWord = function(s) {
    let touchAlpha =false
    let count = 0    
    for(let i = s.length -1 ; i >= 0 ; i--){
        if(s[i] ===" " && touchAlpha){
            return count
        }else{
            if(s[i] !== " "){
                touchAlpha = true
                count++
            }
        }
    }
    return count
};