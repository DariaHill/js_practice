/* За допомогою циклу for of пройтись по всім елементам та вивести у консоль всі рядки великими буквами. Приклад: */
const strings = ["String one", "String two", "string three"]
const strings2=[]

for(const string of strings){
    strings2.push(string.toUpperCase())
}

console.log(strings2)