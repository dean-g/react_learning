import { ICartItems } from "@/app/models/cart-item.interface";

export default function CartItems({
    title, price, inStock, totalCount
}: ICartItems) {

    const stockJsx = inStock ? <div className="in-stock">In stock</div> : null;
    const totalCountJsx = totalCount > 20 ? <div className="bulk-stock">+20 Available</div>: null;

    return (

        <>
        <div className="cart-item">
            <h3>{title}</h3>
            <div className="price">${price}</div>
            {stockJsx}
            {totalCountJsx}
        </div>
        </>
    )
}