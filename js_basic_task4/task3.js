/* Використовуючи .filter(), запишіть у новий масив тільки ємейли, які містять 'gmail.com'. Виведіть новий відфільтрований масив.
 */
const emails = ["example1@yahoo.com", "myemail@mail.com", "trueemail@gmail.com", "enfhg@emailsGmail.com"];
const emailsGmail= emails.filter((email=>email.includes("gmail.com")))


console.log(emailsGmail)