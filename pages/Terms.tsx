import React from 'react';

const Terms: React.FC = () => (
  <div className="bg-brand-surface min-h-screen py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: March 2025</p>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">1. Acceptance of Terms</h2>
          <p>By accessing or using the ShaktiPath website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">2. Use of Content</h2>
          <p>All content on this website — including text, images, graphics, and logos — is the property of ShaktiPath Initiative and is protected by applicable copyright laws. You may not reproduce or distribute any content without prior written permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">3. User Submissions</h2>
          <p>When you submit a form on this website (e.g. contact, volunteer, or waitlist forms), you confirm that the information provided is accurate. ShaktiPath will use this information only for the purpose stated on the relevant form.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">4. External Links</h2>
          <p>This site may contain links to third-party websites. ShaktiPath is not responsible for the content or privacy practices of those sites.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">5. Disclaimer</h2>
          <p>The website is provided "as is" without warranties of any kind. ShaktiPath does not guarantee uninterrupted or error-free access to the site.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">6. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Maharashtra, India.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">7. Contact</h2>
          <p>For questions about these terms, please contact us at <a href="mailto:hello@shaktipath.org" className="text-brand-magenta hover:underline">hello@shaktipath.org</a>.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Terms;
