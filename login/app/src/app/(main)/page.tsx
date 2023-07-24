// import styles from './page.module.css';
import './my.css';
import Link from "next/link";

function GoogleLogin() {
    return (
        <button>login with google</button>
    );
}

function StaticRoute() {
    return (
        <Link href="./post1"><p>this is static route</p></Link>
    );
}

export default function Home() {
    return (
        // <main className={styles.main}>
        <main>
            <GoogleLogin />
            <StaticRoute />
        </main>
    )
}
