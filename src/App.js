import Navbar from './scenes/Navbar.jsx'
import DotGroup from './scenes/DotGroup'
import {useEffect, useState} from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import Landing from './scenes/Landing'
import LineGradient from './components/LineGradient'
import MySkills from './scenes/MySkills'
import Projects from './scenes/Projects'
import About from './scenes/About'
import Contact from './scenes/Contact'
import Footer from './scenes/Footer.jsx'


function App() {
  const [selectedPage, setSelectedPage] = useState('home')
   const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
   const [isTopOfPage, setIsTopOfPage] = useState(true);

   useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.screenY !==0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
   }, []);

  return (
    <div className="app bg-deep-blue">
  
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    
     <div className='w-5/6 mx-auto md:h-full'>
          {isAboveMediumScreens && (
            <DotGroup
             selectedPage= {selectedPage}
            setselectedPage={setSelectedPage}/>
          )}
          <Landing setSelectedPage={setSelectedPage}/>

     </div>
     <LineGradient />
     <div className='w-5/6 mx-auto md:h-full'>
      <MySkills />
     </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
      <Projects/>
     </div>

      <LineGradient />
      <div className=' w-full md:h-full'>
      <About/>
     </div>
     
     <LineGradient className='mb-100' />
      <div className="w-5/6 mx-auto md:h-full">
      <Contact/>
     </div>

     <Footer />
       
    </div>
  );
}

export default App;
