"use client"
import React, { useEffect, useState } from "react";

function SessionCounter() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let storedValue = sessionStorage.getItem("storedValue");

        if (storedValue !== null && Number.isInteger(Number(storedValue))) {
            setValue(Number(storedValue));
        }
    }, []);

    const handleClick = () => {
        setValue(value + 1);
        sessionStorage.setItem("storedValue", (value + 1).toString());
    }

    return (
        <section>
            <p>this is client side component.</p>
            <p>counter with sessionStorage example</p>
            <button className={"counter"} onClick={handleClick}>value: {value}</button>
        </section>
    );
}
export default SessionCounter;
