// Оголошення класу Library
class Library {
    constructor() {
        this.books = [];
    }

    // Метод для додавання нової книги
    addBook(bookName, bookAuthor, bookYear, bookId) {
        const newBook = { bookName, bookAuthor, bookYear, bookId };
        this.books.push(newBook);
    }

    // Метод для виведення інформації про книгу за заданим ідентифікатором
    printBookInfo(bookId) {
        const book = this.books.find(book => book.bookId === bookId);
        if (book) {
            console.log(`Book ID: ${book.bookId}`);
            console.log(`Book Name: ${book.bookName}`);
            console.log(`Book Author: ${book.bookAuthor}`);
            console.log(`Book Year: ${book.bookYear}`);
        } else {
            console.log("Book not found.");
        }
    }

    // Метод для виведення інформації про всі книги
    printAllBooks() {
        console.log("All Books:");
        this.books.forEach(book => {
            console.log(`Book ID: ${book.bookId}`);
            console.log(`Book Name: ${book.bookName}`);
            console.log(`Book Author: ${book.bookAuthor}`);
            console.log(`Book Year: ${book.bookYear}`);
            console.log("---------------------");
        });
    }
}

// Створення об'єкту бібліотеки
const myLibrary = new Library();

// Додавання книг до бібліотеки
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 1);
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", 1960, 2);
myLibrary.addBook("1984", "George Orwell", 1949, 3);


myLibrary.printAllBooks();


myLibrary.printBookInfo(2);