/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.*/

var isPalindrome = function(x) {
    
    let str = x.toString();
    console.log(str);
    let i=0;
    let j=str.length-1;
    while (i<j){
        if(str[i]!=str[j]){
            return false;
        }
        i++;
        j--;
    }
return true
};

console.log(isPalindrome(-121));//false
console.log(isPalindrome(121)); //true
