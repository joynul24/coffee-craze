// import { Link, useParams } from "react-router-dom";
// import Footer from "./shared/Footer";
// import Navber from "./shared/Navber";
// import { toast } from "react-toastify";
// import axios from "axios";

// export default function UpdateCoffee() {
//     const {id} = useParams()

//   const handleUpdateCoffee = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const updatedCoffee = {
//       name: form.name.value,
//       quantity: form.quantity.value,
//       supplier: form.supplier.value,
//       taste: form.taste.value,
//       category: form.category.value,
//       details: form.details.value,
//       price: form.price.value,
//       photo: form.photo.value,
//     };

//     try {
//       const res = await axios.put(`http://localhost:3000/coffees/${id}`, updatedCoffee);
//       if (res.data.modifiedCount > 0) {
//         toast.success("Coffee updated successfully!");
//       } else {
//         toast.warn("No changes were made.");
//       }
//     } catch (error) {
//       toast.error("Failed to update coffee. Please try again.");
//     }
//   };

//   return (
//     <div>
//         <Navber></Navber>
//     <div className="container mx-auto mt-10 px-2">
//         <Link to="/">
//     <button className="btn border-[#331A15] hover:bg-[#D2B48C] font-rancho">
//       <i className="fa-solid fa-arrow-left-long"></i> Back to home
//     </button>
//   </Link>
//     </div>
//      <div className="bg-[#F4F3F0] py-16 my-12 container mx-auto px-2">
//          <h1 className="text-center text-2xl md:text-4xl font-bold font-rancho">Update Existing Coffee Details</h1>
//       <p className="text-center max-w-3xl mx-auto my-4 font-raleway text-sm md:text-base">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
//       {/* form Section */}
//     <form onSubmit={handleUpdateCoffee} className="font-raleway space-y-6 px-5">
//       {/* coffee name and quantity row */}
//       <div className="flex flex-col md:flex-row justify-between gap-6">
//         <fieldset className="w-full md:w-1/2 fieldset">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Coffee Name
//           </label>
//           <input
//             name="name"
//             type="text"
//             className="input w-full"
//             placeholder="coffee name"
//           />
//         </fieldset>
//         <fieldset className="w-full md:w-1/2 fieldset">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Quantity
//           </label>
//           <input
//             name="quantity"
//             type="text"
//             className="input w-full"
//             placeholder="quantity"
//           />
//         </fieldset>
//       </div>
//       {/* Supplier and Taste row */}
//       <div className="flex flex-col md:flex-row justify-between gap-6">
//         <fieldset className="w-full md:w-1/2 fieldset">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Supplier
//           </label>
//           <input
//             name="supplier"
//             type="text"
//             className="input w-full"
//             placeholder="supplier"
//           />
//         </fieldset>
//         <fieldset className="w-full md:w-1/2 fieldset">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Taste
//           </label>
//           <input
//             name="taste"
//             type="text"
//             className="input w-full"
//             placeholder="taste"
//           />
//         </fieldset>
//       </div>
//       {/* Category and Details row */}
//       <div className="flex flex-col md:flex-row justify-between gap-6">
//         <fieldset className="w-full md:w-1/2 fieldset">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Category
//           </label>
//           <input
//             name="category"
//             type="text"
//             className="input w-full"
//             placeholder="category"
//           />
//         </fieldset>
//         <fieldset className="w-full md:w-1/2 fieldset">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Details
//           </label>
//           <input
//             name="details"
//             type="text"
//             className="input w-full"
//             placeholder="details"
//           />
//         </fieldset>
//       </div>
//       {/* Price and phot URL */}
//       <div className="flex flex-col md:flex-row justify-between gap-6">
//          <fieldset className="w-full md:w-1/2 fieldset">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Price
//           </label>
//           <input
//             name="price"
//             type="text"
//             className="input w-full"
//             placeholder="price"
//           />
//         </fieldset>
//         <fieldset className="w-full fieldset md:w-1/2">
//           <label className="fieldset-label text-lg md:text-xl font-medium">
//             Photo Url
//           </label>
//           <input
//             name="photo"
//             type="text"
//             className="input w-full"
//             placeholder="photo url"
//           />
//         </fieldset>
//       </div>
//       <button className="btn w-full hover:bg-[#b39369] bg-[#D2B48C] border-[#331A15] mt-5 font-rancho">
//         Update Coffee
//       </button>
//     </form>
//      </div>
//      <Footer></Footer>
//     </div>
//   )
// }









// import { Link, useParams } from "react-router-dom";
// import Footer from "./shared/Footer";
// import Navber from "./shared/Navber";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useEffect, useState } from "react";

// export default function UpdateCoffee() {
//   const { id } = useParams();
//   const [coffee, setCoffee] = useState(null);

//   // coffee ডাটা ফেচ করে state এ রাখো
//   useEffect(() => {
//     axios.get(`http://localhost:3000/coffees/${id}`)
//       .then(res => setCoffee(res.data))
//       .catch(() => toast.error("Failed to load coffee details"));
//   }, [id]);

//   const handleUpdateCoffee = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const updatedCoffee = {
//       name: form.name.value,
//       quantity: form.quantity.value,
//       supplier: form.supplier.value,
//       taste: form.taste.value,
//       category: form.category.value,
//       details: form.details.value,
//       price: form.price.value,
//       photo: form.photo.value,
//     };

