import projects from '../assets/Projects.json'
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <motion.div className='mt-7' initial={{x: 100}}
    animate={{x:0}}>
      <div className=" px-4 text-center mt-3">
        <h1 className="text-gray-600 text-4xl md:text-6xl">Some of my work....</h1>
        <p className="text-gray-400 text-base">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</p>
      </div>
        {/* Projects */}

      <div className='flex mt-7 justify-around w-full flex-wrap shadow-xl my-5 cursor-pointer '>
        {

            projects.map((project) => (
                <div className='flex flex-col max-w-sm shadow-xl cursor-pointer'>

                    <img src={project.image} alt='Image' className='w-full h-72' />
                    <h1 className='px-4 mt-2 text-2xl mb-2'>{project.title}</h1>

                    <div>   
                            <h5>{project.description}</h5>
                            {/* socials */}
                            <div> 
                                <button className='bg-blue-600 ml-5 my-3 rounded-md py-1 px-3 text-white text-xl'><a href={project.link}target='_blank'>GitHub </a></button>
                                <button className='bg-red-600 ml-5 my-3 rounded-md py-1 px-3 text-white text-xl'> <a href={project.live}target='_blank'>Live </a></button>

                                </div>

                                {/* tecnology */}

                                <div className='flex items-center text-center pb-2 mt-2'>
                                    <h1 className='bg-gray-300 px-3 py-1 rounded-md text-lg mt-4 ml-2'>{project.tech[0]}</h1>
                                    <h1 className='bg-gray-300 px-3 py-1 rounded-md text-lg mt-4 ml-2'>{project.tech[1]}</h1>
                                    <h1 className='bg-gray-300 px-3 py-1 rounded-md text-lg mt-4 ml-2'>{project.tech[3]}</h1>
                                    <h1 className='bg-gray-300 px-3 py-1 rounded-md text-lg mt-4 ml-2'>{project.tech[3]}</h1>
                                    

                                    </div>

                        </div>
               

                </div>
            ))

        }
      </div>



    </motion.div>
  )
}

export default Projects
