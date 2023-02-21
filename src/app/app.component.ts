/*
============================================
, Title: app.component.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the app component
+===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;

  // This adds the assignment string to the app component
  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
