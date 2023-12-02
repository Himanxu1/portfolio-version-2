import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const ProjectCard = ({project}) => {
    // eslint-disable-next-line react/prop-types
    const {title,description,img,technologies,live,github} = project
  return (
    <div className="border cursor-pointer border-slate-400 p-2 m-2 flex flex-col w-[300px] justify-center items-center rounded ">
        <img src={img}  className="w-60 h-40 object-contain"/>
        <div className="flex items-center ">
        <h1 className="font-mono font-semibold">{title}</h1>
        <div className="flex ml-20">
          <a href={live}>
        <FaLink className="text-xl"/>
          </a>
          <a href={github}>
        <FaGithub className="text-xl ml-6"/>
          </a>
        </div>
        </div>
    </div>
  )
}

export default ProjectCard