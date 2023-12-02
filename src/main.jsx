import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import Blogs from './pages/Blogs.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import About from './pages/About.jsx'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
    {
      path:"/",
      element:<Projects/>
    },
    {
      path:"/blogs",
      element:<Blogs/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/experience",
      element:<Experience/>
    },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={appRouter}/>
  </React.StrictMode>,
)
