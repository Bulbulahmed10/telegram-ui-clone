import { Outlet } from "react-router-dom"
import Drawer from "../shared/Drawer/Drawer"


const MainLayout = () => {
  return (
    <div>
       <Drawer />
        <Outlet />
    </div>
  )
}

export default MainLayout