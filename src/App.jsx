import { motion, AnimatePresence,LazyMotion, domAnimation, m } from "motion/react";
import { useState } from "react";



function App() {
  const [isOpen, setisOpen] = useState(true);


  return (
    <div>
      <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="box"
      >
        Hello LazyMotion!
      </m.div>
    </LazyMotion>
    </div>
  );


}


export default App;