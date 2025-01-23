'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../app/globals.css';

const Services = () => {
  const services = [
    {
      title: "Customized Tour Packages",
      description: "Explore the beauty of Kashmir with tailor-made tour packages designed to suit your preferences.",
      icon: "✈️",
    },
    {
      title: "Houseboat Stays",
      description: "Experience the charm of Dal Lake with luxurious and comfortable houseboat accommodations.",
      icon: "🛶",
    },
    {
      title: "Adventure Activities",
      description: "Enjoy thrilling activities like trekking, skiing, and river rafting in the breathtaking landscapes of Kashmir.",
      icon: "⛷️",
    },
    {
      title: "Transportation Services",
      description: "Travel hassle-free with our reliable cab and transportation services across Kashmir.",
      icon: "🚗",
    },
    {
      title: "Guided Tours",
      description: "Discover the hidden gems of Kashmir with the help of our experienced local guides.",
      icon: "🗺️",
    },
    {
      title: "Cultural Experiences",
      description: "Immerse yourself in the rich culture of Kashmir with traditional music, dance, and cuisine.",
      icon: "🎶",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <Navbar />
      <section className="py-24 pt-40">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          {/* Headline Section */}
          <div className="mb-16 text-center fade-in">
            <h1 className="mb-6 text-4xl font-bold text-teal-900 transition-colors duration-300 md:text-5xl dark:text-teal-200 hover:text-teal-700">
              Our Services
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              At KashmirExplorer, we offer a wide range of services to make your journey unforgettable. From customized tours to cultural experiences, we’ve got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 transition-shadow duration-300 bg-white border-2 border-teal-100 rounded-lg shadow-lg service-card dark:bg-gray-800 hover:shadow-xl hover:border-b-2 hover:border-b-teal-800 dark:border-teal-900"
              >
                <div className="mb-4 text-4xl text-teal-900 dark:text-teal-200">
                  {service.icon}
                </div>
                <h2 className="mb-4 text-2xl font-bold text-teal-900 dark:text-teal-200">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center fade-in">
            <h2 className="mb-6 text-3xl font-bold text-teal-900 transition-colors duration-300 dark:text-teal-200 hover:text-teal-700">
              Ready to Explore Kashmir?
            </h2>
            <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
              Contact us today to book your dream trip and experience the magic of Kashmir.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 font-bold text-white transition-colors duration-300 bg-teal-900 rounded-lg hover:bg-teal-700">
               Get Quote
              </button>
              <button className="px-6 py-3 font-bold text-teal-900 transition-colors duration-300 bg-white border-2 border-teal-900 rounded-lg hover:bg-teal-900 hover:text-white">
                Book Package
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;