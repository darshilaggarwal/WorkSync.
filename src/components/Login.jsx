import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='bg-zinc-900 w-screen h-screen flex justify-center items-center'> 
    <div className='border-2 border-emerald-500 p-20 rounded-lg'> 
        <form className='flex flex-col items-center justify-center gap-8' >
            <input className='text-gray-400 outline-none border-2 border-emerald-500 bg-transparent rounded-[50px] p-4'
             type="email" placeholder='Enter your e-mail' required/>
            <input className='text-gray-400 outline-none border-2 border-emerald-500 bg-transparent rounded-[50px] p-4'
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
