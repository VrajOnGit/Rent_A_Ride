import React from "react";
import { Car, Calendar, BookmarkCheck } from "lucide-react";

const OwnerWork = () => {
  return (
    <div className="bg-slate-50  relative">
      <div className="relative pt-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 font-medium text-sm">
                Total Vehicles
              </span>
              <Car className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">9</div>
              <div className="text-gray-400 text-sm mt-1">9 available</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 font-medium text-sm">
                Active Bookings
              </span>
              <Calendar className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">1</div>
              <div className="text-gray-400 text-sm mt-1">Currently rented</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <span className="text-gray-600 font-medium text-sm">
                Total Bookings
              </span>
              <BookmarkCheck className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-gray-400 text-sm mt-1">All time</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6 max-w-7xl mx-auto pt-16">
        <div className="flex-1 bg-violet-600 p-8 rounded-2xl text-white shadow-md flex flex-col gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Car className="w-6 h-6" />
            <span>My Vehicles</span>
          </div>
          <p className="text-violet-100 text-sm leading-relaxed">
            Manage your vehicle listings, update availability, and track
            performance
          </p>
          <button className="bg-white text-violet-600 font-medium py-2.5 px-6 rounded-lg w-fit mt-2 hover:bg-violet-50 transition-colors">
            View My Vehicles
          </button>
        </div>

        {/* Blue Action Card */}
        <div className="flex-1 bg-blue-600 p-8 rounded-2xl text-white shadow-md flex flex-col gap-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Calendar className="w-6 h-6" />
            <span>Bookings</span>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            View and manage all bookings for your vehicles
          </p>
          <button className="bg-white text-blue-600 font-medium py-2.5 px-6 rounded-lg w-fit mt-2 hover:bg-blue-50 transition-colors">
            View Bookings
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerWork;
