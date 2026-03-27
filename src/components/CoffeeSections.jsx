import { Link } from "react-router-dom";
import CoffeeCards from "./CoffeeCards";

export default function CoffeeSections() {
  return (
    <div>
       <div className="container mx-auto">
        {/* Title Section */}
       <div className="flex flex-col  items-center space-y-3 my-20 md:my-28">
        <h4 className="font-raleway text-xl">--- Sip & Savor ---</h4>
          <h2 className="text-4xl md:text-5xl font-rancho">Our Popular Products</h2>
           {/* Add Coffee button */}
          <Link to="/addCoffee">
            <button className="btn bg-[#E3B577] border-[#331A15] hover:bg-transparent font-rancho">
              Add Coffee <i className="fa-solid fa-mug-hot"></i>
            </button>
          </Link>
       </div>
       {/* Coffee Cards Sections */}
       <CoffeeCards></CoffeeCards>
       </div>
    </div>
  )
}
