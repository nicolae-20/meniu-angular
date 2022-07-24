import { Injectable } from '@angular/core';
import { ProductClass } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: ProductClass[] = []

  addToCart(product: ProductClass) {
    this.cartItems.push(product)
  }

  getItems() {
    return this.cartItems
  }

  clearCart() {
    this.cartItems = []
    return this.cartItems
  }

  constructor() { }
}
