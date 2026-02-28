import {Calendar, Key, Search, Shield, CreditCard, MapPin} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Search,
    title: "Browse & Compare",
    description:
      "Explore hundreds of cars and bikes. Filter by type, price, location, and availability.",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description:
      "Reserve your vehicle in seconds. Choose your dates and get instant confirmation.",
  },
  {
    icon: Key,
    title: "Pick Up & Go",
    description:
      "Simple key handoff or contactless pickup. Start your journey within minutes.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Every rental includes comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description:
      "No hidden fees. See the total cost upfront with taxes and insurance included.",
  },
  {
    icon: MapPin,
    title: "Flexible Locations",
    description:
      "Find vehicles near you. Convenient pickup and drop-off locations across the city.",
  },
];

const ForRenters = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">

      {/* Header Section */}
      <div className="flex flex-col gap-4 items-center text-center mb-16">
        <div className="inline-block bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-bold">
          For Renters
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Your Perfect Ride Awaits
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
          From luxury sedans to nimble scooters, find the ideal vehicle for any
          occasion.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50  border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-violet-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors">
                {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                {feature.description}
                </p>
          </div>
        ))}
      </div>

      {/* How it works.. */}
      <div className="py-20 px-6 mt-20 bg-gradient-to-br from-violet-50 to-white rounded-3xl p-12 max-w-5xl mx-auto border border-violet-100">
        <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
          How It Works
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Search", desc: "Find your ideal vehicle" },
            { num: "02", title: "Book", desc: "Reserve with a few clicks" },
            { num: "03", title: "Drive", desc: "Pick up and hit the road" },
            { num: "04", title: "Return", desc: "Drop off and done" },
          ].map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="text-6xl font-bold text-violet-200 mb-3">
                {step.num}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h4>
              <p className="text-slate-600 text-sm">{step.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-violet-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForRenters;