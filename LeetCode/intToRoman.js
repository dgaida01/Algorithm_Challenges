



var intToRoman = function(num) {
    let convert = {1:"I",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L", 90:"XC", 100:"C",400:"CD",500:"D",900:"CM",1000:"M"};
    let strNum = num.toString();
    let tens =  Math.max(1,10**(strNum.length-1));
    let result = ""; 

    for(let i=0; i<strNum.length; i++){
        let idx = parseInt(strNum.charAt(i));
        let testNum = tens * strNum.charAt(i) 
        
        if( idx>1 && idx<4){
            while (testNum>=1*tens){
                result+= convert[1*tens]
                testNum-=(1*tens)
            }            
        }
        if(idx>5 && idx<9){
            result+=convert[5*tens]
            testNum-=tens *5 ;
            while (testNum>=1*tens){
                result+= convert[1*tens]
                testNum-=(1*tens)
            }     
        }
        if(idx ==1 || idx ==4 || idx==5 || idx==9){
            result+= convert[idx*tens]
        }


        tens= tens/10;
        if(tens==0){
            tens=1;
        }

    }
    return result;
};

console.log(intToRoman(1994));