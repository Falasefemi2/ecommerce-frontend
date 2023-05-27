import { Outlet } from "react-router-dom"
import Inspx from "inspx"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Root = () => {
    return (
        <Inspx>
            <Header />
            <Outlet />
            <Footer />
        </Inspx>
    )
}

export default Root