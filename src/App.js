import {motion} from 'framer-motion';
import {useState} from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div 
      transition={{layout: {duration: 1, type: "spring"}}} 
      layout onClick={() => setIsOpen(!isOpen)} 
      className='card'
      style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'}}
      >
      <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
      {isOpen && (
      <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      tranistion={{duration: 1}}
      exit={{opacity: 0}}
      className ="expand"
      >
        <p>This is an expanding card created using react.
           It's pretty cool. You can use this on any site you want.
           All you need is to use framer-motion. 
        </p>
      </motion.div>
       ) } 
      </motion.div>
    </div>
  );
}

export default App;
