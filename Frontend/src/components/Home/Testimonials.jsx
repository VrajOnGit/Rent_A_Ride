function Testimonials(){

    const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    text: "Amazing service! The booking process was seamless and the car was in perfect condition. Will definitely use again."
  },
  {
    name: "Michael Chen",
    role: "Vacation Renter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    text: "Best rental experience ever! Great prices, excellent customer support, and a wide variety of vehicles to choose from."
  },
  {
    name: "Emma Williams",
    role: "Daily Commuter",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: "⭐⭐⭐⭐⭐",
    text: "I rent bikes regularly for my commute. Rent-A-Ride makes it so easy and affordable. Highly recommended!"
  }
];

    return(
        <section className="py-20 px-6 lg:px-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-3xl md:4xl font-bold dark:text-white">What Our <span className="text-violet-500">Customers</span> Say</h2>
                    <h4 className="text-xl text-slate-500 dark:text-slate-400">Join thousands of satisfied customers who trust us for their transportation needs</h4>
                </div>
                
                <div className="grid grid-col-1 md:grid-cols-3 gap-8">
                    {
                        testimonials.map((testimonial, index) => (
                            <div key={index} className="px-4 py-6 bg-slate-50  border border-slate-100  hover:shadow-xl hover:-translate-y-2 transition-all duration-300 dark:bg-slate-900/50 dark:text-white dark:border-slate-800 rounded-lg flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <span>{testimonial.rating}</span>
                                    <p className="italic text-slate-700 dark:text-slate-500">"{testimonial.text}"</p>
                                </div>
                                <div className="flex gap-3">
                                    <div>
                                        <img src={testimonial.image} alt="" className="h-16 w-16 rounded-full"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{testimonial.name}</h4>
                                        <span className="text-slate-700 dark:text-slate-600">{testimonial.role}</span>
                                    </div>
                                </div>
                               
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonials;