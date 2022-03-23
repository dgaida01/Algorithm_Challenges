/*The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);*/


var convert = function(s, numRows) {
    let arr=[];
    let loop=0;
    let x=0;
    let y=0;
    let changeDirection=false;
    let result="";

    if(numRows==1){
        return s;
    }
    for(let i=0; i<numRows;i++){
        arr[i] =[];
    }

    while(loop<s.length){
        
        if(y%numRows==0 && y!=0){
            changeDirection= !changeDirection;  
        }
        else{
            arr[y].push(s.charAt(loop)) ;
            y++;
            loop++; 
        }
        if(changeDirection){
          
            x=arr.length;
            while(y>0 && loop<s.length){
                y--;
                for(let i=0;i<x;i++){
                    if(y-i == 1){
                        arr[i].push(s.charAt(loop));
                        loop++
                    }
                    else if(y==1){
                     break;
                    }
                    else{
                     arr[i].push('');

                    }
                }                
                
            }
            y++;
            changeDirection = false;
            
        }
              
    }
    x=0;
    y=0;
    while(y<arr.length){
        x=0;
        while(x<arr[y].length){
            if(arr[y][x]!=undefined){
                result += arr[y][x];
            }
           x++;
        }
        y++;
    }
    return result;
};

console.log(convert("PAYPALISHIRING",3));

