'use client';

const StatsContainer = () => {
  return (
    <div className="flex justify-center p-6 -mt-20">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-4 p-4 bg-white rounded-md shadow-md md:grid-cols-4 drop-shadow-lg">
        {/* Section 1 */}
        <div className="p-4 text-center transition-transform duration-300 border-r cursor-pointer hover:scale-105 border-r-teal-700">
          <h2 className="text-3xl font-bold text-[#114B5F]">150+</h2>
          <p className="text-gray-600">Destinations</p>
        </div>

        {/* Section 2 */}
        <div className="p-4 text-center transition-transform duration-300 cursor-pointer md:border-r hover:scale-105 border-r-teal-700">
          <h2 className=" text-3xl font-bold text-[#114B5F]">10,000+</h2>
          <p className="text-gray-600">Customers</p>
        </div>

        {/* Section 3 */}
        <div className="p-4 text-center transition-transform duration-300 border-r cursor-pointer hover:scale-105 border-r-teal-700">
          <h2 className="text-3xl font-bold text-[#114B5F]">24/7</h2>
          <p className="text-gray-600">Support</p>
        </div>

        {/* Section 4 */}
        <div className="p-4 text-center transition-transform duration-300 cursor-pointer hover:scale-105">
          <h2 className=" text-3xl font-bold text-[#114B5F]">50+</h2>
          <p className="text-gray-600">Services</p>
        </div>
      </div>
    </div>
  );
};

export default StatsContainer;