//     try {
//       const res = await axios.put(`http://localhost:3000/coffees/${id}`, updatedCoffee);
//       if (res.data.modifiedCount > 0) {
//         toast.success("Coffee updated successfully!");
//       } else {
//         toast.warn("No changes were made.");
//       }
//     } catch {
//       toast.error("Failed to update coffee. Please try again.");
//     }
//   };

//   if (!coffee) {
//     return (
//       <div>
//         <Navber />
//         <div className="flex justify-center items-center h-screen">
//           <p className="text-xl text-gray-600">Loading coffee details...</p>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Navber />
//       <div className="container mx-auto mt-10 px-2">
//         <Link to="/">
//           <button className="btn border-[#331A15] hover:bg-[#D2B48C] font-rancho">
//             <i className="fa-solid fa-arrow-left-long"></i> Back to home
//           </button>
//         </Link>
//       </div>
//       <div className="bg-[#F4F3F0] py-16 my-12 container mx-auto px-2">
//         <h1 className="text-center text-2xl md:text-4xl font-bold font-rancho">
//           Update Existing Coffee Details
//         </h1>
//         <form onSubmit={handleUpdateCoffee} className="font-raleway space-y-6 px-5">
//           {/* Coffee Name */}
//           <input name="name" type="text" className="input w-full" defaultValue={coffee.name} />
//           {/* Quantity */}
//           <input name="quantity" type="text" className="input w-full" defaultValue={coffee.quantity} />
//           {/* Supplier */}
//           <input name="supplier" type="text" className="input w-full" defaultValue={coffee.supplier} />
//           {/* Taste */}
//           <input name="taste" type="text" className="input w-full" defaultValue={coffee.taste} />
//           {/* Category */}
//           <input name="category" type="text" className="input w-full" defaultValue={coffee.category} />
//           {/* Details */}
//           <input name="details" type="text" className="input w-full" defaultValue={coffee.details} />
//           {/* Price */}
//           <input name="price" type="text" className="input w-full" defaultValue={coffee.price} />
//           {/* Photo URL */}
//           <input name="photo" type="text" className="input w-full" defaultValue={coffee.photo} />

//           <button className="btn w-full hover:bg-[#b39369] bg-[#D2B48C] border-[#331A15] mt-5 font-rancho">
//             Update Coffee
//           </button>
//         </form>
//       </div>
//       <Footer />
//     </div>
//   );
// }











import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./shared/Footer";
import Navber from "./shared/Navber";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function UpdateCoffee() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://coffee-craze-server.vercel.app/coffees/${id}`)
      .then(res => setCoffee(res.data))
      .catch(() => toast.error("Failed to load coffee details"));
  }, [id]);

  const handleUpdateCoffee = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCoffee = {
      name: form.name.value.trim(),
      quantity: form.quantity.value.trim(),
      supplier: form.supplier.value.trim(),
      taste: form.taste.value.trim(),
      category: form.category.value.trim(),
      details: form.details.value.trim(),
      price: form.price.value.trim(),
      photo: form.photo.value.trim(),
    };

    // ✅ Validation checks
    if (!updatedCoffee.name) return toast.error("Coffee name is required!");
    if (!updatedCoffee.quantity || isNaN(updatedCoffee.quantity)) return toast.error("Quantity must be a number!");
    if (!updatedCoffee.price || isNaN(updatedCoffee.price)) return toast.error("Price must be a number!");
    if (!updatedCoffee.photo.startsWith("http")) return toast.error("Photo URL must be valid!");

    try {
      const res = await axios.put(`https://coffee-craze-server.vercel.app/coffees/${id}`, updatedCoffee);
      if (res.data.modifiedCount > 0) {
        toast.success("Coffee updated successfully!");
        navigate("/")
      } else {
        toast.warn("No changes were made.");
      }
    } catch {
      toast.error("Failed to update coffee. Please try again.");
    }
  };

  if (!coffee) {
    return (
      <div>
        <Navber />
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
      <div className="container mx-auto mt-10 px-2">
        <Link to="/">
          <button className="btn border-[#331A15] hover:bg-[#D2B48C] font-rancho">
            <i className="fa-solid fa-arrow-left-long"></i> Back to home
          </button>
        </Link>
      </div>
      <div className="bg-[#F4F3F0] py-16 my-12 container mx-auto px-2">
        <h1 className="text-center text-2xl md:text-4xl font-bold font-rancho">
          Update Existing Coffee Details
        </h1>
        <form onSubmit={handleUpdateCoffee} className="font-raleway space-y-6 px-5">
          <input name="name" type="text" className="input w-full" defaultValue={coffee.name} />
          <input name="quantity" type="text" className="input w-full" defaultValue={coffee.quantity} />
          <input name="supplier" type="text" className="input w-full" defaultValue={coffee.supplier} />
          <input name="taste" type="text" className="input w-full" defaultValue={coffee.taste} />
          <input name="category" type="text" className="input w-full" defaultValue={coffee.category} />
          <input name="details" type="text" className="input w-full" defaultValue={coffee.details} />
          <input name="price" type="text" className="input w-full" defaultValue={coffee.price} />
          <input name="photo" type="text" className="input w-full" defaultValue={coffee.photo} />

          <button className="btn w-full hover:bg-[#b39369] bg-[#D2B48C] border-[#331A15] mt-5 font-rancho">
            Update Coffee
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
