
import Projects from "./Projects";
import ShowCase from "./ShowCase";
import About from "./About";
import Contact from './Contact';

import {AnimatePresence} from 'framer-motion';

import {  Route, Routes, useLocation } from "react-router-dom";


const Main = () => {
    const location = useLocation()
  return (
    <div>
        <AnimatePresence>
       <Routes location={location} key={location.pathname}>
              <Route path="/" element={ <ShowCase/>}  />
              <Route path="/projects" element={<Projects />}/>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            </AnimatePresence>
    </div>
  )
}

export default Main
