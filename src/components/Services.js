import servisec from '../assets/services.json'
import {BiDesktop} from 'react-icons/bi'

const Services = () => {
  return (
    <div>
      <h1 className='text-center text-3xl text-gray-500 font-semibold mt-14'>What i offer you...</h1>

      <div className='grid h-max grid-cols-1 md:grid-cols-2 gap-10 mt-10 bg-white'>
        {
          servisec.map((servise) =>(
            <div key={servise.id} className="m-5 rounded-3xl shadow-md p-10 "> 
              <div className='flex space-y-5 items-center flex-col'> 
              <BiDesktop className='rounded-full w-12 h-12 object-cover' />  
              <h1 className='text-md ml-5 space-y-0'>{servise.name}</h1>
              </div>

              <div className='text-gray-600 p-4 text-lg'> 
                <p>{servise.desc}</p> 

                </div>

              </div>
          ))
        }

      </div>
    </div>
  )
}

export default Services
