import { Link, Outlet } from "react-router-dom"
import "./style.scss"
import { useSelector } from "react-redux";
function Layout() {
    const result = useSelector(state => state.product)
    const KQ1 = result.map(item => {
        return item.quantity;
    })
    const Tong = KQ1.reduce((Tong1, item) => {
        return Tong1 + item
    }, 0)

    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <Link to="/">Logo</Link>
                </div>
                <div className="header__cart">
                    <Link to="/cart">Cart({Tong})</Link>
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                footer
            </footer>
        </>
    )
}
export default Layout;