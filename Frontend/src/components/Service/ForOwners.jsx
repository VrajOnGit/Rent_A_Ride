import React from 'react'
import { DollarSign, Clock, Users, TrendingUp, Lock, Headphones } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Earn Extra Income',
    description: 'Turn your idle vehicle into a revenue stream. Earn up to $1,000/month depending on vehicle type and demand.',
  },
  {
    icon: Clock,
    title: 'Full Control',
    description: 'Set your own availability, pricing, and rental terms. Block dates when you need your vehicle.',
  },
  {
    icon: Users,
    title: 'Verified Renters',
    description: 'All renters are verified with ID and license checks. Review their ratings before accepting bookings.',
  },
  {
    icon: TrendingUp,
    title: 'Premium Exposure',
    description: 'Your vehicle gets featured to thousands of potential renters actively searching in your area.',
  },
  {
    icon: Lock,
    title: 'Protected Assets',
    description: 'Comprehensive insurance coverage protects your vehicle during every rental period at no extra cost.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated owner support team available around the clock to help with any questions or issues.',
  },
];


const ForOwners = () => {
  return (
    <section className='bg-slate-50 py-24 flex flex-col gap-20'>
        <div className='flex flex-col gap-2 items-center text-center'>
          <div className='inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4'>For Vehicle Owners</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Monetize Your Vehicle</h1>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>Why let your car or bike sit idle? List it on our platform and start earning passive income today.</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {
            benefits.map((benefit, index) => (
              <div key={index} className='bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 group flex flex-col items-center text-center'>
                <div className='w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'><benefit.icon className="w-7 h-7 text-white"/></div>
                <div className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</div>
                <div className="text-slate-600 leading-relaxed">{benefit.description}</div>
              </div>
            ))
          }
        </div>

        <div className="mt-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 max-w-4xl mx-auto text-white">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Potential Earnings
            </h3>
            <p className="text-emerald-100 text-lg">
              See how much you could earn (Potentially) based on vehicle type 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {
              [
                { type: 'Scooter/Bike', daily: '₹500-700', monthly: '₹15000-21000' },
                { type: 'Sedan/Hatchback', daily: '₹2000-2300', monthly: '₹60,000-69,000' },
                { type: 'SUV/Luxury', daily: '₹3000-35000', monthly: '₹90,000-1,05,000' },
              ].map((tier, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="font-bold text-lg mb-4">{tier.type}</h4>
                  <div className='space-y-2'>
                    <div>
                      <p className="text-emerald-200 text-sm">Per Day</p>
                      <p className="text-2xl font-bold">{tier.daily}</p>
                    </div>
                    <div>
                      <p className="text-emerald-200 text-sm">Per Month</p>
                      <p className="text-2xl font-bold">{tier.monthly}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className='text-center mt-10'>
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-10 py-3 text-lg font-semibold rounded-lg">Start Earning Now</button>

            <p className="text-emerald-100 text-sm mt-4">
              Free to list • No upfront costs • Quick approval
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
            
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Getting Started Is Simple
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Create Profile', desc: 'Sign up and verify your identity' },
              { num: '02', title: 'List Vehicle', desc: 'Add photos and details' },
              { num: '03', title: 'Set Pricing', desc: 'Choose your daily rate' },
              { num: '04', title: 'Start Earning', desc: 'Approve bookings and earn' },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="text-6xl font-bold text-emerald-200 mb-3">{step.num}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-600 text-sm">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-emerald-200" />
                )}
              </div>
            ))}
          </div>

        </div>
    </section>
  )
}

export default ForOwners