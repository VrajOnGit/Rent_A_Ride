import { Shield, DollarSign, Clock, Headphones} from "lucide-react";

function WhyUs(){

    const benefits = [
            {
                icon: Shield,
                title: "Fully Insured",
                description: "All vehicles come with comprehensive insurance coverage for your peace of mind",
                color: "bg-emerald-100 text-emerald-600"
            },
            {
                icon: DollarSign,
                title: "Best Prices",
                description: "Competitive rates with no hidden fees. What you see is what you pay",
                color: "bg-blue-100 text-blue-600"
            },
            {
                icon: Clock,
                title: "Flexible Rental",
                description: "Rent by the day, week, or month. Choose what works best for you",
                color: "bg-amber-100 text-amber-600"
            },
            {
                icon: Headphones,
                title: "24/7 Support",
                description: "Our customer support team is always available to assist you",
                color: "bg-purple-100 text-purple-600"
            }
    ];


    return (
    <section className="py-20 px-6 lg:px-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            We provide the best service with a focus on safety, price, and customer satisfaction.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center
              ">
                
              {/* ICON BOX */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 hover:scale-110 ${benefit.color}`}>
                <benefit.icon size={28} />
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default WhyUs;