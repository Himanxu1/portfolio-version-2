import ProjectCard from "../Components/ProjectCard"
import { projects } from "../utils/constants"
import {motion} from 'framer-motion'

const Projects = () => {
  return (
    <div className="mt-6 ">
      <div className="grid sm:grid-cols-2 grid-col-1 place-items-center">
        <motion.div
         initial={{ x:-1000}}
         animate={{ x: 2}}
        >

       {
        projects.map((project)=>{
          return (
            <ProjectCard  project={project} key={project.id} />
          )
        })
       }
        </motion.div>
      </div>
    </div>
  )
}

export default Projects