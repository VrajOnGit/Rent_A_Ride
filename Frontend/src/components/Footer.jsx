function Footer(){
    return(
        <footer className="dark:bg-black transition-colors duration-300 px-6 py-12 lg:px-20 pt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 dark:text-blue-500">
                Rent-A-Ride
              </h3>
              <p className="text-slate-400">
                Premium vehicle rentals for every journey. Experience freedom on the road.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 dark:text-white">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-violet-500 cursor-pointer transition-colors">Home</li>
                <li className="hover:text-violet-500 cursor-pointer transition-colors">Vehicles</li>
                <li className="hover:text-violet-500 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-violet-500 cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 dark:text-white">Vehicle Types</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-violet-500 cursor-pointer transition-colors">Luxury Cars</li>
                <li className="hover:text-violet-500 cursor-pointer transition-colors">SUVs</li>
                <li className="hover:text-violet-500 cursor-pointer transition-colors">Sports Bikes</li>
                <li className="hover:text-violet-500 cursor-pointer transition-colors">Scooters</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 dark:text-white">Contact Info</h4>
              <ul className="space-y-2 text-slate-400">
                <li>support@rentaride@gmail.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Motor Street</li>
                <li>Auto City, AC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            <p>© 2024 Rent-A-Ride. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer
