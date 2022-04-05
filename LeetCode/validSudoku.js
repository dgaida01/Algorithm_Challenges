/*
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
     let x=0;
     let y=0;
    let check = new Set();

    // confirm unique rows
    for(;y<9;y++){
        for(x=0;x<9;x++){
            if(board[y][x] !='.'){
                if(check.has(board[y][x])){
                    return false;
                }
                else{
                    check.add(board[y][x]);
                }
            }
        }
        check.clear();
    }

    //confirm unique columns
    x=0;
    y=0;
    for(;x<9;x++){
        for(y=0;y<9;y++){
            if(board[y][x] !='.'){
                if(check.has(board[y][x])){
                    return false;
                }
                else{
                    check.add(board[y][x]);
                }
            }
        }
        check.clear();
    }

// check each sub section for uniqueness
    x=0;
    y=0;
    depth=0;
while(depth<9){
    do{    
        do{
            if(board[y][x] !='.'){
                if(check.has(board[y][x])){
                    return false;
                }
                else{
                    check.add(board[y][x]);
                    x++;
                }
            }
            else{
                x++;
            }           
        }
        while(x%3!=0)
        y++;
        x=depth;
        if(y%3==0){
            check.clear();
            if(y%9==0){
                depth=depth+3;
                y=0;
                x=depth;
            }
        }
    }
    while(y%3!=0)
    }

    return true;
};

console.log(0%3);
console.log(1%3);
console.log(2%3);
console.log(3%9);

let board = 
[[".",".","4",".",".",".","6","3","."],
 [".",".",".",".",".",".",".",".","."],
 ["5",".",".",".",".",".",".","9","."],
 [".",".",".","5","6",".",".",".","."],
 ["4",".","3",".",".",".",".",".","1"],
 [".",".",".","7",".",".",".",".","."],
 [".",".",".","5",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."],
 [".",".",".",".",".",".",".",".","."]];
console.log(isValidSudoku(board)); 
console.log(board[0].length);
let board2= 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board2)); 