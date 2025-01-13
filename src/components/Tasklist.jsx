import React from 'react'

const Tasklist = () => {
  return (
    <div className='mt-12 flex justify-between items-center gap-7'>
      <div className='bg-red-500 h-40 w-[40%] rounded-2xl'>
            <h1 className='text-white font-bold mt-6 p-3 pl-7  text-3xl'>0</h1>
            <h2 className='text-white font-bold p-3 pl-7 text-2xl'>New Task</h2>
      </div>
      <div className='bg-emerald-500 h-40 w-[40%] rounded-2xl '>
            <h1 className='text-white font-bold mt-6 p-3 pl-7 text-3xl'>0</h1>
            <h2 className='text-white font-bold p-3 pl-7 text-2xl'>New Task</h2>
      </div>
      <div className='bg-blue-500 h-40 w-[40%] rounded-2xl'>
            <h1 className='text-white font-bold mt-6 p-3 pl-7 text-3xl'>0</h1>
            <h2 className='text-white font-bold p-3 pl-7 text-2xl'>New Task</h2>

      </div>
      <div className='bg-yellow-500 h-40 w-[40%] rounded-2xl'>
            <h1 className='text-white font-bold mt-6 p-3 pl-7 text-3xl'>0</h1>
            <h2 className='text-white font-bold p-3 pl-7 text-2xl'>New Task</h2>
      </div>
      
      
    </div>
  )
}

export default Tasklist
