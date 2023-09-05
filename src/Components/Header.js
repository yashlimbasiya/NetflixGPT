import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { auth } from '../utils/firebase';
import { signOut } from '@firebase/auth';
import { removeUser } from '../utils/userSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  
  const user = useSelector( store => store.user);
  
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const handleSignout = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // dispatch(removeUser())
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo">

      </img>
   { user &&  ( <div className="flex p-2">
      <img className="w-12 h-12 p-2" src = { user.photoURL } alt="Icon"></img>
      <button className="p-2 font-bold text-grey-700 " onClick={handleSignout}>(Sign Out)</button>
    </div> ) }
    </div>
  )
}

export default Header
