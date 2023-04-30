import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
    hidden:{},
    visible: {
        transition : { staggedChildren: 0.2 }
    }
};

const projectVariant = {
    hidden: {opacity: 0, scale: 0.8},
    visible : {opacity: 1, scale: 1 }
}

const Project = ({title, text}) =>{
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center
    items-center text-center p-16 text-deep-blue`;

 const projectTitle = title.split(" ").join('-').toLowerCase();
    return (
        <motion.div variants={projectVariant} className='relative'>
            <div className={overlayStyles}>
              <p className="text-2xl font-playfair">{title}</p>
              <p className="mt-7">
                {text}
              </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} className='w-[400px] h-[400px]'/> 

        </motion.div>
    )
}
const Projects = ()=>{
    return(
        <section id="projects" className="pt-48 pb-48">
            {/* HEADINGS */}
            <motion.div
                className="md:w-2/4 max-auto text-center "
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration:0.5}}
                 variants={{
                    hidden: {opacity:0, y:-50},
                    visible: {opacity: 1, y:0},
                 }}>
                    <div>
                    <p className="font-playfair font-semibold text-4xl">
                        My <span className="text-red">PRO</span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3"/>
                    </div>
                </div>
             
                <p className="mt-10 mb-7">
                    Here are my projects which vary from ux-ui design, data analytics projects to real world applications.
                    
                </p>
                </motion.div>
                {/* PROJECTS */}
                <div className="flex justify-center">
                <motion.div
                className="sm:grid sm:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                 variants={{container}}>

                   {/* ROW 1 */}
                    <div
                     className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair fontsemibold">
                        BEAUTIFUL USER INTERFACES
                    </div>

                   <a href="https://clone-realtor.vercel.app/" target="_blank" rel="noreferrer" > <Project title="Project 1" text="beautiful 1"/></a>
                    <a href="https://prism-4-qi8gj4797-lodiajames.vercel.app/" target="_blank" rel="noreferrer" ><Project title="Project 2" text="Prism-4 is a professional looking website created with ReactJs. Designed with better users experiences and included information about a company, its products or services " /></a>

                   {/* row 2 */}
                  <a href="https://lodiajames.github.io/sprintgame/" target="_blank" rel="noreferrer" ><Project title="Project 3" text="A game application that performs calculations such as addition, subtraction, multiplication and division. 
            It uses a series of questions for the user to guess the correct answer.
             Users can play while enhancing mental calculation skills"/></a> 

                  <a href="https://lodiajames.github.io/photogenerator/" target="_blank" rel="noreferrer" > <Project title="Project 4" text="It is a form of application that allows people to view new trended images and the ability to share them. 
         " className='text-xl'/></a>

                  <a href="https://www.figma.com/proto/xwJbWh4HSYoPbanglGMHMS/Tutoring-App?page-id=0%3A1&node-id=56%3A170&starting-point-node-id=56%3A170&scaling=scale-down" target="_blank" rel="noreferrer" > <Project title="Project 5" text="This is a fully educational website design, with multiple users interfaces and different pages.
                Users can choose teachers and time available. Multiple platforms are integrated in order to have a better users experience"/></a> 
                  
                    {/* row 2 */}
              
                <a href="https://docs.google.com/presentation/d/16yoQTIaY64eSPTkkLK5BUozD5Fsv6p3u/edit?usp=sharing&ouid=114124638320481097289&rtpof=true&sd=true" target="_blank" rel="noreferrer" > <Project title="Project 6" text="A brief Analysis about the falcon9
               Developed by SpaceX for the dependable and economical transportation of satellites, as well as for the transportation of humans on SpaceX's Dragon spacecraft to orbiting destinations including the International Space Station"/></a> 
                  
                   <a href="https://zulumovie.netlify.app/" target="_blank" rel="noreferrer"><Project title="Project 7" text="imbd movie clone. Users can view recents movies, their overview, and the abilities to search movies. There is also an integrations of dark and light mode"/></a>
                   <div
                     className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-400px] text-2xl font-playfair fontsemibold">
                        SMOOTH USER INTERFACES
                    </div>
                 

                    </motion.div>

                </div>

        </section>
    )
}
export default Projects