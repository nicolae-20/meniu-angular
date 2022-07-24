import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { ProductClass } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produse-lista',
  templateUrl: './produse-lista.component.html',
  styleUrls: ['./produse-lista.component.scss']
})
export class ProduseListaComponent implements OnInit {

  products: ProductClass[] = []
  constructor(private route: ActivatedRoute,
    private cartService: CartService,private productService: ProductService) { }
addToCart(product: ProductClass) {
this.cartService.addToCart(product)
window.alert('Produsul a fost adăugat în coșul tău');
}

  

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}
