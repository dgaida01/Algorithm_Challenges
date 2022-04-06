var rotate = function (matrix){

    transpose(matrix);
    reflect(matrix);


}


let transpose = function (matrix){

    let n = matrix.length;
    for(i=0 ; i<n; i++){
        for(j=i+1; j<n; j++){
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
}

let reflect = function (matrix){

    let n = matrix.length; 
    for(let i=0; i < n ; i ++){
        for (let j = 0; j< n/2; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][n-j-1];
            matrix[i][n-j-1]= temp;
        }
    }
}