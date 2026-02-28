import React, { useState } from 'react';
import { ImagePlus, X, UploadCloud, Car, MapPin, IndianRupee, Fuel, Info, Tag, FileCheck, FileText } from 'lucide-react';

const AddVehicle = () => {
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [docs, setDocs] = useState([]);
  const [docPreviews, setDocPreviews] = useState([]); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 4) return alert("Maximum 4 images allowed.");
    setImages((prev) => [...prev, ...files]);
    setImagePreviews((prev) => [...prev, ...files.map(file => URL.createObjectURL(file))]);
  };

  const handleDocChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + docs.length > 3) return alert("Maximum 3 documents allowed.");
    setDocs((prev) => [...prev, ...files]);
    setDocPreviews((prev) => [...prev, ...files.map(file => ({
      name: file.name,
      url: file.type.includes('image') ? URL.createObjectURL(file) : null
    }))]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // FIXED: Prevent "undefined" ownerId from causing CastError
    const ownerId = localStorage.getItem('ownerId');
    if (!ownerId || ownerId === "undefined") {
      alert("Session invalid. Please log out and log in again.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData();
    formData.append('ownerId', ownerId);
    formData.append('vehicleType', e.target.vehicleType.value); 
    formData.append('Brand', e.target.brand.value); 
    formData.append('model', e.target.model.value);
    formData.append('fuelType', e.target.fuel.value); 
    formData.append('pricePerDay', e.target.price.value); 
    formData.append('City', e.target.city.value); 
    formData.append('Area', e.target.area.value);

    images.forEach(file => formData.append('images', file));
    docs.forEach(file => formData.append('documents', file));

    try {
      const res = await fetch('http://localhost:5000/api/vehicles/add', { method: 'POST', body: formData });
      const data = await res.json();
      if (res.ok) {
        alert("Vehicle listed successfully!");
        setImages([]); setDocs([]); setDocPreviews([]); setImagePreviews([]);
        e.target.reset();
      } else {
        alert(`Error: ${data.error || data.message || "Upload failed"}`);
      }
    } catch (err) {
      alert("Failed to connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-[#0a0a0a] p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-white/5 transition-all mb-20">
      <h2 className="text-4xl font-black tracking-tight dark:text-white flex items-center gap-3 mb-12">
        <Car className="text-violet-600" size={40} /> List Your Vehicle
      </h2>
      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Simplified UI for brevity - use your existing visual layout here */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <input name="brand" placeholder="Brand" required className="w-full p-4 bg-gray-50 dark:bg-white/5 rounded-2xl outline-none" />
            <input name="model" placeholder="Model" required className="w-full p-4 bg-gray-50 dark:bg-white/5 rounded-2xl outline-none" />
            <input name="fuel" placeholder="Fuel Type" required className="w-full p-4 bg-gray-50 dark:bg-white/5 rounded-2xl outline-none" />
            <select name="vehicleType" className="w-full p-4 bg-gray-50 dark:bg-white/5 rounded-2xl outline-none">
                <option value="car">Car</option>
                <option value="bike">Bike</option>
            </select>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input name="price" type="number" placeholder="Price Per Day" required className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl outline-none" />
            <input name="city" placeholder="City" required className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl outline-none" />
            <input name="area" placeholder="Area" required className="p-4 bg-gray-50 dark:bg-white/5 rounded-2xl outline-none" />
        </section>
        {/* Gallery and Documents sections as per your previous design */}
        <button type="submit" disabled={isSubmitting} className="w-full py-5 rounded-[2rem] font-black text-white bg-gradient-to-r from-violet-600 to-blue-600">
          {isSubmitting ? 'PROCESSING...' : 'CONFIRM & LIST VEHICLE'}
        </button>
      </form>
    </div>
  );
};

export default AddVehicle;