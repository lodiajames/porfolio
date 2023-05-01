import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import {BsDownload} from 'react-icons/bs'
import resume from "../assets/softwareresume.pdf";



const About = () => {
    return (
      <section id="about" className="pt-32 pb-16 text-center">
    

        {/* HEADING */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-red ">
           About me
          </p>
          <LineGradient width="w-[200px] flex mx-auto"/>
         
        </motion.div>


        <motion.div
          className=" text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <div className="my-10 mx-20 border p-10 flex flex-col justify-center text-center items-center border-red bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                 <h2 className="font-black text-3xl">HELLO <span className="text-red">!</span></h2>
                 <p className="text-xl py-2">Here's who i am & what i do</p>
                 {/* button resume */}
                <a href={resume} download='resume'> <button 
              className=" w-[150px] py-2 px-4  flex justify-center gap-2 items-center rounded-md outline-none border-yellow p-2 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:border-0
               hover:text-white transition duration-500 download"
              type="submit"
            >
            <BsDownload className=""/><span className="text-indigo-900 hover:text-white">RESUME</span>
            </button> </a>

            <p className="md:mx-20 mt-10 first-letter:text-purple-700 text-xl">My name is Ibrahima Diallo a self-taught passionate Software developer from New York, I've work on countless web projects specially on the  front-end. I have been passionated to tech since my early age even though my academic background is on accounting.
            With the magic of tech i can help design, test and launch different ideas. I like exploring different technologies in order to expand efficiently my tech skills.
              

            </p> 
            <span><a href="https://lodiajames.github.io/resume/" target="_blank" rel="noreferrer" className="bg-orange-600 mx-4 p-2 rounded hover:bg-orange-800 transition duration-200 ease-in-out inline-block mt-1">More about me</a></span>
            </div>
           

         </motion.div> 

      </section>
    );
  };
  
  export default About;