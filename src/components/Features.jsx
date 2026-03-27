
export default function Features() {
  return (
      <div className="bg-[#ECEAE3] py-14">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left px-5">
        {/* box-1 */}
        <div className="space-y-3">
          <img
            src="https://joynul2024.sirv.com/coffee-images/icons/1.png"
            alt=""
            className="mx-auto lg:mx-0"
          />
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-rancho">Awesome Aroma</h4>
          <p className="font-raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        {/* box-2 */}
        <div className="space-y-3">
          <img
            src="https://joynul2024.sirv.com/coffee-images/icons/2.png"
            alt=""
            className="mx-auto lg:mx-0"
          />
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-rancho">High Quality</h4>
          <p className="font-raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        {/* box-3 */}
        <div className="space-y-3">
          <img
            src="https://joynul2024.sirv.com/coffee-images/icons/3.png"
            alt=""
            className="mx-auto lg:mx-0"
          />
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-rancho">Pure Grades</h4>
          <p className="font-raleway">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        {/* box-4 */}
        <div className="space-y-3">
          <img
            src="https://joynul2024.sirv.com/coffee-images/icons/4.png"
            alt=""
            className="mx-auto lg:mx-0"
          />
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-rancho">Proper Roasting</h4>
          <p className="font-raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  )
}
