import { Outlet } from "react-router-dom"
import LeftSidebar from "../components/LeftSidebar"


const RouteLayout = () => {
    return (
        <div className="flex h-full">

            <LeftSidebar />

            <section className="flex-grow">
                <Outlet />
            </section>
        </div>
    )
}

export default RouteLayout