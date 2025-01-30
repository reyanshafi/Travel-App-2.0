// pages/terms-of-service.js (or TermsOfService.js)

import React from 'react';
import '../app/globals.css';


const TermsOfService = () => {
  return (
    <div className="max-w-screen-lg px-4 py-16 mx-auto text-gray-700">
      <h1 className="mb-8 text-4xl font-bold text-blue-950">
        Terms and Conditions for Suwida Tour and Travels
      </h1>

      <p>
        Welcome to Suwida Tour and Travels! These terms and conditions outline
        the rules and regulations for the use of our website, located at
        <strong> suwidatourandtravels.in</strong>.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">1. Terms</h2>
      <p>
        By accessing this website we assume you accept these terms and conditions.
        Do not continue to use Suwida Tour and Travels if you do not agree to take
        all of the terms and conditions stated on this page.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">2. Use of Service</h2>
      <p>
        The content of this website is for your general information and use only.
        It is subject to change without notice. This website uses cookies to monitor
        browsing preferences.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">3. User Responsibilities</h2>
      <div>
        By using this site, you agree not to engage in any behavior that:
        <ul className="pl-6 mt-2 list-disc">
          <li>Violates local, state, or national laws.</li>
          <li>Is harmful to the website’s integrity or operations.</li>
          <li>Violates the privacy or rights of others.</li>
        </ul>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">4. Third-Party Links</h2>
      <p>
        Our website may contain links to third-party sites that are not operated
        by us. We have no control over the content or practices of these sites.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">5. Limitation of Liability</h2>
      <p>
        We will not be liable for any damages resulting from the use or inability
        to use this website, including but not limited to indirect or consequential
        damages, or loss of profit.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">6. Governing Law</h2>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of India. Any dispute relating to these terms and conditions
        will be subject to the exclusive jurisdiction of the courts in India.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">7. Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these terms at any time. It is
        your responsibility to check this page periodically for any changes.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">8. Contact Information</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact
        us at <strong>info@suwidatourandtravels.in</strong>.
      </p>
    </div>
  );
};

export default TermsOfService;
