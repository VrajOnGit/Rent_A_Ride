import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How do I rent a vehicle?',
    answer: "Simply browse our vehicle listings, select your desired dates, and book instantly. After payment confirmation, you'll receive pickup instructions and contact details for the owner.",
  },
  {
    question: 'What documents do I need to rent?',
    answer: "You'll need a valid driver's license, government-issued ID, and a payment method. All documents are verified during the signup process for your safety.",
  },
  {
    question: 'Is insurance included in the rental price?',
    answer: 'Yes! Every rental includes comprehensive insurance coverage at no additional cost. Both renters and vehicle owners are protected during the rental period.',
  },
  {
    question: 'How much can I earn as a vehicle owner?',
    answer: 'Earnings vary based on vehicle type, location, and demand. On average, owners earn $500-$3,000 per month. You set your own pricing and availability.',
  },
  {
    question: 'What if my vehicle gets damaged during a rental?',
    answer: 'Our comprehensive insurance covers all damage during rentals. Simply report the incident, and our claims team will handle everything. Renters are liable for damage caused.',
  },
  {
    question: 'Can I cancel a booking?',
    answer: 'Renters can cancel up to 24 hours before pickup for a full refund. Owners can decline bookings before confirmation but may face penalties for last-minute cancellations.',
  },
  {
    question: 'How does payment work?',
    answer: 'Renters pay securely through our platform. For owners, we hold the payment during the rental and release it 48 hours after successful completion, minus our service fee.',
  },
  {
    question: 'What if I have issues during my rental?',
    answer: 'Our 24/7 support team is always available. Contact us through the app, email, or phone for immediate assistance with any rental-related issues.',
  },
];

const FAQs = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  function toggleFAQ(index){
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      
      {/* 1. THE HEADER */}
      <div className='flex flex-col items-center text-center mb-12'>
        <div className="bg-violet-100 text-violet-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
          FAQ
        </div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Common Questions
        </h2>
        <p className="text-gray-500 text-lg">
          Everything you need to know about renting and listing vehicles
        </p>
      </div>

      {/* 2. THE FAQ CONTAINER */}
      <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
        <div className="divide-y divide-gray-200">
          
          {/* 3. MAPPING THE DATA */}
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              
              {/* The Button (Question) */}
              <button onClick={() => toggleFAQ(index)} 
              className="w-full flex justify-between items-center text-left">
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>

              {/* The Answer Area (Currently always visible) */}
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "max-h-40 opacity-100 mt-4": "max-h-0 opacity-0"
              }`}>
                <p className="text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FAQs;