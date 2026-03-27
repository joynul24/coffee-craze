import { Link } from "react-router-dom";
import Navber from "./shared/Navber";

export default function AddCoffee() {

    const handleAddCoffee=  (e)=> {
      e.preventDefault()
      console.log("add coffee")
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
    <h2 className="text-center text-2xl md:text-4xl font-bold">Add New Coffee</h2>
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
      {/* Photo Url row */}
      <div className="flex flex-col gap-6">
        <fieldset className="w-full fieldset">
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
      <button className="btn w-full hover:bg-[#b39369] bg-[#D2B48C] border-[#331A15] mt-5">
        Add Coffee
      </button>
    </form>
  </div>
</div>

    </div>
  )
}
