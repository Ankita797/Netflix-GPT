import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      {/* Background Image */}
      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_small.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login/Signup Form */}
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-900"
        />
        )}
        
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900"
        />

        <button className="p-4 my-6 bg-red-700 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        
        <p className="py-6">
          {isSignInForm ? "New to Netflix? " : "Already registered? "}
          <span
            onClick={toggleSignInForm}
            className="cursor-pointer text-red-500 hover:underline"
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
