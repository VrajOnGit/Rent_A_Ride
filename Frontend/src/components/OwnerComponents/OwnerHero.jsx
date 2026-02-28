import { Plus } from 'lucide-react'

const OwnerHero = () => {
  return (
    <div>
        <div className='bg-gradient-to-r from-violet-600 to-blue-600 text-white py-16 px-32'>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome back, Tushar Pandey! 👋</h1>
            <p  className="text-violet-100 text-lg mb-6">Manage your fleet and track your earnings</p>
            <button  className="bg-white text-violet-600 font-medium py-2.5 px-6 rounded-lg w-fit mt-2 hover:bg-violet-50 transition-colors flex items-center"><Plus className="w-5 h-5 mr-2" /> List New Vehicle</button>
        </div>
  
    </div>
  )
}

export default OwnerHero