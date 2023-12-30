import {motion} from 'framer-motion'

const About = () => {
  return (
    <div>
      <motion.div 
        initial={{ y:40,opacity:0}}
        animate={{ y: 0,opacity:1}}
        transition={{ ease: "easeOut", duration: 1 }}
      >
      <p className="p-6">I'm Software Developer based on Uttrakhand India. I build stuff on web ,love to explore the how things works under the hood , Interested in scalable systems. Love travelling and exploring the world</p>
      </motion.div>
    </div>
  )
}

export default About