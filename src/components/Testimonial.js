import React from 'react'

import tests from '../assets/testimonial.json'

const Testimonial = () => {
  return (
    <div>

                <div className='text-center text-3xl mt-16 text-gray-500 font-medium'>
                  <h1>My happy clients</h1>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 w-full bg-white '>

                      {
                          tests.map((clien => (
                            <div key={clien.id} className='rounded-3xl shadow-md p-10'>

                              <div className='flex items-center'> 
                                <img src={clien.img} alt="" className='w-12 h-12 rounded-full object-cover' />
                                <p className='ml-5 space-y-0 font-bold text-base'>
                                  <a href={clien.link} className="text-md" >{clien.name} </a>
                                <p className='text-gray-400 text-sm -mt-4 font-normal'>{clien.nickname}</p>                                
                                </p>
                              </div>

                              {/* button */}

                              <div>
                                <h1>{clien.desc}</h1>
                                 </div>
                              
                            </div>
                          )))  
                      }



          </div>

                    
    
    </div>
  )
}

export default Testimonial


