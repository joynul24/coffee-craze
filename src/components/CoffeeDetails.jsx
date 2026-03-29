import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Navber from "./shared/Navber";
import Footer from "./shared/Footer";
import { toast } from "react-toastify";

export default function CoffeeDetails() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
     fetch(`https://coffee-craze-server.vercel.app/coffees/${id}`)
      .then(res => res.json())
      .then(data => setCoffee(data))
      .catch(err => toast.error(err.message));
  }, [id]);

  if (!coffee) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl text-gray-600">Loading coffee details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navber />
      <div className="container mx-auto">
           <Link to="/">
    <button className="btn border-[#331A15] hover:bg-[#D2B48C] font-rancho mt-14">
      <i className="fa-solid fa-arrow-left-long"></i> Back to home
    </button>
     </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center my-14 bg-[#F4F3F0] container mx-auto">
        {/* coffee image */}
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="md:w-[200px] lg:w-[350px] rounded-md"
        />

        {/* coffee content */}
        <div className="flex flex-col space-y-3 text-left">
          <p className="text-2xl md:text-4xl font-semibold font-rancho text-[#331A15]">Niceties</p>
          <h3 className="text-xl font-raleway">
            <span className="font-bold">Name:</span>
            <span className="text-gray-600"> {coffee.name}</span>
          </h3>
          <p className="text-xl font-raleway">
            <span className="font-bold">Chef:</span>
            <span className="text-gray-600"> {coffee.supplier}</span>
          </p>
          <p className="text-xl font-raleway">
            <span className="font-bold">Taste:</span>
            <span className="text-gray-600"> {coffee.taste}</span>
          </p>
          <p className="text-xl font-raleway">
            <span className="font-bold">Category:</span>
            <span className="text-gray-600"> {coffee.category}</span>
          </p>
          <p className="text-xl font-raleway">
            <span className="font-bold">Details:</span>
            <span className="text-gray-600"> {coffee.details}</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
