"use client"
import React, { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);

    const handleClick = () => setValue(value + 1);

    return (
        <section>
            <p>this is client side component</p>
            <p>plain Counter example</p>
            <button className={"counter"} onClick={handleClick}>value: {value}</button>
        </section>
    );
}
export default Counter;
