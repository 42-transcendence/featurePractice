import './my.css';

function NavigationBar() {
    return (
        <p className="navigation">
            <span>this is logo</span>
            <span>this is button</span>
            <span>profile pic</span>
        </p>
    );
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavigationBar />
            {children}
        </>
    )
}
