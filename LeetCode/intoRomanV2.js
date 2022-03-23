var intToRoman = function(num) {
    let roman = "";
    const convSta = {
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC : 90,
        L : 50,
        XL : 40,
        X : 10,
        IX : 9,
        V : 5,
        IV : 4,
        I : 1
    }
    for( let key in convSta){
        while(num >= convSta[key]){
            roman += key;
            num -= convSta[key];
        }
    }return roman;
};

console.log(intToRoman(58));