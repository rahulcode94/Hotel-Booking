// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'



const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
   <>
   {!isOwnerPath && <Navbar/>}
   <Navbar/>
   
   </>
  )
}

export default App