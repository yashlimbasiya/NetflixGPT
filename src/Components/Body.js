import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider, useNavigate } from 'react-router'
import { useEffect } from 'react';
import {auth} from "../utils/firebase"
import { onAuthStateChanged } from '@firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
  const dispatch= useDispatch();
  // const navigate = useNavigate();
const appRouter = createBrowserRouter([
    {path: "/",
    element: <Login/>},
    {path: "/browse",
    element: <Browse/>},
    
])
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, displayName: displayName, email: email , photoURL: photoURL })
              );
              // navigate("/browse");
      // navigate("/browse")
      // ...
    } else {
      dispatch(removeUser())
      // navigate("/")
      // User is signed out
      // ...
    }
  });
  },[])
  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
