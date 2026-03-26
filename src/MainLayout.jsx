import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navber from "./components/shared/Navber";
import Banner from "./components/Banner";

export default function MainLayout() {
  return (
    <div className=''>
        <Navber></Navber>
        <Banner></Banner>
        <div><Outlet></Outlet></div>
        <Footer></Footer>
      </div>
  )
}
