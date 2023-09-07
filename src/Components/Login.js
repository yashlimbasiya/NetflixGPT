import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { AVATARURl } from "../utils/constants";


const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoggedin, setLoggedIn] = useState(true);
  const [error, setError] = useState(null);

  const toggleform = () => {
    setLoggedIn(!isLoggedin);
  };

  const handleClick = () => {
    // Validate the form Data
    const message = validation(email.current.value, password.current.value);
    setError(message);
    if (message) return;
    if (!isLoggedin) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATARURl
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              
            })
            .catch((error) => {
              setError(error.message);
              // An error occurred
            });
         
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <img
        className="absolute "
        src={LOGO}        alt="imag"
      ></img>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="text-white absolute mx-auto my-36 right-0 left-0 w-3/12 p-10 pb-10 bg-black bg-opacity-80"
      >
        <h1 className="font-bold text-3xl p-2 m-2">
          {isLoggedin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoggedin && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email ID"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800"
        />
        {error}
        <button
          onClick={handleClick}
          className="bg-red-700 p-4 my-4 w-full rounded-lg"
        >
          {isLoggedin ? "Sign In" : "Sign Up"}
        </button>
        {isLoggedin && (
          <p className="py-4 cursor-pointer" onClick={toggleform}>
            New to Netflix? Sign Up Now.
          </p>
        )}
        {!isLoggedin && (
          <p className="py-4 cursor-pointer" onClick={toggleform}>
            Already a member? Sign In here.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
