/*
============================================
, Title: book-details-dialog.component.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the book details dialog component
+===========================================
*/

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent {
  book: IBook; // Initialize the book variable

  // This is the constructor
  constructor(public dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    // This will be used to store the book details that will be displayed in the dialog
    this.book = data.book;
  }

}
