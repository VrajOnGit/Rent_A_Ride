import { Car, Bike } from "lucide-react"
import { useOutletContext } from "react-router-dom";


function Hero(){

    const {setShowSelection} = useOutletContext()

    return(
        <section className="min-h-screen bg-slate-50 dark:bg-black transition-colors duration-300 px-6 py-12 lg:px-20 flex items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE: TEXT CONTENT (Always visible) */}
            <div className="space-y-8">
                <div className="inline-block px-4 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium">
                • Premium Vehicle Rentals
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-slate-900 dark:text-white block">
                    Drive Your
                </span>
                <span className="text-blue-600 dark:text-blue-500">
                    Dreams Today
                </span>
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md">
                Experience freedom on the road. Choose from our premium collection
                of cars and bikes for any adventure.
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all inline-block text-center">
                        Browse Vehicles <span>→</span>
                    </button>
                    <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-xl font-semibold dark:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-all" onClick={()=> setShowSelection(true)}>
                        Sign Up
                    </button>
                </div>

                {/* STATS */}
                <div className="pt-8 flex gap-10 border-t border-slate-200 dark:border-slate-800">
                    <div className="">
                        <p className="text-3xl font-bold dark:text-white">150+</p>
                        <p className="text-sm text-slate-500">Vehicles</p>
                    </div>
                    <div className="">
                        <p className="text-3xl font-bold dark:text-white">5K+</p>
                        <p className="text-sm text-slate-500">Happy Customers</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold dark:text-white">24/7</p>
                        <p className="text-sm text-slate-500">Support</p>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: IMAGE (Hidden below 1024px / Large) */}
            {/* Change 'lg:block' to 'md:block' if you want it to show up at 768px instead of 1024px */}
            <div className="relative hidden lg:block">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2">
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                    alt="Porsche Panamera"
                    className="w-full h-auto object-cover"
                />
                </div>

                {/* Floating Card: Bikes */}
                <div className="absolute -top-6 -right-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-xl">
                        <Bike className="dark:text-white"/>
                    </div>
                    <div>
                        <p className="font-bold text-sm dark:text-white">
                        Bikes Available
                        </p>
                        <p className="text-xs text-blue-500">From $19/day</p>
                    </div>
                </div>

                {/* Floating Card: Cars */}
                <div className="absolute -bottom-6 -left-4 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-violet-100 dark:bg-violet-900/40 p-3 rounded-xl">
                    <Car className="dark:text-white"/>
                </div>
                <div>
                    <p className="font-bold text-sm dark:text-white">
                    Cars Available
                    </p>
                    <p className="text-xs text-violet-500">From $49/day</p>
                </div>
                </div>
            </div>
            </div>
      </section>
    )
}

export  default Hero