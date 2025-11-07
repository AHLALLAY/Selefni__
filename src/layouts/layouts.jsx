import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Header isAuthentified={false}></Header>
            </header>
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;