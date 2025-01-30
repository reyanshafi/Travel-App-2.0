import '../app/globals.css';
import { useRouter } from 'next/router';

const SuccessPage = () => {
    const router = useRouter();
    const { payment_id, booking_date, email_error } = router.query;
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-green-600">
            {email_error ? 'Payment Complete' : 'Booking Confirmed!'} 🎉
          </h1>
          <div className="space-y-2">
            <p><strong>Payment ID:</strong> {payment_id}</p>
            <p><strong>Travel Date:</strong> {booking_date}</p>
          </div>
          
          {email_error && (
            <div className="p-3 mt-4 text-yellow-800 bg-yellow-100 rounded">
              Note: Payment was successful but we couldn't send confirmation email.
              Please contact support with your payment ID.
            </div>
          )}
  
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-2 mt-6 text-white transition rounded-lg bg-blue-950 hover:bg-blue-900"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  };

export default SuccessPage;