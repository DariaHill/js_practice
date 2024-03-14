/* Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. Кожен від 1 до 100.

В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу:

1-49 - Low performance
50-69 - Medium performance
70-89 - Good performance
90-100 - Very good perfomance */



function sumPerfomanceCategory (math, literature, physics){
    let average =((math + literature + physics)/3);
    

    let perfomanceCategory;
    if(average >=1 && average <=49){
        perfomanceCategory = "Low performance"
    }else if (average >=50 && average <=69){
        perfomanceCategory = "Medium performance"
    }else if (average >=70 && average <=89){
        perfomanceCategory = "Good performance"
    }else if (average >=90 && average <=100){
        perfomanceCategory = "Very good perfomance"
    }else{
        perfomanceCategory = "Invalid input"
    }
    return perfomanceCategory;
}
    let mathValue = 99;
    let literatureValue =99;
    let phisicsValue =89;

    let result= sumPerfomanceCategory(mathValue, literatureValue, phisicsValue);
console.log("Performance category:" + result);