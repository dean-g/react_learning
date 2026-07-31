
import CartItems from "../components/cart-item/cart-item";
import { shoppingCartData } from "@/app/data/shopping-cart.data";
import "./style.css";

export default function example4() {
    return (
        <>
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {shoppingCartData.map((data) => 
                    <CartItems 
                        inStock={data.inStock} 
                        price={data.price}
                        totalCount={data.totalCount}
                        title={data.title}
                        key={data.id}
                        />)}
            </div>
        </>
    )
}