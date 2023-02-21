/*
============================================
, Title: wishlist.component.ts
; Author: Ace Baugh
; Date: 22 February 2023
; Description: This is the wishlist component
+===========================================
*/

import { Component } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  items: Array<IWishlistItem> = [];

  constructor() { }

    updateItemsHandler(item: IWishlistItem) {
      this.items.push(item);
    }

}
