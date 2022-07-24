import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductClass } from '../models/product';
import { CartService } from '../cart.service';
import { ProductService } from '../services/product.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  
  cartItems = this.cartService.getItems()
  
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  products: ProductClass[] = []

  constructor(private cartService: CartService, private formBuilder: FormBuilder, public dialog: MatDialog, private productServie: ProductService) {}

  onSubmit(): void {
    this.cartItems = this.cartService.clearCart()
    console.warn('Comanda dumneavoastră a fost trimisă', 
    this.checkoutForm.value)
    this.checkoutForm.reset()
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
    this.products = this.productServie.getProducts();
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations.component.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}

// products: Product[] = []

//   constructor(private productService: ProductService) { }

//   ngOnInit(): void {
//     this.products = this.productService.getProducts()
//   }