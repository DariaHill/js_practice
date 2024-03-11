let email= "daniel.abrams@gmail.com";

let email2 =email.split("@");
email2.splise(1, 1,"changed.com");
let newEmail=email2.join("@");

console.log(newEmail);