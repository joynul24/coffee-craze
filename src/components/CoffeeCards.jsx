import axios from "axios";
import { useEffect, useState } from "react"
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CoffeeCards() {
  const [coffes, setCoffes] = useState([]);
  useEffect(()=> {
    // axios.get("http://localhost:3000/coffees")
    axios.get("https://coffee-craze-server.vercel.app/coffees")
    .then(res => setCoffes(res.data))
    .catch(err => console.log(err))
  }, []);

  const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`https://coffee-craze-server.vercel.app/coffees/${id}`)
        .then(res => {
          if (res.data.deletedCount > 0) {
            setCoffes(coffes.filter(coffee => coffee._id !== id));
            Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
          }
        })
        .catch(err => {
          console.log(err);
          Swal.fire("Error!", "Something went wrong.", "error");
        });
    }
  });
};



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
      src={coffee?.photo || null}
     alt={coffee?.name || "Coffee image"}
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
    <Link to={`/coffeeDetails/${coffee._id}`} className="btn bg-amber-400 border-0"><FaEye /></Link>
    <Link to={`/updateCoffee/${coffee._id}`} className="btn bg-gray-600 text-white border-0"><FaPen /></Link>
    <button onClick={()=> handleDelete(coffee._id)} className="btn bg-red-500 border-0 text-white"><MdDelete /></button>
  </div>
         </div>
    )
   )
 }
  </div>
    </div>
  )
}
