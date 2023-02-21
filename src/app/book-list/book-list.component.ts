/*
============================================
, Title: book-list.component.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the book list component
+===========================================
*/

// Import statements
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
// This is the book list component
export class BookListComponent {
  books: IBook[] = []; // This is the books array
  book: IBook = {
    // This is the book object with dummy information
    isbn: `111`,
    title: `The Book`,
    description: `The Book is a book`,
    numOfPages: 2,
    authors: [`Ace Buagh`],
  }; // This will be used to store the book details that will be displayed in the dialog

  // This is the constructor
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe((res: any) => {
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author: any) {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
    });
  }

  ngOnInit(): void {}

  // This function will be used to display the book details
  showBookDetails(isbn: string) {
    this.book = this.books.find((book) => book.isbn === isbn) as IBook;

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book,
      },
      disableClose: true,
      width: '800px',
    });

    console.log(this.book);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.book = null as any; // This will clear the book object
      }
    });
  }
}
