import styles from './page.module.css';
import './my.css';
import Link from "next/link";

function GoogleLogin() {
    return (
        <button>login with google</button>
    );
}

function StaticRoute() {
    return (
        <Link href="./post1.tsx"><button>this is static route</button></Link>
    );
}

function NavigationBar() {
    return (
        <p className="navigation">
            <span>this is logo</span>
            <span>this is button</span>
            <span>profile pic</span>
        </p>
    );
}

export default function Home() {
    return (
        <main className={styles.main}>
            <NavigationBar />
            <GoogleLogin />
            <StaticRoute />
        </main>
    )
}
