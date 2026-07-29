import React from "react";
import "./styles.css";
import { shoppingData } from "../../data/shopping-data";
import ShoppingItems from "./components/shopping-items";

export default function Shopping() {
    

    return (
        <div className="container">
            {shoppingData.map((item) => (
                <ShoppingItems key={item.name} items={item}/>
            ))}
        </div>
    )
//   return <h1 className="title">Hello World</h1>;
//   return React.createElement("h1", { className: "title" }, "Hello World");
}

// Declarative vs Imperative
// https://www.joyofreact.com/
// https://www.radix-ui.com/
// https://mui.com/ 