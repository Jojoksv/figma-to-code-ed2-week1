import { Outlet } from "react-router-dom"
import Header from "../partials/Header"
import Footer from "../partials/Footer"


function Layout() {
    return (
        <main className="main">
            <div className="left-border">
                <div className="header-square"></div>
            </div>
            <div className="main-content">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </main>
    )
}

export default Layout