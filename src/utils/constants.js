import walter from '../assets/walter.png'
import litebulb from '../assets/litebulb.png'
import netflixgpt from '../assets/netflixgpt.png'
import youtube from '../assets/youtube.png'
import hoisting from '../assets/hoisting.png'
import callback from '../assets/callback.png'
import eventloop from '../assets/eventloop.png'
import closure from '../assets/closure.png'


export const projects = [
    {
        id:1,
        title:"Walter",
        description:{
            item1:"A full stack headphone ecommerce website where user can buy headphones",
            item2:"Integrated Redux Toolkit for efficient state management , with cart and wishlist management",
            item3:"Integrated JWT authentication for web security",
            item4:"An admin panel to perform CRUD operations and track user and order info"
        },
        technologies:["React JS", "Node js", "Mongo db" , "Redux toolkit", "tailwind css"],
        img:walter,
        live:"https://walter-frontend.vercel.app/",
        github:"https://github.com/Himanxu1/walter-frontend"
    },
    {
        id:2,
        title:"litebulb",
        description:{
            item1:"Implemented a user-friendly interface, optimizing the user experience for idea submission and vouching",
            item2:"Utilized Context API for efficient state management, ensuring seamless data flow within the application",
            item3:"Developed a voting mechanism, allowing users to vouch for their favorite ideas"
        },
        technologies:["React JS", "tailwind css","Firebase"],
        img:litebulb,
        live:"https://www.litebulb.xyz/",
        github:"https://github.com/Himanxu1/lightbulb-frontend"
    },
    {
        id:3,
        title:"Youtube Clone",
        description:{
            item1:"Implemented advanced debouncing techniques for the optimized search feature",
            item2:"Developed a robust comment system with nested threads",
            item3:"Integrated a real-time chat feature using Api polling technology"
        },
        technologies:["React JS", "tailwind css","Redux Toolkit"],
        img:youtube,
        github:"https://github.com/Himanxu1/Youtube-clone",
        live:"https://youtube-clone-black-mu.vercel.app/"
    },
    {
        id:4,
        title:"NetflixGPT",
        description:{
            item1:"Build Netflix clone with  AI features ",
            item2:"Developed a robust authenctication features using firebase",
            item3:"Integrated OPEN AI API to get the results on the users description"
        },
        technologies:["React JS", "tailwind css","Redux Toolkit"],
        img:netflixgpt,
        github:"https://github.com/Himanxu1/netflix-gpt",
        live:"http://netflixgpt-937fc.web.app/"
    },
    {
        id:5,
        title:"Socia",
        description:{
            item1:"A full stack social media where user can share thoughts",
            item2:"Developed a robust comment system and like , follow/following features",
            item3:"Implements bookmark and profile section"
        },
        technologies:["React JS", "Postgres db","Redux Toolkit","Prisma","Node JS"],
        img:youtube
    },
    {
        id:6,
        title:"Socia",
        description:{
            item1:"A full stack social media where user can share thoughts",
            item2:"Developed a robust comment system and like , follow/following features",
            item3:"Implements bookmark and profile section"
        },
        technologies:["React JS", "Postgres db","Redux Toolkit","Prisma","Node JS"],
        img:youtube
    },
    
]

export const blogs = [
    {
        id:1,
        title:"Hoisting in JS",
        img:hoisting,
        live:"https://himanxu.hashnode.dev/hoisting-in-javascipt"
    },
    {
        id:2,
        title:"Callback in JS",
        img:callback,
        live:"https://himanxu.hashnode.dev/callback-in-depth-javascript"
    },
    {
        id:3,
        title:"Eventloop in JS",
        img:eventloop,
        live:"https://himanxu.hashnode.dev/event-loop-in-javascript"
    },
    {
        id:4,
        title:"Closure in JS",
        img:closure,
        live:"https://himanxu.hashnode.dev/closure-in-javascript-with-example"
    }
]