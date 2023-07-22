// import styles from '../page.module.css';
import Link from "next/link";
import Counter from "./Counter";
import Timer from "./Timer";
// import TimeStamp from "./TimeStamp";
import dynamic from "next/dynamic";

const ClientTimeStamp = dynamic(() => import("./TimeStamp"), {
    ssr: false,
    loading: () => <p>loaDiNg...</p>,
});

export default function Post1() {
    // <main className={styles.main}>
    return (
        <main>
            <p>this is static routed page</p>
            <ClientTimeStamp />
            <Counter />
            <Timer />
            <Link href=".."><p>go back</p></Link>
        </main>
    )
}
