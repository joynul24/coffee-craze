import { Link } from "react-router-dom";
import Navber from "./shared/Navber";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddCoffee() {

    const handleAddCoffee = async (e)=> {
      e.preventDefault()
      const formData = new FormData(e.target);
      const newCoffee = {
        name : formData.get("name"),
        quantity: formData.get("quantity"),
        supplier: formData.get("supplier"),
        taste: formData.get("taste"),
        category: formData.get("category"),
        details: formData.get("details"),
        price: formData.get("price"),
        photo: formData.get("photo"),
      }

     // Validation check
     if (Object.values(newCoffee).some(field => !field)) {
       Swal.fire({
       title: "Error!",
       text: "Please fill all fields before submitting.",
       icon: "error",
       confirmButtonText: "OK"
      });
      return;
    }

     try{
       const res = await axios.post("http://localhost:3000/coffees", newCoffee);
       e.target.reset();
       if(res.data.insertedId){
         Swal.fire({
        title: "Success!",
        text: "Coffee added successfully!",
        icon: "success",
        confirmButtonText: "Cool"
      });
       }
     }catch (error) {
      Swal.fire({
      title: "Error!",
      text: "Something went wrong while adding coffee.",
      icon: "error",
      confirmButtonText: "Try Again"
    });
     }
    }

  return (
    <div>
        <Navber></Navber>
   <div className="mt-20 container mx-auto px-4">
  <Link to="/">
    <button className="btn border-[#331A15] hover:bg-[#D2B48C]">
      <i className="fa-solid fa-arrow-left-long"></i> Back to home
    </button>
  </Link>
  <div className="bg-[#F4F3F0] py-10 md:py-16 px-6 md:px-16 lg:px-28 rounded-2xl mt-10">
    <h2 className="text-center text-2xl md:text-4xl font-bold font-rancho">Add New Coffee</h2>
    <p className="text-center max-w-3xl mx-auto my-4 font-raleway text-sm md:text-base">
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using Content here.
    </p>
    {/* form Section */}
    <form onSubmit={handleAddCoffee} className="font-raleway space-y-6">
      {/* coffee name and quantity row */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <fieldset className="w-full md:w-1/2 fieldset">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Coffee Name
          </label>
          <input
            name="name"
            type="text"
            className="input w-full"
            placeholder="coffee name"
          />
        </fieldset>
        <fieldset className="w-full md:w-1/2 fieldset">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Quantity
          </label>
          <input
            name="quantity"
            type="text"
            className="input w-full"
            placeholder="quantity"
          />
        </fieldset>
      </div>
      {/* Supplier and Taste row */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <fieldset className="w-full md:w-1/2 fieldset">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Supplier
          </label>
          <input
            name="supplier"
            type="text"
            className="input w-full"
            placeholder="supplier"
          />
        </fieldset>
        <fieldset className="w-full md:w-1/2 fieldset">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Taste
          </label>
          <input
            name="taste"
            type="text"
            className="input w-full"
            placeholder="taste"
          />
        </fieldset>
      </div>
      {/* Category and Details row */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <fieldset className="w-full md:w-1/2 fieldset">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Category
          </label>
          <input
            name="category"
            type="text"
            className="input w-full"
            placeholder="category"
          />
        </fieldset>
        <fieldset className="w-full md:w-1/2 fieldset">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Details
          </label>
          <input
            name="details"
            type="text"
            className="input w-full"
            placeholder="details"
          />
        </fieldset>
      </div>
      {/* Price and phot URL */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
         <fieldset className="w-full md:w-1/2 fieldset">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Price
          </label>
          <input
            name="price"
            type="text"
            className="input w-full"
            placeholder="price"
          />
        </fieldset>
        <fieldset className="w-full fieldset md:w-1/2">
          <label className="fieldset-label text-lg md:text-xl font-medium">
            Photo Url
          </label>
          <input
            name="photo"
            type="text"
            className="input w-full"
            placeholder="photo url"
          />
        </fieldset>
      </div>
      <button className="btn w-full hover:bg-[#b39369] bg-[#D2B48C] border-[#331A15] mt-5 font-rancho">
        Add Coffee
      </button>
    </form>
  </div>
</div>

    </div>
  )
}
