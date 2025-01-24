import PreLoader from '@/components/PreLoader';
import Navbar from '../components/Navbar';
import CustomFooter from '@/components/Footer';

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />

        <title>
          Suwida Tour and Travels
          </title>{/* Add any additittional head elements here */}
      
      </head>
      <body className="text-gray-900 bg-white dark:bg-gray-900 dark:text-white">
        <PreLoader />
      <Navbar />
      
        <main>{children}</main>
        <CustomFooter />
        
      </body>
    </html>
  );
}
