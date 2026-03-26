import "./Navber.css"
import navLogo from "../../assets/more/logo1.png"

export default function Navber() {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 py-2 md:py-4" id="nav">
        <img className="w-[40px] md:w-[50px] lg:w-[75px]" src={navLogo} alt="" />
      <h1 className="text-xl md:text-4xl lg:text-6xl text-white font-medium font-rancho">Espresso Emporium</h1>
    </div>
  )
}
