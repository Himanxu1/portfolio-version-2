import { Link, useResolvedPath } from "react-router-dom"
import tailwind from '../assets/tailwind.png';
import reactj from '../assets/reactj.png';
import nodejs from '../assets/nodejs.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import postgres from '../assets/postgres.png';
import mongodb from '../assets/monogodb.png';
import netlify from '../assets/netlify.png';
import { useEffect, useState } from "react";

import {motion} from 'framer-motion'


const Info = () => {
      const  {pathname} = useResolvedPath()
      const [activeTab,setActiveTab] = useState("projects")

    

      const handleClick = (item) =>{
           if(item === "experience"){
              setActiveTab("experience")
           }else if(item === "projects"){
            setActiveTab("projects")
           }else if(item === "blogs"){
            setActiveTab("blogs")
           }else{
            setActiveTab("about")
           }
      }

  return (
    <div>
      <motion.div
        initial={{ x:100,opacity:0}}
        animate={{ x: 0,opacity:1}}
        transition={{ ease: "easeOut", duration: 1 }}
      >
      <h1 className="text-red-100 text-4xl sm:text-2xl font-bold">Himanshu Singh</h1>

      <p className="mt-4 text-xl">Curious developer love to build stuff on web </p>
      </motion.div>

      <div className="mt-10">
          <h1 className="text-xl font-mono">Technologies</h1>
          <div className="flex sm:flex-row flex-col justify-between mt-4  ">
            <p className="flex items-center p-2"><img src={reactj}  className="w-10 h-10 mr-2" />React JS</p>
            <p className="flex items-center p-2"><img src={tailwind}  className="w-10 h-10 mr-2" />Tailwind css</p>
            <p className="flex items-center p-2"><img src={nodejs}  className="w-10 h-10 mr-2" />Node JS</p>
            <p className="flex items-center p-2"><img src={mongodb}  className="w-10 h-10 mr-2" />Mongodb</p>
            <p className="flex items-center p-2"><img src={postgres}  className="w-10 h-10 mr-2 bg-blue-400" />Postgres</p>
            <p className="flex items-center p-2"><img src={git}  className="w-10 h-10 mr-2" />Git</p>
            <p className="flex items-center p-2"><img src={github}  className="w-10 h-10 mr-2"  />Github</p>
            <p className="flex items-center p-2"><img src={netlify}  className="w-10 h-10 mr-2" />Netlify</p>
          </div>
      </div>

      
<div className="flex justify-between text-sm mt-10  sm:px-[300px] ">

<Link to='/experience'>
      <button className ={activeTab === "experience" ? "  px-2 rounded font-semibold py-1 bg-white text-black" :"px-2 rounded font-semibold py-1 bg-black text-white border-white border" } onClick={()=>handleClick("experience")} >Experiences</button>
</Link>
<Link to='/'>
      <button  className ={activeTab === "projects" ? "  px-2 rounded font-semibold py-1 bg-white text-black" :"px-2 rounded font-semibold py-1 bg-black text-white border-white border" } onClick={()=>handleClick("projects")} >Projects</button>
</Link>
<Link  to='/blogs'>
      <button  className ={activeTab === "blogs" ? "  px-2 rounded font-semibold py-1 bg-white text-black" :"px-2 rounded font-semibold py-1 bg-black text-white border-white border" } onClick={()=>handleClick("blogs")} >Blogs</button>
</Link>
<Link to='/about'>
      <button  className ={activeTab === "about" ? "  px-2 rounded font-semibold py-1 bg-white text-black" :"px-2 rounded font-semibold py-1 bg-black text-white border-white border" }  onClick={()=>handleClick("about")} >About</button>
</Link>
</div>
    </div>
  )
}

export default Info