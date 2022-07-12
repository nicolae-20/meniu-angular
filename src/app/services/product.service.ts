import { Product } from "../produse/produse.component";

export class ProductService {
    products: Product[] = [
        {
            id: 0,
            title: "Legume",
            price: 5,
            description: "legume ieftine"
        },
        {
            id: 1,
            title: "Fructe",
            price: 3,
            description: "fructe ieftine"
        }
    ]
}