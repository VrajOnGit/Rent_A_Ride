import { CarFront, KeyRoundIcon,  X } from "lucide-react";
import { Link } from "react-router-dom";

function SelectionCard({ setShowSelection }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-sm z-50">
      <div className="relative p-6 flex flex-col items-center gap-8 bg-slate-50 w-1/2 rounded-xl dark:bg-black dark:border-2 transition-colors duration-300 border-slate-300">
        
        <h2 className="text-3xl font-bold text-blue-600">
          Ready To join Us??
        </h2>

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white"
          onClick={() => setShowSelection(false)}
        >
          <X size={36} />
        </button>

        <button className="flex justify-around items-center border-2 px-8 py-2 font-medium rounded-xl bg-slate-100 dark:bg-black dark:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="bg-white text-black border-2 p-3 rounded-xl">
            <KeyRoundIcon size={28} />
          </div>
          <div className="flex flex-col gap-2 px-7">
            <span>I want to Rent</span>
            <span>(Customer)</span>
          </div>
        </button>

        <Link to="registerOwner">
          <button className="flex justify-around items-center border-2 px-8 py-2 font-medium rounded-xl bg-slate-100 dark:bg-black dark:text-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300" onClick={()=>{setShowSelection(false)}}>
            <div className="bg-white text-black border-2 p-3 rounded-xl">
              <CarFront size={28} />
            </div>
            <div className="flex flex-col gap-2 px-7">
              <span>I want to List</span>
              <span>(Owner)</span>
            </div>
          </button>
        </Link>

      </div>
    </div>
  );
}

export default SelectionCard;
