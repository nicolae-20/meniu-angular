import { Product } from "../produse/produse.component";
import { Injectable } from "@angular/core"; 

@Injectable({
    providedIn: "root"
})
export class ProductService {
    products: Product[] = [
        {
            id: 0,
            title: "reteta 1",
            price: 5,
            description: "continut"
        },
        {
            id: 1,
            title: "reteta 2",
            price: 3,
            description: "continut"
        }
    ]

    getProducts() {
        return this.products;
      }
}