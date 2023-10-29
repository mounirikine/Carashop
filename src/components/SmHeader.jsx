import React from 'react'
import { Link } from 'react-router-dom'

const SmHeader = () => {
  return (
    <div className='flex justify-between px-20 items-center  '>
        <div className='w-4/12'>
            <h1 className='text-2xl text-violet-700 font-bold'>Categoryes :</h1>
        </div>
        <div className='w-8/12 flex items-center justify-center gap-4 px-80'>
        <Link className='text-lg font-light hover:text-violet-700'>Men</Link>
        <Link className='text-lg font-light hover:text-violet-700'>Women</Link>
        <Link className='text-lg font-light hover:text-violet-700'>jewelry</Link>
        <Link className='text-lg font-light hover:text-violet-700'>Electronic</Link>
        <Link className='text-lg font-light hover:text-violet-700'>CommingUp</Link>
        <Link className='text-lg font-light hover:text-violet-700'>Latest</Link>
        <Link className='text-lg font-light hover:text-violet-700'>Contact</Link>
        <Link className='text-lg font-light hover:text-violet-700'>Help</Link>
        </div>
        
    </div>
  )
}

export default SmHeader