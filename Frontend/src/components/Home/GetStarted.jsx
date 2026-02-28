import { useOutletContext } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg"

function GetStarted(){
    
    const {setShowSelection} = useOutletContext()

    return(
        <section className="flex flex-col items-center py-24 px-4 text-center bg-slate-50 dark:bg-black transition-colors duration-300 dark:text-white gap-5">
            <img src={Logo} alt="" className="h-20 "/>
            <h1 className="text-3xl md:text-4xl font-bold dark:text-blue-600">Ready to Hit the Road?</h1>
            <p className="text-xl text-slate-500 dark:text-slate-400">Browse our collection of premium vehicles and book your ride in minutes. Adventure awaits!</p>
            <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all inline-block text-center">Browse Vehicle <span>→</span></button>
                <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-semibold dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-all" onClick={()=> setShowSelection(true)}>Get Started!</button>
            </div>
        </section>
    )   
}

export default GetStarted;