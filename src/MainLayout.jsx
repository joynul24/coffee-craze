import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navber from "./components/shared/Navber";
import Banner from "./components/Banner";
import Features from "./components/Features";
import CoffeeSections from "./components/CoffeeSections";
import CoffeesGralary from "./components/CoffeesGralary";

export default function MainLayout() {
  return (
    <div className=''>
        <Navber></Navber>
        <Banner></Banner>
        <Features></Features>
        <CoffeeSections></CoffeeSections>
        <div><Outlet></Outlet></div>
        <CoffeesGralary></CoffeesGralary>
        <Footer></Footer>
      </div>
  )
}
