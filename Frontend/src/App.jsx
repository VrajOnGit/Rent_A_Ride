import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// Layouts and General Pages
import Layout from './Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Vehicles from './pages/Vehicles'
import MyBookings from './pages/MyBookings'
import FAQs from "./pages/FAQs"

// Authentication Components
import OwnerRegister from './components/Authentication/OwnerRegister'
import OwnerLogin from './components/Authentication/OwnerLogin' // Added this import

// Owner Specific Pages and Components
import OwnerLayout from './pages/OwnerLayout' // Updated path to pages folder
import OwnerHome from './pages/OwnerHome'
import AddVehicle from './components/OwnerComponents/AddVehicle' // Matches your folder capitalization

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Customer / General Routes */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='vehicles' element={<Vehicles />} />
          <Route path='mybookings' element={<MyBookings />} />
          <Route path="faqs" element={<FAQs />} />
          
          {/* Auth Routes */}
          <Route path='registerOwner' element={<OwnerRegister />} />
          <Route path='loginOwner' element={<OwnerLogin />} /> {/* Fixed: Resolves the 404 error */}
        </Route>

        {/* Owner Specific Routes */}
        <Route path='owner' element={<OwnerLayout />}>
          <Route index element={<OwnerHome />} /> {/* Sets Dashboard as default when visiting /owner */}
          <Route path='home' element={<OwnerHome />} />
          <Route path='add-vehicle' element={<AddVehicle />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App