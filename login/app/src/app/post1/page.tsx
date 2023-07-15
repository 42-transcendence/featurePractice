// import styles from '../page.module.css';
import Link from "next/link";
import Counter from "./Counter";
import Timer from "./Timer";
import TimeStamp from "./TimeStamp";

export default function Post1() {
    // <main className={styles.main}>
    return (
        <main>
            <p>this is static routed page</p>
            <TimeStamp />
            <Counter />
            <Timer />
            <Link href=".."><p>go back</p></Link>
        </main>
    )
}
