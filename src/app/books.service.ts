/*
============================================
, Title: books.service.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the books service file
+===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  isbns: string[] = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
    '9781585424337',
    '9781982137274',
    '9781881273103',
    '9788186775090',
    '9781250773029',
    '9781592975006',
  ];

  constructor(private http: HttpClient) {}

  // This function will return the books array
  getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys', this.isbns.join(',')); // `ISBN:${this.isbn.join(',')}`
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', {
      params: params,
    });
  }
}
