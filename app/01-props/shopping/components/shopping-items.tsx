import { IShoppingItems } from "../../../models/shopping-items-interface";

export default function ShoppingItems({ items }: {items: IShoppingItems}) {
    const {name, price, brand, rating, category, isInStock} = items;
    return (
        <div className="shopping-item">
            <h2>{name}</h2>
            <div className="price">{price}</div>
            <p>Brand: {brand}</p>
            <p>Rating: {rating} ⭐</p>
            <p>Category: {category}</p>
            { isInStock ? 
                <span className="tag">In Stock</span>
                : <span className="tag out-of-stock">Out of Stock</span>
            }
            
        </div>
    )
}