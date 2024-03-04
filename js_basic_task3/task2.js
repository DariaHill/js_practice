let str = "myjlife";
let strLength = str.length;
let symbol= "j";
let newString ="";
for (i=0; i<=strLength; i++){
let currentStr = str[i]
    if (currentStr === "j"){
newString+="*"
    }else{
        newString= newString+currentStr
    }
}
console.log(newString)