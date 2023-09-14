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
import { NETLOGO, SUPPORTED_LANG }  from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const user = useSelector((store) => store.user);
  const languageSupport = useSelector((store)=> store.gptSlice.showGptSearch)

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
            photoURL: photoURL,})
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
      unsuscribe();
    }
  }, []);


  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-44"
        src={NETLOGO}
        alt="logo"
      ></img>
      {user && (
        <div className="flex p-2">
          {languageSupport && <select className=" m-2 flex items-center rounded-lg h-9 bg-gray-700 p-2 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANG.map((lang) => { 
              return <option key={lang.identifier} value={lang.name}>{lang.name}</option>
            })}
          </select>}
          
          <button className = "px-3 py-4  mx-4 my-2 h-2 flex items-center rounded-lg text-white bg-purple-800" onClick={handleGptSearchClick}> {languageSupport ? "Homepage": "GPT search"}</button>
          <img className="text-white w-12 h-12 p-2" src={user.photoURL} alt="Icon"></img>
         
           
          <button
            className="text-white  font-bold text-grey-700 "
            onClick={handleSignout}
          >(Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
