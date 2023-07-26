// import styles from '../page.module.css';
import Link from "next/link";
import Counter from "./Counter";
import Timer from "./Timer";
// import TimeStamp from "./TimeStamp";
import dynamic from "next/dynamic";
import SessionCounter from "./SessionCounter";

const ClientTimeStamp = dynamic(() => import("./TimeStamp"), {
    ssr: false,
    loading: () => <section><p>loaDiNg...</p></section>,
});

export default function Post1() {
    // <main className={styles.main}>

    return (
        <main>
            <p>this is static routed page</p>
            <ClientTimeStamp />
            <Counter />
            <SessionCounter />
            <Timer />
            <Link href=".."><span>go back</span></Link>
        </main>
    )
}
