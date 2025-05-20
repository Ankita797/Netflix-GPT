import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const enteredName = !isSignInForm && name.current ? name.current.value : "";
    const enteredEmail = email.current?.value || "";
    const enteredPassword = password.current?.value || "";

    const message = checkValidData(enteredName, enteredEmail, enteredPassword);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: enteredName,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          console.error("Login error:", error);
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear errors when toggling
  };

  return (
    <div>
      <Header />

      <div className="absolute w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_small.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900"
        />

        <p className="text-red-500">{errorMessage}</p>

        <button
          type="button"
          onClick={handleButtonClick}
          className="p-4 my-6 bg-red-700 w-full"
        >
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
