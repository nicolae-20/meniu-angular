import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  description: string = ""
  title: string = ""
  price: number = 1
  image: string = ""

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.productService.createProduct(this.title, this.description, this.price, this.image)

    this.router.navigate
  }

}
