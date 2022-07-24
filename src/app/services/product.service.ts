import { Injectable } from "@angular/core"; 
import { ProductClass } from "../models/product";


@Injectable({
    providedIn: "root"
})
export class ProductService {

    products: ProductClass[] = [
        new ProductClass(1, "reteta 1", "descriere", 9.99, "https://th.bing.com/th/id/R.d02208d2a3d802452554a34c69d06abf?rik=rx5BvfFvBSB0kg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-G1q6N8o4QCQ%2fTyTUUYOuPGI%2fAAAAAAAADGc%2fFk5If43FzoA%2fs1600%2fDSC_2757.jpg&ehk=SQ2XAJt9gEeqh7m4ifZ0yvcZwyvRrcY5zZITC9g4iIk%3d&risl=&pid=ImgRaw&r=0"),
        new ProductClass(2, "reteta 2", "descriere", 14.99, "https://retete.unica.ro/wp-content/uploads/2011/05/01-bucatarie-internationala.jpg"),
        new ProductClass(3, "reteta 3", "descriere", 21.99, "https://retete.unica.ro/wp-content/uploads/2011/05/04-bucatarie-greceasca.jpg"),
        new ProductClass(4, "reteta 4", "descriere", 5.99, "https://dulciurifeldefel.ro/wp-content/uploads/2021/01/prajitura-frantuzeasca-5.jpg")
    ]
    // products: ProductClass[] = [
    //     {
    //         id: 0,
    //         title: "reteta 1",
    //         price: 5,
    //         description: "descriere",
    //         image: "https://th.bing.com/th/id/R.d02208d2a3d802452554a34c69d06abf?rik=rx5BvfFvBSB0kg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-G1q6N8o4QCQ%2fTyTUUYOuPGI%2fAAAAAAAADGc%2fFk5If43FzoA%2fs1600%2fDSC_2757.jpg&ehk=SQ2XAJt9gEeqh7m4ifZ0yvcZwyvRrcY5zZITC9g4iIk%3d&risl=&pid=ImgRaw&r=0",
    //     },
    //     {
    //         id: 1,
    //         title: "reteta 2",
    //         price: 3,
    //         description: "descriere",
    //         image: "https://retete.unica.ro/wp-content/uploads/2011/05/01-bucatarie-internationala.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "reteta 3",
    //         price: 5,
    //         description: "descriere",
    //         image: "https://retete.unica.ro/wp-content/uploads/2011/05/04-bucatarie-greceasca.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "reteta 4",
    //         price: 3,
    //         description: "descriere",
    //         image: "https://dulciurifeldefel.ro/wp-content/uploads/2021/01/prajitura-frantuzeasca-5.jpg",
    //     },
    // ]

    getProducts(): ProductClass[] {
        return this.products;
      }

      createProduct(productTitle:string, productDescription:string, price: number, image: string) {
        const product = {
                    id: 123,
                    image: image,
                    description: productDescription,
                    title: productTitle,
                    price: 12
                    };
        return this.products.push(product);
      }
}