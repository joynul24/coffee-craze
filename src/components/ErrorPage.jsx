import errorImg from "../assets/404/error.gif"

export default function ErrorPage() {
  return (
   <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* Error Image */}
      <img className="w-2/3 md:w-1/3 mb-6" src={errorImg} alt="Error" />

      {/* Error Text */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-700 font-rancho">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md font-raleway px-2 md:px-0">
        The page you are looking for doesn’t exist or an error occurred. 
        Please go back to the homepage.
      </p>

      {/* Back Home Button */}
      <a
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-green-400 hover:bg-transparent font-rancho hover:bg-green-500 rounded-lg"
      >
        Go Back Home
      </a>
    </div>
  )
}
