import { useState } from 'react';
import { Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OwnerRegister = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '', 
    password: '',
    confirmPassword: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match!");
    }

    try {
      const response = await fetch('http://localhost:5000/api/owners/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // These must match your backend controller variables exactly
          name: formData.name,
          email: formData.email,
          password: formData.password,
          contactNo: formData.phone, 
          address: `${formData.address}, ${formData.city}` 
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account Created! Please login to continue.");
        navigate("/loginOwner"); // Force login to establish a fresh ownerId
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      alert("Could not connect to the server. Ensure your backend is running!");
    }
  };

  return (
    <div className='max-w-2xl mx-auto border rounded-xl mt-10 shadow-lg bg-white overflow-hidden'>
      <div className='flex items-center px-8 py-10 gap-6 bg-gradient-to-r from-violet-600 to-blue-600 text-white'>
        <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0'>
          <Car className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Partner with Us</h2>
          <p className="text-violet-100 mt-1">Register as a Vehicle Owner</p>
        </div>
      </div>

      <div className="p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
              <input name="name" type="text" placeholder="John Doe" required
                value={formData.name} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
              <input name="email" type="email" placeholder="john@example.com" required
                value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
              <input name="phone" type="tel" placeholder="10-digit mobile number" required
                value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Operating City *</label>
              <input name="city" type="text" placeholder="e.g. Ahmedabad" required
                value={formData.city} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password *</label>
              <input name="password" type="password" placeholder="••••••••" required
                value={formData.password} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Confirm Password *</label>
              <input name="confirmPassword" type="password" placeholder="••••••••" required
                value={formData.confirmPassword} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Office/Home Address *</label>
              <input name="address" type="text" placeholder="Flat No, Building, Area..." required
                value={formData.address} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all" />
            </div>
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all mt-4">
            Create Owner Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerRegister;