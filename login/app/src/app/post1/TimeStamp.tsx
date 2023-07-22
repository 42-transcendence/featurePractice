"use client"
import { useState } from "react";

const TimeStamp = () => {

    const [buttonText, setButtonText] = useState("copy to clipboard");

    const timestamp = Date.now();

    const copyToClipboard = async () => {
        navigator.clipboard.writeText(timestamp.toString())
            .then(() => setButtonText("copied!"))
            .catch(() => setButtonText("cannot copy!"));

        setTimeout(() => setButtonText("copy to clipboard"), 1000);
    }

    return (
        <section>
            <p>{timestamp}</p>
            <button onClick={copyToClipboard}>{buttonText}</button>
        </section>
    );
}

export default TimeStamp;
