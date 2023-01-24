import React from 'react'
import house from '../assets/home.png'

const Navbar = () => {
  return (
    <div className='flex flex-row bg-[#FECD04] h-10 m-1 p-1 pl-5  rounded-md w-90'>
        <button>
            <img className='flex w-7 h-7' src={house} />
        </button>
    </div>
  )
}

export default Navbar