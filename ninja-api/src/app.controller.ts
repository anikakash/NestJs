import { Controller, Post, Delete, Put, Get } from '@nestjs/common';

@Controller("book")
export class BookController{
    // add book
    @Post("/add")
    addBook() : string{
        return "This will add book.";
    }
    // delete book
    @Delete("/delete")
    deleteBook(): string{
        return "This is for deleting book.";
    }
    // update book
    @Put("/update")
    updateBokk(): string{
        return "This will updated book.";
    }
    // find all book
    @Get("/findAll")
    findAllBooks() : string{
        return "This will find all book";
    }
}