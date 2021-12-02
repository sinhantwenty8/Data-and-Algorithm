var addTwoNumbers = function(l1, l2) {
    let s1 =[]
    let s2 =[]
    let sum;
    while(l1){
        s1.unshift(l1.val)
        l1 = l1.next
    }
    
    while(l2){
        s2.unshift(l2.val)
        l2 = l2.next
    }
    if(true){
        let p1 = s1.length-1
        let p2 = s2.length-1
        let carry = 0
        sum = []
        while(s1[p1] >= 0 || s2[p2] >= 0){
            let acc = 0
            s1[p1] ? acc += s1[p1] : null
            s2[p2] ? acc += s2[p2] : null
            
            let smallSum = acc + carry
            carry = parseInt(smallSum/10)
            if(smallSum > 9){
                acc = smallSum % 10
                sum.unshift(acc)
            }else{
                sum.unshift(smallSum)
                
            }
            p1 --
            p2 --
        }
        if(carry !== 0)sum.unshift(carry)
        
    }
    let result = new ListNode(sum[sum.length-1]);
    let temp = result
    for(let i = sum.length-2; i >= 0; i--){
        result.next = new ListNode (sum[i])
        result = result.next
    }
    return temp
        
};