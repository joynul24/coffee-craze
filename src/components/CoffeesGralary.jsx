import coffee1 from "../assets/cups/Rectangle9.png"
import coffee2 from "../assets/cups/Rectangle10.png"
import coffee3 from "../assets/cups/Rectangle11.png"
import coffee4 from "../assets/cups/Rectangle12.png"
import coffee5 from "../assets/cups/Rectangle13.png"
import coffee6 from "../assets/cups/Rectangle14.png"
import coffee7 from "../assets/cups/Rectangle15.png"
import coffee8 from "../assets/cups/Rectangle16.png"

export default function CoffeesGralary() {
  return (
    <div>
        {/* Title */}
      <div className="text-center mt-10 md:mt-20">
        <h4 className="font-raleway text-xl">--- Follow Us Now ---</h4>
          <h2 className="text-4xl md:text-5xl font-rancho">Follow on Instagram</h2>
      </div>
      {/* Coffees Galary */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto px-2 md:px-1 my-10">
        <img className="w-full" src={coffee1} alt="coffee-cup" />
        <img className="w-full" src={coffee2} alt="coffee-cup" />
        <img className="w-full" src={coffee3} alt="coffee-cup" />
        <img className="w-full" src={coffee4} alt="coffee-cup" />
        <img className="w-full" src={coffee5} alt="coffee-cup" />
        <img className="w-full" src={coffee6} alt="coffee-cup" />
        <img className="w-full" src={coffee7} alt="coffee-cup" />
        <img className="w-full" src={coffee8} alt="coffee-cup" />
      </div>
    </div>
  )
}
