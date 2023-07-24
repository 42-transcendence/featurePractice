'use client';
import React, { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setTime(time + 1)
        }, 1000);
    })
    return (
        <section>
            <p>this is client side component</p>
            <span className={"timer"}>time: {time}</span>
        </section>
    )
}

export default Timer;
