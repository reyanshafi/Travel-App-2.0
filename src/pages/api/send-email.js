import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end(); // Only allow POST requests

  const { clientInfo, packageDetails, totalAmount } = req.body;

  // Create a transporter object using GoDaddy's SMTP configuration
  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net', // GoDaddy SMTP server
    port: 465, // SSL port (use 587 for TLS)
    secure: true, // Set to true for SSL (465) or false for TLS (587)
    auth: {
      user: process.env.EMAIL_USER, // GoDaddy email address
      pass: process.env.EMAIL_PASSWORD, // GoDaddy email password
    },
  });

  // Client Email Template
  const clientEmail = {
    from: `"Salt Lake Travels" <${process.env.COMPANY_EMAIL}>`,
    to: clientInfo.email,
    subject: 'Booking Confirmation Receipt',
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://via.placeholder.com/150x50.png?text=Salt+Lake+Travels" alt="Salt Lake Travels" style="max-width: 200px; margin-bottom: 20px;">
            <h2 style="color: #1e3a8a; font-size: 24px; margin-bottom: 10px;">Booking Confirmation</h2>
          </div>
  
          <!-- Greeting -->
          <p style="color: #333; font-size: 16px; line-height: 1.5;">Dear <strong style="color: #1e3a8a;">${clientInfo.name}</strong>,</p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.5;">Thank you for choosing Suwida Tour & Travels! We are excited to confirm your booking with us. Please find your booking details below:</p>
          
          <!-- Booking Details -->
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #ea580c; font-size: 18px; margin-bottom: 10px;">Booking Details</h3>
            <ul style="list-style-type: none; padding: 0; color: #333;">
              <li><strong>Package:</strong> ${packageDetails.name}</li>
              <li><strong>Booking Date:</strong> ${clientInfo.bookingDate}</li>
              <li><strong>Travel Date:</strong> ${clientInfo.bookingDate}</li>
              <li><strong>Number of Travelers:</strong> ${clientInfo.travelers}</li>
              <li><strong>Total Amount:</strong> ₹${totalAmount.toLocaleString()}</li>
            </ul>
          </div>
          
          <!-- Contact Information -->
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #ea580c; font-size: 18px; margin-bottom: 10px;">Contact Information</h3>
            <ul style="list-style-type: none; padding: 0; color: #333;">
              <li><strong>Email:</strong> ${clientInfo.email}</li>
              <li><strong>Phone:</strong> ${clientInfo.phone}</li>
            </ul>
          </div>
  
          <!-- Thank You Message -->
          <p style="color: #333; font-size: 16px; line-height: 1.5;">Thank you once again for choosing Suwida Tour & Travels! Our team will reach out shortly to finalize your travel arrangements.</p>
          
          <!-- Footer -->
          <div style="margin-top: 40px; text-align: center; color: #888;">
            <p>&copy; 2025 Suwida Tour & Travels. All rights reserved.</p>
          </div>
        </div>
      </div>
    `
  };
  

  // Company Email Template
  const companyEmail = {
    from: `"Booking System" <${process.env.COMPANY_EMAIL}>`,
    to: process.env.COMPANY_EMAIL, // The email address of the company to receive notifications
    subject: `New Booking - ${packageDetails.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e3a8a;">New Booking Received</h2>
        
        <h3 style="color: #ea580c;">Client Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${clientInfo.name}</li>
          <li><strong>Email:</strong> ${clientInfo.email}</li>
          <li><strong>Phone:</strong> ${clientInfo.phone}</li>
          <li><strong>Travelers:</strong> ${clientInfo.travelers}</li>
          <li><strong>Travel Date:</strong> ${clientInfo.bookingDate}</li>
        </ul>

        <h3 style="color: #ea580c;">Package Details:</h3>
        <ul>
          <li><strong>Package:</strong> ${packageDetails.name}</li>
          <li><strong>Duration:</strong> ${packageDetails.days} Days / ${packageDetails.nights} Nights</li>
          <li><strong>Price per Person:</strong> ₹${packageDetails.price.toLocaleString()}</li>
          <li><strong>Total Amount:</strong> ₹${totalAmount.toLocaleString()}</li>
        </ul>

        <p style="margin-top: 30px; color: #666;">
          This booking was created through the online portal. 
          Please contact the client within 24 hours to confirm arrangements.
        </p>
      </div>
    `,
  };

  try {
    // Send emails: one to the client and one to the company
    await transporter.sendMail(clientEmail);
    await transporter.sendMail(companyEmail);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
}
