import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "../../supabaseClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../app/globals.css';

const PaymentPortal = () => {
  const router = useRouter();
  const { id } = router.query;
  const [packageDetails, setPackageDetails] = useState(null);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    bookingDate: ""
  });

  useEffect(() => {
    const fetchPackage = async () => {
      if (!id) return;
      try {
        const { data, error } = await supabase
          .from("packages")
          .select("*")
          .eq("id", id)
          .single();
        if (error) throw error;
        setPackageDetails(data);
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };
    fetchPackage();
  }, [id]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    const { name, email, phone, travelers, bookingDate } = clientInfo;

    if (!name || !email || !phone || !travelers || !bookingDate) {
      alert("Please fill out all fields before proceeding.");
      return;
    }
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: packageDetails.price * 100 * travelers,
      currency: "INR",
      name: "Salt Lake Travels",
      description: `Payment for ${packageDetails.name}`,
      handler: async function (response) {
        try {
          // Format booking date
          const formattedDate = new Date(bookingDate).toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          });

          // Send email to both client and company
          const emailResponse = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              clientInfo: {
                name,
                email,
                phone,
                travelers,
                bookingDate: formattedDate
              },
              packageDetails: {
                name: packageDetails.name,
                price: packageDetails.price,
                days: packageDetails.days,
                nights: packageDetails.nights
              },
              totalAmount: packageDetails.price * travelers
            })
          });

          if (!emailResponse.ok) {
            throw new Error('Failed to send confirmation email');
          }

          router.push({
            pathname: "/success",
            query: { 
              payment_id: response.razorpay_payment_id,
              booking_date: formattedDate
            }
          });

        } catch (emailError) {
          console.error('Email error:', emailError);
          router.push({
            pathname: "/success",
            query: { 
              payment_id: response.razorpay_payment_id,
              booking_date: formattedDate,
              email_error: true
            }
          });
        }
      },
      prefill: { name, email, contact: phone },
      theme: { color: "#EA580C" }
    };

    try {
      const rzp = new window.Razorpay(options);
    rzp.open();
    } catch (error) {
      console.error("Payment initialization failed:", error);
      alert("Payment gateway error. Please try again.");
    }
  };

  if (!packageDetails) return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-12 h-12 border-t-4 border-b-4 border-orange-500 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow py-12 mt-40">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Package Details Section */}
            <div className="p-6 bg-white border border-gray-100 shadow-xl rounded-2xl h-fit">
              <h1 className="mb-4 text-3xl font-bold text-blue-950">
                {packageDetails.name}
              </h1>
              <div className="relative h-64 mb-6 overflow-hidden rounded-xl">
                <img 
                  src={packageDetails.image_url || "/placeholder-package.jpg"} 
                  alt={packageDetails.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-orange-50">
                  <span className="text-lg font-semibold text-blue-950">Price per person:</span>
                  <span className="text-xl font-bold text-orange-500">
                    ₹{packageDetails.price}
                  </span>
                </div>
                
                <div className="py-4 border-t border-b border-orange-100">
                  <div className="flex items-center space-x-2 text-blue-950">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{packageDetails.days} Days</span> 
                    <span>{packageDetails.nights} Nights</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-blue-950">Package Highlights</h3>
                <ul className="pl-5 space-y-2 list-disc text-blue-950">
                  {packageDetails.highlights?.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Form Section */}
            <div className="p-6 bg-white border border-gray-100 shadow-xl rounded-2xl">
              <h2 className="mb-6 text-2xl font-bold text-blue-950">Booking Details</h2>
              
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-blue-950">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={clientInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-blue-950">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={clientInfo.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-blue-950">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={clientInfo.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-blue-950">Travel Date</label>
                      <input
                        type="date"
                        name="bookingDate"
                        value={clientInfo.bookingDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-blue-950">Number of Travelers</label>
                      <div className="relative">
                        <input
                          type="number"
                          name="travelers"
                          value={clientInfo.travelers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          min="1"
                          required
                        />
                        <div className="absolute flex flex-col -translate-y-1/2 right-3 top-1/2">
                          <button 
                            type="button" 
                            onClick={() => setClientInfo(prev => ({...prev, travelers: prev.travelers + 1}))}
                            className="text-gray-400 hover:text-orange-500"
                          >
                            ▲
                          </button>
                          <button 
                            type="button" 
                            onClick={() => setClientInfo(prev => ({...prev, travelers: Math.max(1, prev.travelers - 1) }))}
                            className="text-gray-400 hover:text-orange-500"
                          >
                            ▼
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-orange-100 rounded-lg bg-orange-50">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-blue-950">Total Amount:</span>
                    <span className="text-xl font-bold text-orange-500">
                      ₹{(packageDetails.price * clientInfo.travelers).toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePayment}
                  className="flex items-center justify-center w-full px-6 py-4 font-semibold text-white transition-colors duration-300 bg-orange-500 rounded-lg hover:bg-orange-600"
                >
                  Proceed to Payment
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentPortal;