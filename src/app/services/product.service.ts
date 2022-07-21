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
            description: "continut",
            image: "https://th.bing.com/th/id/R.d02208d2a3d802452554a34c69d06abf?rik=rx5BvfFvBSB0kg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-G1q6N8o4QCQ%2fTyTUUYOuPGI%2fAAAAAAAADGc%2fFk5If43FzoA%2fs1600%2fDSC_2757.jpg&ehk=SQ2XAJt9gEeqh7m4ifZ0yvcZwyvRrcY5zZITC9g4iIk%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            id: 1,
            title: "reteta 2",
            price: 3,
            description: "continut",
            image: "https://retete.unica.ro/wp-content/uploads/2011/05/01-bucatarie-internationala.jpg",
        },
        {
            id: 2,
            title: "reteta 3",
            price: 5,
            description: "continut",
            image: "https://retete.unica.ro/wp-content/uploads/2011/05/04-bucatarie-greceasca.jpg",
        },
        {
            id: 3,
            title: "reteta 4",
            price: 3,
            description: "continut",
            image: "https://dulciurifeldefel.ro/wp-content/uploads/2021/01/prajitura-frantuzeasca-5.jpg",
        },
    ]

    getProducts() {
        return this.products;
      }
}