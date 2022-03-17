/*Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

*/

let myAtoi = function(s) {
    let isNegative=false;
    let strNumber= s.trim()
    let finalString= ""; 
    let counter = 0; 

    if(strNumber.charAt(0) == "-"){
        if(strNumber.length == 1){
            return 0;
        }
        isNegative=true;
        counter++;        
    }
    if(strNumber.charAt(0) == "+"){
        if(strNumber.length == 1){
            return 0;
        }
        counter++;
    }


    if(isNaN(strNumber.charAt(counter)) || strNumber.charAt(counter) ==" " || strNumber.length == 0 ){
        return 0 ; 
    }

    while (counter<strNumber.length && isNaN(strNumber.charAt(counter)) ==false && strNumber.charAt(counter)!=" " ){
            finalString += strNumber.charAt(counter);
            counter++; 
        }
   
    
    result = parseInt(finalString);
    if(isNegative){
        result = result*-1;
    }
    if(result<-(2**31) || result>(2**31)-1){
        if(isNegative){
            result = -(2**31);
        }
        else{
            result = (2**31)-1;
        }
    }

    return result ;
};
// console.log(-(2**31) , (2**31)-1);
console.log(myAtoi("4193 with words"));
console.log(myAtoi("-2147483649"));
console.log(myAtoi("2147483648"));
console.log(myAtoi(" 4 7 "));
console.log(myAtoi("   -48"));
console.log(myAtoi("   "));

// console.log(isNaN(" "));