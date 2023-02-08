
import { useState } from 'react'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import { Link } from "react-router-dom"




const Header = () => {
  
    const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-between pt-2">
      {/* logo */}
      <div className="text-2xl text-blue-400 font-bold">
        <Link to="/">Abshir Africa</Link>
      </div>

      {/* large screen navigtion */}
      <div className="hidden md:flex items-center gap-6 font-medium text-gray-600 ">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <div className="bg-blue-400 text-white hover:-translate-y-1 duration-100 px-3 py-1 rounded-xl">
        <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* mobele navigtion */}

      <div className={`fixed top-0 z-50 bg-white w-60 h-screen shadow-2xl ${open ? 'right-0' : 'right-[-100%]'} md:hidden flex flex-col space-y-7 font-medium text-gray-600 pt-20 p-7 duration-100`}>
         <Link to="/">Home</Link>
         <Link to="/projects">Projects</Link>
         <Link to="/about">About</Link>
        <div className="bg-blue-400 w-24 text-white hover:-translate-y-1 duration-100 px-3 py-1 rounded-xl">
        <Link to="/contact">Contact</Link>
        </div>
        
      </div>


      {/* toggle button */}
      <div className='text-2xl md:hidden z-50' onClick={() =>
        setOpen(!open)}>
        {
          open ? (
            <GrFormClose className='h-7 cursor-pointer' GrFormClose />
          ):
           <AiOutlineMenuUnfold className='h-7 cursor-pointer' />
        }
       
      </div>
    </div>
  )
}

export default Header
