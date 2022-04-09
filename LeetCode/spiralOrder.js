/*Given an m x n matrix, return all elements of the matrix in spiral order
example: 
    Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
    Output: [1,2,3,6,9,8,7,4,5]

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100*/



var spiralOrder = function(matrix) {

let xBoundry = matrix[0].length;
let xStart = 0;
let yStart = 0; 
let yBoundry = matrix.length;
let result = [];
let pass = 0;
let totalPasses=0

if (matrix.length==1){
    return matrix[0];
}

if(matrix.length-1<2){
    totalPasses = 3;
   
}
else if(matrix.length<matrix[0].length){
    totalPasses = ((matrix.length-1)*2)+2;
}
else if (matrix.length>matrix[0].length){
    totalPasses = ((matrix[0].length-1)*2) +2;
}
else{
   totalPasses = ((matrix[0].length-1)*2) +1;
}

while(pass<totalPasses){

    if(pass%4==0){//moving right
        for(i = xStart; i<xBoundry;i++){
            //take through width of array pointer;
            result.push(matrix[yStart][i]);
        }
        yStart++;
        
    }

    if(pass%4==1){//moving down
        for(let i = yStart; i< yBoundry;i++){
            //take through width of array pointer;
            result.push(matrix[i][xBoundry-1]);
        }
        xBoundry--;       
    }

    if(pass%4==2){ // moving left
        for(let i = xBoundry-1; i>= xStart;i--){
            //take through width of array pointer;
            result.push(matrix[yBoundry-1][i]);
        }
        
        yBoundry--;        
    }

    if(pass%4==3){// moving up
        for(let i = yBoundry-1; i>= yStart;i--){
            //take through width of array pointer;
            result.push(matrix[i][xStart]);
        }
        xStart++;
              
    }
    pass++;
}
    return result;
}

// console.log(spiralOrder([[2,5,8],[4,0,-1]]));
console.log(spiralOrder(
    [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));

console.log(0%4);
console.log(1%4);
console.log(2%4);
console.log(3%4);
console.log(4%4);
console.log(5%4);