var convert = function(s, numRows) {
    let arr=[];
    let loop=0;
    let x=0;
    let y=0;
    let changeDirection=false;
    let result="";
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
            y--;
            x=arr.length;
            while(y>0 && loop<s.length){
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
                y--;
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
    console.table(arr);
    console.log(result);
};

convert("PAYPALISHIRING",4)
arr=[[1212],[1212,12],[12],[123]];

console.log(arr.length);