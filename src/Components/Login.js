import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
const[isLoggedin,setLoggedIn] =useState(true)
const toggleform = ()=>{
    setLoggedIn(!isLoggedin)
} 
return (
    <div>
    <Header/>
     <img className="absolute "src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/3bd48e1e-8f08-497c-b50b-44d0aebc2a65/US-en-20230821-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
     alt="imag"> 
     </img>
     <form className="text-white absolute mx-auto my-36 right-0 left-0 w-3/12 p-10  bg-black bg-opacity-80">
         
         <h1 className="font-bold text-3xl p-2 m-2">{isLoggedin ? "Sign In" : "Sign Up" }</h1>
         {!isLoggedin && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800" /> }
         <input type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-800" />
         <input type="text" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />
         <button className="bg-red-700 p-4 my-4 w-full rounded-lg">{isLoggedin ? "Sign In" : "Sign Up" }</button>
         {isLoggedin && <p className="py-4 cursor-pointer" onClick={toggleform}>New to Netflix? Sign Up Now.</p>}
         {!isLoggedin && <p className="py-4 cursor-pointer" onClick={toggleform}>Already a member? Sign In here.</p> }
     </form>
    </div>
  )
}

export default Login
