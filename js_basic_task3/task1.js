let inputString="sdhhauwry";
let inputStringLenth= inputString.length;
let newString="";
for(i=0; i<=inputStringLenth-1; i++){
    let currentChar= inputString[i]
    if(currentChar ==="a"|| currentChar ==="u" || currentChar==="y" || currentChar==="o" ||currentChar==="e"){
        newString= newString+"*"
    }
    else{
        newString =newString + currentChar
}
    console.log(currentChar)
}
console.log(newString)