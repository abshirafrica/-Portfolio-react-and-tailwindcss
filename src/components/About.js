import cover from '../assets/cover.png'
import {DiJavascript1, DiReact, DiNodejsSmall} from 'react-icons/di'
import {SiTailwindcss, SiReduxsaga, SiGit} from 'react-icons/si'
import {BsCode, BsStrava, BsFacebook, BsFillBookFill} from 'react-icons/bs'
import Service from './Services'
import {motion} from 'framer-motion'


const About = () => {
  return (
    <>
    <motion.div className='grid grid-col-1 md:grid-cols-2 mt-24' initial={{y: 100}}
    animate={{y:0}}>
      {/* left */}
      <div className='flex items-center flex-wrap relative justify-center h-max'>
      <div className='w-3/4 h-3/4 rounded-3xl shadow-slate-400'>
        <img src={cover} alt="Image" className='w-full h-full object-cover' />
      </div>
      </div>
      
      {/* right */}
      <div className='p-5 md:p-0 md:text-left text-center'>
        <h1 className='font-semibold text-3xl '>About me</h1>
        <p className='text-lg pt-4'>Lorem Ipsum is not simply random text. It has roots</p>

          {/* tools */}

          <div className='mt-5 '>
            <h2 className='text-2xl'>Tools</h2>
            <div className='flex items-center flex-wrap w-full '>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <DiJavascript1 /> JavaScript

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <DiReact /> React

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <SiTailwindcss /> Taiwincss

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <SiReduxsaga /> Reduxsage

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <SiGit /> Git

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <DiNodejsSmall /> NodeJs

                </div>
            </div>
          </div>
        

        {/* interest */}

        <div className='mt-2 '>
            <h2 className='text-2xl'>Interests</h2>
            <div className='flex items-center flex-wrap w-full '>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <BsCode /> Coding

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <BsStrava /> Travellng

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <BsFacebook /> FaceBook

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <BsFillBookFill /> Reading

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <SiGit /> Learning

                </div>
                <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                    <DiNodejsSmall /> Learning

                </div>
            </div>
          </div>
      </div>

     
    </motion.div>

    <Service />

    </>
  )
}

export default About
