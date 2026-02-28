import React, { useEffect, useState } from 'react';
import { Car, MapPin, IndianRupee } from 'lucide-react';
import OwnerHero from '../components/OwnerComponents/OwnerHero';

const OwnerHome = () => {
  const [myVehicles, setMyVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const ownerId = localStorage.getItem('ownerId');
      if (!ownerId) return;

      try {
        const res = await fetch(`http://localhost:5000/api/vehicles/owner/${ownerId}`);
        const data = await res.json();
        setMyVehicles(data);
      } catch (err) {
        console.error("Failed to fetch vehicles");
      }
    };
    fetchVehicles();
  }, []);

  return (
    <div className="dark:bg-black min-h-screen p-8">
      <OwnerHero />
      
      <div className="max-w-7xl mx-auto mt-12">
        <h3 className="text-2xl font-black dark:text-white mb-8 uppercase tracking-tighter">Your Catalog ({myVehicles.length})</h3>
        
        {myVehicles.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 dark:bg-white/5 rounded-[2rem] border-2 border-dashed border-gray-200 dark:border-white/10">
            <p className="text-gray-500">You haven't listed any vehicles yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {myVehicles.map((vehicle) => (
              <div key={vehicle._id} className="bg-white dark:bg-white/5 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-xl">
                {/* Image takes the first one from the array */}
                <img 
                  src={`http://localhost:5000/${vehicle.Images[0]}`} 
                  alt="vehicle" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-black text-xl dark:text-white uppercase">{vehicle.Brand} {vehicle.model}</h4>
                    <span className="text-[10px] font-black bg-violet-100 text-violet-600 px-2 py-1 rounded-md">{vehicle.vehicleType}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4 font-medium">
                    <span className="flex items-center gap-1"><MapPin size={14}/> {vehicle.City}</span>
                    <span className="flex items-center gap-1"><IndianRupee size={14}/> {vehicle.pricePerDay}/day</span>
                  </div>
                  <button className="w-full py-3 bg-gray-100 dark:bg-white/10 dark:text-white rounded-2xl font-bold hover:bg-violet-600 hover:text-white transition-all">
                    Manage Vehicle
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnerHome;