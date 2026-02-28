import React from 'react'
import { Outlet } from 'react-router-dom'
// Changed from './' to '../' because the file is now inside the pages folder
import OwnerNav from '../components/OwnerNav' 
import Footer from '../components/Footer'

const OwnerLayout = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-black">
      <OwnerNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default OwnerLayout