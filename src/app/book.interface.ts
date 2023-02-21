/*
============================================
, Title: book.interface.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the book interface
+===========================================
*/

// Book interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
