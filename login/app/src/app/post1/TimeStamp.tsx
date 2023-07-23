"use client"
import { useState } from "react";

type copyButtonText = "copy to clipboard" | "copied!" | "cannot copy!";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
    const [buttonText, setButtonText] = useState<copyButtonText>("copy to clipboard");

    const copyToClipboard = async () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => setButtonText("copied!"))
            .catch(() => setButtonText("cannot copy!"));

        setTimeout(() => setButtonText("copy to clipboard"), 1000);
    }

    return (
        <button onClick={copyToClipboard}>{buttonText}</button>
    );
}

const TimeStamp = () => {

    const timestamp = Date.now().toString();

    return (
        <section>
            <p>{timestamp}</p>
            <CopyButton textToCopy={timestamp} />
        </section>
    );
}

export default TimeStamp;
