import { ICartItems } from "../models/cart-item.interface";

export const shoppingCartData: ICartItems[] = [
    {
        id: 1,
        title: 'Mango',
        inStock: true,
        price: 10,
        totalCount: 1000
    },
    {
        id: 1,
        title: 'Orange',
        inStock: false,
        price: 10,
        totalCount: 0
    },
    {
        id: 1,
        title: 'Apple',
        inStock: true,
        price: 10,
        totalCount: 1000
    }
]