import BlogCards from "../Components/BlogCards"
import { blogs } from "../utils/constants"
import {motion} from 'framer-motion'
const Blogs = () => {
  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 grid-col-1 place-items-center">
          <motion.div
         initial={{ x:-1000}}
         animate={{ x: 2}}
        >
       {
        blogs.map((blog)=>{
          return (
            <BlogCards  blog={blog} key={blog.id} />
          )
        })
       }
       </motion.div>
      </div>

    </div>
  )
}

export default Blogs