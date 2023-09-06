import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "@firebase/auth";
import { removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { addUser } from "../utils/userSlice";
import { NETLOGO }  from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeUser())
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsuscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
        // User is signed out
        // ...
      }
    });
    return () => {
      unsuscribe()
    }
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src={NETLOGO}
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          <img className="text-white w-12 h-12 p-2" src={user.photoURL} alt="Icon"></img>
          <button
            className="text-white p-2 font-bold text-grey-700 "
            onClick={handleSignout}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
