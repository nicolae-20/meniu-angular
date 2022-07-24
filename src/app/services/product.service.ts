import { Injectable } from "@angular/core"; 
import { ProductClass } from "../models/product";


@Injectable({
    providedIn: "root"
})
export class ProductService {

    products: ProductClass[] = [
        new ProductClass(1, "Păstăi cu ouă", "Kcal: 50 / porție", 9.99, "https://www.lauraadamache.ro/wp-content/uploads/2020/06/fasole-verde-fiarta.jpg"),
        new ProductClass(2, "Mâncare de cartofi", "Kcal: 199 / porție", 15.99, "http://storage0.dms.mpinteractiv.ro/media/2/2621/33531/17029978/1/tocan-de-cartofi.jpg"),
        new ProductClass(3, "Salată grecească", "Kcal: 15 / porție", 21.99, "https://retete.unica.ro/wp-content/uploads/2011/05/04-bucatarie-greceasca.jpg"),
        new ProductClass(4, "Gogoși", "Kcal: 159 / porție", 14.99, "http://www.papabun.com/wp-content/poze/Reteta-Gogosi-Libaneze-cu-Inghetata.jpg" ),
        new ProductClass(5, "Felie tort", "Kcal: 99 / porție", 5.99, "https://greatnews.ro/wp-content/uploads/2021/06/cate-calorii-are-o-felie-de-tort-de-ciocolata.jpg")
    ] //https://www.lauraadamache.ro/wp-content/uploads/2020/06/fasole-verde-tihgaie.jpg
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