import { Controller, Post, Delete, Put, Get } from '@nestjs/common';
import { BookService } from './book.service';

@Controller("book")
export class BookController{
    
    // Nest JS has provided me with the object and i just create the constructor
    constructor(private bookService : BookService){}

    // add book
    @Post("/add")
    addBook() : string{
        return this.bookService.addBook();
    }
    // delete book
    @Delete("/delete")
    deleteBook(): string{
        return this.bookService.deleteBook();
    }
    // update book
    @Put("/update")
    updateBokk(): string{
        return this.bookService.updateBook();
    }
    // find all book
    @Get("/findAll")
    findAllBooks() : string{
        return this.bookService.findBooks();
    }
}