"use client"
// import { useId } from "react";
// import Link from "next/link";
import { useRouter } from "next/navigation";

// async function createNewGameId() {
//     const id = Math.floor(Math.random() * 1000);
//     return id;
// }

export default function GamePage() {
    // const newGameId = await createNewGameId();

    const router = useRouter();

    const handleClick = async () => {

        const res = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1",
            /*{ cache: "no-store", next: { revalidate: 0 } }*/);
        if (!res.ok) {
            throw new Error("fetch failure");
        }
        const newGameId = await res.json();

        router.push(`/game/${newGameId}`);

    }
    return (
        <div>
            <p>Game page</p>
            <p><button type="button" onClick={handleClick}>click to start new Game(dynamic route)</button></p>
            {/*<br />
            <p><Link href={`/main/game/game?gameid=${newGameId}`}>*DEPRECATED click to start new Game(query string)</Link></p> */}
        </div>
    );
}

export const revalidate = 0;
