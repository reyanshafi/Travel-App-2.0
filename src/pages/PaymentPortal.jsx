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

  const handlePayment = () => {
    const { name, email, phone, travelers } = clientInfo;

    if (!name || !email || !phone || !travelers) {
      alert("Please fill out all fields before proceeding.");
      return;
    }

    const options = {
      key: "RAZORPAY_KEY", // Replace with your Razorpay key
      amount: packageDetails.price * 100 * travelers, // Total amount
      currency: "INR",
      name: "Salt Lake Travels",
      description: `Payment for ${packageDetails.name}`,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        router.push("/success"); // Redirect to a success page
      },
      prefill: {
        name,
        email,
        contact: phone,
      },
      theme: {
        color: "#114B5F",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  if (!packageDetails) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="p-6 px-32 mt-40">
        <h1 className="text-3xl font-bold text-[#114B5F]">
          {packageDetails.name}
        </h1>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          {packageDetails.description}
        </p>
        <p className="mt-4 text-lg font-semibold text-[#114B5F]">
          ₹{packageDetails.price} per person
        </p>

        {/* Client Information Form */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={clientInfo.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114B5F]"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={clientInfo.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114B5F]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={clientInfo.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114B5F]"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Travelers
            </label>
            <input
              type="number"
              name="travelers"
              value={clientInfo.travelers}
              onChange={handleInputChange}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#114B5F]"
              placeholder="Enter the number of travelers"
              min="1"
            />
          </div>
        </div>

        {/* Payment Button */}
        <button
          className="w-full px-6 py-2 mt-6 text-white bg-[#114B5F] rounded-lg hover:bg-[#0D3A4A] transition-colors duration-300"
          onClick={handlePayment}
        >
          Proceed to Pay
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPortal;
