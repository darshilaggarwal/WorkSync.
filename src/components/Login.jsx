import React from 'react'
import { useState } from 'react';



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const SubmitHandler = (e)=>{
        e.preventDefault()
        console.log("email is", email);
        console.log("password is", password);
    
        setEmail("")
        setPassword("")
    
        
    }

  return (
    <div>
      <div className='bg-zinc-900 w-screen h-screen flex justify-center items-center'> 
    <div className='border-2 border-emerald-500 p-20 rounded-lg'> 
        <form onSubmit={(e)=>{
            SubmitHandler(e)
        }}
        className='flex flex-col items-center justify-center gap-6' >

            <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
              }}
            className='text-gray-50 outline-none border-2 border-emerald-500 bg-transparent rounded-[50px] p-4'
             type="email" placeholder='Enter your e-mail' required/>

            <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
              }}
            className='text-gray-50 outline-none border-2 border-emerald-500 bg-transparent rounded-[50px] p-4'
             type="password" placeholder='Enter your password' required />

            <button className='p-3 bg-emerald-500 rounded-[50px]'
            >Submit</button>
        </form>
    </div>
      </div>
    </div>
  )
}

export default Login
