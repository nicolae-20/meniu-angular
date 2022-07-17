import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../produse.component';

@Component({
  selector: 'app-produse-lista',
  templateUrl: './produse-lista.component.html',
  styleUrls: ['./produse-lista.component.scss']
})
export class ProduseListaComponent implements OnInit {

  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}
