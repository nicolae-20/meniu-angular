import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductClass } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItems: ProductClass[] = [] 
  public productList = new BehaviorSubject<any>([])

  addToCart(product: ProductClass) {
    this.cartItems.push(product)
    this.productList.next(this.cartItems)
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cartItems.map((p => {
      totalPrice = totalPrice + p.price
    }))
    return totalPrice.toFixed(2)
    
  }

  getItems() {
    return this.cartItems
  }

  clearCart() {
    this.cartItems = []
    this.productList.next(this.cartItems)
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1)
  }



  constructor() { }
}
