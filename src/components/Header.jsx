import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center '>
        <h1 className='text-white font-semibold text-2xl'
        >Hello <br /> <span className='text-4xl'>Darshil 👋</span> </h1>
        <button className='p-3 bg-red-500 rounded-md hover:bg-red-700 font-semibold text-white'>
            Log Out 
        </button>
    </div>
  )
}

export default Header
