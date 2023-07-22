"use client"
// import { useEffect, useState } from "react";

const TimeStamp = () => {
    // const [isServer, setIsServer] = useState(true);

    // useEffect(() => setIsServer(false), []);

    return (
        // <p>{isServer ? "loading..." : Date.now()}</p>
        <p>{Date.now()}</p>
    );
}

export default TimeStamp;
