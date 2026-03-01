import React from 'react';

const Privacy: React.FC = () => (
  <div className="bg-brand-surface min-h-screen py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: March 2025</p>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">1. Who We Are</h2>
          <p>ShaktiPath Initiative is a non-profit programme empowering underserved girls in India with digital and AI skills. Our contact email is <a href="mailto:hello@shaktipath.org" className="text-brand-magenta hover:underline">hello@shaktipath.org</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">2. Data We Collect</h2>
          <p>We collect only the minimum data necessary to operate our programmes:</p>
          <ul className="list-disc list-inside mt-3 space-y-1 text-sm">
            <li>Name and email address submitted through our contact or sign-up forms.</li>
            <li>Organisation details submitted through partnership or pilot request forms.</li>
            <li>We do <strong>not</strong> collect payment information directly on this website.</li>
            <li>We do <strong>not</strong> track minors' location data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">3. How We Use Your Data</h2>
          <p>Information you submit is used solely to respond to your enquiry, send programme updates you opted into, or process your application. We do not sell or share your data with third parties for marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">4. Children's Privacy</h2>
          <p>The ShaktiPath app requires verifiable parental or guardian consent before any minor creates an account. We collect the minimum data necessary and do not display public profiles for minors.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of any personal data we hold about you by emailing <a href="mailto:hello@shaktipath.org" className="text-brand-magenta hover:underline">hello@shaktipath.org</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-brand-magentaDark mb-3">6. Updates to This Policy</h2>
          <p>We may update this policy as our programmes evolve. The date at the top of this page reflects the most recent revision.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Privacy;
