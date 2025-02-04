import PreLoader from '@/components/PreLoader';
import Navbar from '../components/Navbar';
import CustomFooter from '@/components/Footer';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>Suwida Tour and Travels</title>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>

      </head>
      <body className="text-gray-900 bg-white ">
        {/* <PreLoader /> */}
        <Navbar />
        <main>{children}</main>
        <CustomFooter />
      </body>
    </html>
  );
}
