import { ArrowRight } from 'lucide-react'
import React from 'react'

const GetStarted = () => {
  return (
    <section className='bg-slate-50 py-20 px-6'>
      <div className='max-w-5xl mx-auto text-center'>
        
        {/* Text Header Area */}
        <div className='mb-12'>
          <h2 className='text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight'>
            Ready to Get Started?
          </h2>
          <p className='text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed'>
            Join thousands of renters and owners already using our platform. 
            Whether you want to drive or earn, we've got you covered.
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-20'>
          <button className='group bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-violet-200'>
            Browse Vehicles 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className='bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 px-10 py-4 rounded-xl font-bold transition-all'>
            List Your Vehicle
          </button>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-slate-200'>
          <div>
            <h3 className='text-4xl font-black text-violet-600'>100+</h3>
            <p className='text-slate-500 font-medium uppercase tracking-wider text-sm'>Active Vehicles</p>
          </div>
          
          <div>
            <h3 className='text-4xl font-black text-violet-600'>200+</h3>
            <p className='text-slate-500 font-medium uppercase tracking-wider text-sm'>Happy Renters</p>
          </div>
          
          <div >
            <h3 className='text-4xl font-black text-violet-600'>98%</h3>
            <p className='text-slate-500 font-medium uppercase tracking-wider text-sm'>Satisfaction Rate</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default GetStarted