import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import SelectionCard from "./components/Authentication/SelectionCard.jsx"
import { useState } from "react"


function Layout() {

  const [showSelection, setShowSelection] = useState(false);
  // console.log(showSelection)

  return (
    <>
      <Nav setShowSelection={setShowSelection}/>
        <Outlet context={{setShowSelection}}/>   
      <Footer />

      {
        showSelection  && <SelectionCard setShowSelection={setShowSelection}/>
      }
    </>
  )
}

export default Layout