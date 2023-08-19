import { Injectable } from "@nestjs/common";

@Injectable() // dependincy inject
export class BookService{
    addBook() : string {
        return "This will add Book";
    }

    updateBook() : string {
        return "This will update book";
    }

    deleteBook() : string {
        return "This will Delete book";
    }

    findBooks() : string {
        return "This will find all books";
    }

}