import axios from "axios";
import { useEffect, useState } from "react"
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function CoffeeCards() {
  const [coffes, setCoffes] = useState([]);
  useEffect(()=> {
    axios.get("http://localhost:3000/coffees")
    .then(res => setCoffes(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
        {
          coffes.map(coffee =>
            (
          <div key={coffee._id} 
          className="flex flex-col md:flex-row items-center justify-between gap-6 p-7 rounded-lg bg-[#F5F4F1]"
>
         {/* coffee image */}
        <img 
        src={coffee.photo} 
       alt={coffee.name} 
       className="w-32 h-32 object-cover rounded-md" 
      />

     {/* coffee content */}
  <div className="flex flex-col space-y-3 text-center md:text-left">
    <h3 className="text-xl font-raleway">
      <span className="font-bold">Name:</span> 
      <span className="text-gray-600"> {coffee.name}</span>
    </h3>
    <p className="text-xl font-raleway">
      <span className="font-bold">Chef:</span> 
      <span className="text-gray-600"> {coffee.supplier}</span>
    </p>
    <p className="text-xl font-raleway">
      <span className="font-bold">Price:</span> 
      <span className="text-gray-600"> {coffee.price}</span>
    </p>
  </div>

  {/* coffee actions */}
  <div className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-3 mt-4 md:mt-0">
    <button className="btn bg-amber-400"><FaEye /></button>
    <button className="btn bg-gray-600 text-white border-0"><FaPen /></button>
    <button className="btn bg-red-500 border-0 text-white"><MdDelete /></button>
  </div>
</div>
    )
   )
 }
  </div>
    </div>
  )
}
