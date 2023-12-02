import {motion} from 'framer-motion'

const BlogCards = ({blog}) => {
  const {title,img,live} = blog
  return (
    <a href={live}>
      <motion.div
    whileHover={{
      scale: 1.2,
      transition: { duration: 1 },
    }}
  whileTap={{ scale: 0.9 }}
>
        <div className="border cursor-pointer border-slate-400 p-2 m-2 flex flex-col justify-center items-center rounded w-[300px] ">
        <img src={img}  className="w-60 h-40 object-contain"/>
        <h1 className="font-mono font-semibold">{title}</h1>
    </div>

</motion.div>
    </a>
  )
}

export default BlogCards