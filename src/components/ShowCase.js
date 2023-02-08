import {BsGithub, BsTwitter, BsLinkedin} from 'react-icons/bs' 
import { Link } from 'react-router-dom' 


import cover from '../assets/cover.png' 
import Testimonial from './Testimonial'
import {motion} from 'framer-motion'

const ShowCase = () => {
  return (
    <>
    <motion.div className='flex flex-col-reverse sm:flex-row mt-24 items-center justify-between' initial={{y: 100}}
    animate={{y:0}}> 
        {/* left */}
      <div className='space-y-6 text-center sm:text-left'> 
        <h1 className='font-bold text-gray-800 text-2xl'>Abshir Africa</h1> 
        <p className='text-gray-400 text-xl'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p> 

        <div className='flex space-x-4 text-center sm:justify-start justify-center'> 

        <h1 className='cursor-pointer text-2xl transition-all hover:text-blue-600'> 
            <Link to="/https://github.com/abshirafrica/" target='_blank' ><BsGithub /> </Link> 
           </h1> 

           <h1 className='cursor-pointer text-2xl transition-all hover:text-blue-600'> 
            <Link to="/" target='_blank'><BsTwitter /> </Link>
           </h1> 

           <h1 className='cursor-pointer text-2xl transition-all hover:text-blue-600'>  
            <Link to="/https:www.linkedin.com/in/abshir-mohamed-ahmed-173454230" target='_blank'><BsLinkedin /> </Link>
           </h1> 
        
        </div>

        <button className='bg-blue-600 cursor-pointer text-white p-2 hover:-translate-y-1 duration-100 rounded-lg'><a href='resume.pdf download={true}'>Download CV</a></button>
      </div>
      {/* right */}

      <div className='w-800 mb-10 sm:m-0'>
        <img src={cover}  alt="Cover"  className=' w-96 rounded-full object-cover'/>
      </div>
    </motion.div>

    <Testimonial />

    </>
  )
}

export default ShowCase
