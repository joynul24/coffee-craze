import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-10 bg-[#ECEAE3] py-10 md:py-20">
  <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4">
    {/* Left Section */}
    <div className="flex-1 space-y-3 text-center md:text-left">
      <img
        className="w-20 mx-auto md:mx-0"
        src="https://joynul2024.sirv.com/coffee-images/more/logo1.png"
        alt=""
      />
      <h3 className="text-2xl md:text-4xl font-bold font-rancho">
        Espresso Emporium
      </h3>
      <p className="font-raleway text-sm md:text-base">
        Always ready to be your friend. Come & Contact with us to share your
        memorable moments, to share with your best companion.
      </p>
      <div className="flex justify-center md:justify-start gap-3 text-2xl md:text-3xl">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </div>

    {/* Right Section (Form) */}
    <div className="flex-1">
      <h3 className="text-2xl md:text-3xl mb-4 font-rancho text-center md:text-left">
        Connect with Us
      </h3>
      <div className="flex flex-col gap-3">
        <input
          className="p-3 rounded-xl w-full"
          type="text"
          placeholder="Your name"
        />
        <input
          className="p-3 rounded-xl w-full"
          type="text"
          placeholder="Your email"
        />
        <textarea
          className="p-3 rounded-xl w-full"
          rows="4"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="btn border-[#331A15] text-[#331A15] rounded-4xl mt-4 w-full md:w-auto">
        Send Message
      </button>
    </div>
  </div>
</div>
  )
}
