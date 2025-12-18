import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './component/Layout/Layout'
import About from './component/About/About'
import Portofolio from './component/Portofolio/Portofolio'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
 let routes= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portofolio',element:<Portofolio/>},
    {path:'contact',element:<Contact/>}
  ]}
 ])
function App() {
  const [count, setCount] = useState(0)

  return <>
  <RouterProvider router={routes}/>
  </>
}

export default App
