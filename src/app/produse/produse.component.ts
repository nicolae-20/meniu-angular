import { Component, OnInit } from '@angular/core';
import { ProductClass } from '../models/product';
import { ProductService } from '../services/product.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-produse',
  templateUrl: './produse.component.html',
  styleUrls: ['./produse.component.scss']
})
export class ProduseComponent implements OnInit {

  products: ProductClass[] = []

  constructor(public authService: AuthService, private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  

}

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   image: string;
// }