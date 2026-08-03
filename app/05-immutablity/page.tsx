"use client";

import { produce } from "immer";
import { useState } from "react"

export default function Immutablity() {

    const [data, setData] = useState([1, 2, 3, 4, 5])

    const addNewData = () => {
        // const newData = [...data, data.length + 1];
        //Immar uses proxy.. it dosn't clone.. very performant 
        const newData = produce(data, (draftData) => {
            draftData.push(data.length + 1);
        })
        setData(newData);
    }
    return (
        <div>
            <p>{data}</p>
            <button onClick={addNewData}>Add More</button>
        </div>
    )
}