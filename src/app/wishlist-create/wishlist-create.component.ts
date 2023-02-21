/*
============================================
, Title: wishlist-create.component.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the wishlist create component
+===========================================
*/

import { Component, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';


@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });
    this.item = {} as IWishlistItem;
  }
}
