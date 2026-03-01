import React, { useState } from 'react';
import { ChevronDown, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

const faqs: { category: string; items: FAQItem[] }[] = [
  {
    category: 'About the Programme',
    items: [
      {
        q: 'What is ShaktiPath?',
        a: 'ShaktiPath is a social-impact initiative that equips high school girls in Maharashtra with practical digital skills, AI literacy, and career-building tools — helping them move from aspiration to earning.',
      },
      {
        q: 'Which age group does ShaktiPath serve?',
        a: 'Our programme is designed for girls in grades 8–12, typically aged 13–18, in government and semi-government schools in and around Kalyan, Maharashtra.',
      },
      {
        q: 'Is ShaktiPath only for students in Kalyan?',
        a: 'Currently our in-person workshops run in Kalyan and surrounding areas (Ambernath, Ulhasnagar, Badlapur). Our mobile app is available to any girl with a smartphone across Maharashtra.',
      },
      {
        q: 'How is ShaktiPath different from existing digital-literacy programmes?',
        a: 'Most digital-literacy efforts focus on basic computer operation. ShaktiPath goes further — teaching AI prompting, freelance income generation, portfolio building, and mentorship — so girls leave with skills they can monetise while still in school.',
      },
    ],
  },
  {
    category: 'Volunteering & Mentoring',
    items: [
      {
        q: 'How do I volunteer with ShaktiPath?',
        a: (
          <>
            You can sign up through our{' '}
            <Link to="/get-involved" className="text-brand-magenta font-bold underline">Get Involved</Link>
            {' '}page. We run weekend and weekday workshops — even 2 hours a month makes a meaningful difference.
          </>
        ),
      },
      {
        q: 'Do I need to be a tech expert to volunteer?',
        a: 'Not at all. We need people with skills in design, communication, business, counselling, and of course tech. If you can share any professional knowledge with a teenager, you qualify.',
      },
      {
        q: 'Can I mentor girls remotely?',
        a: 'Yes. Our app supports safe, moderated mentor–student connections online. Remote mentors can conduct video check-ins, review projects, and answer questions through the platform.',
      },
      {
        q: 'How much time commitment is expected?',
        a: 'As little as 2 hours a month for online mentors. In-person workshop facilitators typically commit to 4–6 hours per workshop session, once or twice a month.',
      },
    ],
  },
  {
    category: 'Schools & Partnerships',
    items: [
      {
        q: 'How can my school partner with ShaktiPath?',
        a: (
          <>
            Fill out the Partner form on our{' '}
            <Link to="/get-involved" className="text-brand-magenta font-bold underline">Get Involved</Link>
            {' '}page. We look for schools with 50+ girl students in grades 8–12 and a dedicated teacher point of contact.
          </>
        ),
      },
      {
        q: 'Is there any cost to the school?',
        a: 'No. ShaktiPath provides curriculum, facilitators, and materials at zero cost to partner schools. We are funded through corporate partnerships and individual donors.',
      },
      {
        q: 'Do you provide teacher training?',
        a: 'Yes. We run teacher-enablement sessions so that school staff can continue delivering the curriculum independently between our workshop visits.',
      },
    ],
  },
  {
    category: 'Sponsoring & Donations',
    items: [
      {
        q: 'How is donation money used?',
        a: 'Donations go directly toward curriculum materials, device access for students who lack smartphones, facilitator stipends, and app development. We publish an annual impact report with full financial transparency.',
      },
      {
        q: 'Can companies sponsor ShaktiPath as a CSR activity?',
        a: (
          <>
            Yes. We offer structured CSR partnerships with impact reporting, co-branding opportunities, and employee-volunteering tie-ins. Reach us at{' '}
            <a href="mailto:hello@shaktipath.org" className="text-brand-magenta font-bold underline">hello@shaktipath.org</a>
            {' '}to discuss.
          </>
        ),
      },
      {
        q: 'Is my donation tax-deductible?',
        a: 'We are in the process of obtaining 80G certification. Please contact us for the current status before making a donation if tax exemption is important to you.',
      },
    ],
  },
];

const FAQAccordion: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800 group-hover:text-brand-magenta transition-colors">{item.q}</span>
        <ChevronDown
          size={20}
          className={`text-brand-magenta shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-gray-600 leading-relaxed text-sm pr-8">
          {item.a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-lg">
            Everything you need to know about ShaktiPath — our programme, volunteering, and how to get involved.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-10">
          {faqs.map((section) => (
            <div key={section.category} className="bg-white rounded-3xl shadow-sm p-8">
              <h2 className="text-lg font-bold text-brand-magentaDark mb-2 pb-4 border-b border-brand-magenta/10">
                {section.category}
              </h2>
              {section.items.map((item, i) => (
                <FAQAccordion key={i} item={item} />
              ))}
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-gradient-to-br from-brand-magenta to-brand-magentaDark text-white rounded-3xl p-8 text-center">
            <LinkIcon size={32} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-bold mb-2">Still have a question?</h3>
            <p className="text-white/80 mb-6 text-sm">We typically respond within 2 business days.</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-brand-magentaDark font-bold px-8 py-3 rounded-full hover:bg-brand-surface transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
