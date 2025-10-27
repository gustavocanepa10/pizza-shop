import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"


export function AppLayout() {
    return (
        <div>
            <Helmet titleTemplate="%s | pizza.shop" defaultTitle="pizza.shop" />
            <h1>Cabeçalho</h1>

            <div>
                <Outlet/>
            </div>
        </div>
    )
}