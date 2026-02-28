import { Search, CalendarCheck, Key, Smile } from "lucide-react";

const steps = [
        {
            icon: Search,
            title: "Browse & Select",
            description: "Explore our wide range of cars and bikes. Filter by type, price, and features.",
            color: "bg-violet-400",
            textColor : "white"
        },
        {
            icon: CalendarCheck,
            title: "Choose Dates",
            description: "Select your pickup and return dates. See transparent pricing with no hidden fees.",
            color: "bg-blue-400",
            textColor : "white"
        },
        {
            icon: Key,
            title: "Book & Confirm",
            description: "Complete your booking in seconds. Receive instant confirmation via email.",
            color: "bg-violet-500",
            textColor : "white"
        },
        {
            icon: Smile,
            title: "Enjoy Your Ride",
            description: "Pick up your vehicle and hit the road. 24/7 support for peace of mind.",
            color: "bg-blue-500",
            textColor : "white"
        }
];

function HowItWorks(){

    return(
        <section className="py-20 px-6 lg:px-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
            <div className="flex flex-col gap-3 text-center mb-16">
               <span className="text-violet-600 text-lg">SIMPLE PROCESS</span>
               <h1 className="text-3xl md:text-4xl font-bold dark:text-white">How It Works</h1>
               <p className="text-lg text-slate-700 dark:text-slate-600">Rent your dream vehicle in just four easy steps</p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {
                steps.map((step, index) => (
                    <div key={index} className={`p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-${step.textColor}`}> 
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 hover:scale-110 ${step.color}`}>
                            <step.icon size={28}/>
                        </div>
                        <div className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</div>
                        <div className="text-slate-600 dark:text-slate-400 leading-relaxed text-center">{step.description}</div>
                    </div>
                ))
               }
            </div>
        </div>
        </section>
    )
}

export default HowItWorks;