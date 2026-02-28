import React from "react";
import {CarIcon, BikeIcon} from "lucide-react"

function ServiceHero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 py-20
                 bg-[linear-gradient(to_bottom,rgba(30,27,75,0.8),rgba(30,27,75,0.8)),url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80')] 
                 bg-cover bg-center">

      <div className="max-w-4xl text-center">
        
        <p className="text-indigo-300 text-sm font-semibold tracking-wider mb-4 bg-white/10 border border-white/20 inline-block px-4 py-1 rounded-2xl">
          • Two-Sided Marketplace
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 flex flex-col gap-2">
          <span>Rent Your Dream </span> 
          <span className="text-indigo-400">Ride or Share Yours</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Whether you're looking to explore the city on wheels or earn from your 
          idle vehicles, we've created the perfect platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-indigo-700">
            Browse Vehicles <span>→</span>
          </button>
          <button className="bg-white text-indigo-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-300">
            List Your Vehicle
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-12 mt-10 text-white">
        
            <div className="flex items-center gap-4">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <CarIcon className="text-indigo-300" size={28} />
                </div>
                <div className="text-left">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-gray-400 text-sm">Vehicles</div>
                </div>
            </div>

        
            <div className="flex items-center gap-4">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/10">
                    <BikeIcon className="text-indigo-300" size={28} />
                </div>
                <div className="text-left">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-gray-400 text-sm">Bikes</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}

export default ServiceHero;