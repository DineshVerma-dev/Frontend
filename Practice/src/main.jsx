import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Router/Home.jsx'
import About from './Components/Router/About.jsx'
import Contact from './Components/Router/Contact.jsx'
import First from './Components/First.jsx'
import Second from './Components/Second.jsx'
import Third from './Components/Third.jsx'
import Four from './Components/Four.jsx'
import Five from './Components/Five.jsx'
import Six from './Components/Six.jsx'
import Seven from './Components/Seven.jsx'
import Eight from './Components/Eight.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/first' element={<First />} />
      <Route path='/second' element={<Second />} />
      <Route path='/third' element={<Third />} />
      <Route path='/four' element={<Four />} />
      <Route path='/five' element={<Five />} />

      <Route path='/six' element={<Six/>} />
      <Route path='/seven' element={<Seven/>} />
      <Route path='/eight' element={<Eight/>} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
