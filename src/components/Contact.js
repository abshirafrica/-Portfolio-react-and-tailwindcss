import {FcCallback} from 'react-icons/fc'
import {CgMail} from 'react-icons/cg'
import {HiOutlineLocationMarker} from 'react-icons/hi'


import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'


 
const Contact = () => {

  const form = useRef();
  const [send, setSend] = useState(false);
  

  // send email

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jlaelyq', 
      'template_gndreuc', 
      form.current, 
      'k2KKcTt9R7MOZQhgq'
      )
      .then((result) => {
          console.log(result.text);
          setSend(true)

      }, 
      (error) => {
          console.log(error.text);
      });
  };




  return (
    <motion.div className='flex flex-wrap mt-20 sm:flex-nowrap items-center space-x-5 justify-around p-10 sm:px-6 lg:px-8' initial={{x: 100, y: 100}}
    animate={{x:0, y:0}}>
        {/* left */}
      <div className='space-y-7'>
        
            <h1 className='font-bold text-4xl'>Contact info</h1>
            <p className='text-gray-400'>In publishing and graphic design, Lorem ipsum is 
            <br />placeholder text commonly used to demonstrate <br/> the visual form of a documentor a typeface without</p>

            <div className='text-md flex text-gray-500 space-x-2 items-center' >
            <FcCallback /> 
            <p>+252628664727</p>
            </div>
            <div>
            <CgMail  />
            <p> Abshir@haaraay.com</p>
            </div>
            <div>
            < HiOutlineLocationMarker /> 
            <p>Buulo_Burte, Hiiraan, Somalia</p>
        </div>

      </div>

      {/* right */}
      <form className='w-ull max-md space-y-6' onSubmit={sendEmail} ref={form}>
        <input type="text" placeholder='Name' required className='rounde-sm p-3 w-full border border-gray-200  placeholder-gray-400 focus:outline-none fosuc:ring-indigo-500 focus:border-indigo' name="name"></input>

        <input type="email" placeholder='Email' required className='rounde-sm p-3 w-full border border-gray-200  placeholder-gray-400 focus:outline-none fosuc:ring-indigo-500 focus:border-indigo' name="email"></input>

        <textarea 
        type="text" placeholder='Name' required className='rounde-sm p-8 w-full border border-gray-200  placeholder-gray-400 focus:outline-none fosuc:ring-indigo-500 focus:border-indigo' name="message">
          
        </textarea>

        <button type='submit' className='w-full p-2 text-lg rounded-md text-white bg-blue-300 focus:outline-none focus:ring-2'>Send mesage</button>
        {
          send && (
            <div className='p-4 mb:4 text-gray-700 bg-green-100 rounded-lg' role='alert'>
              <span className='font-medium'>Thanks for your reaction </span>
            I will contact you as soon as possible
            </div>
          )
        }
      </form>
    </motion.div>
  )
}

export default Contact
