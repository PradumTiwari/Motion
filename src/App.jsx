import {motion} from "motion/react";
import "./App.css";

function App(){

  return(
    <motion.div
    
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:1}}
    className="w-40 h-40 bg-green-500 rounded-lg flex items-center justify-center text-white text-lg"
    >
    Hello Framer Motion
    </motion.div>
  )

}


export default App;