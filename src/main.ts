/*
============================================
, Title: main.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the main.ts file for the project
+===========================================
*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
