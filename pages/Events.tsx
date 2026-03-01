import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ChevronRight, Bell } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Workshop' | 'Webinar' | 'Open Day' | 'Training';
  desc: string;
  upcoming: boolean;
}

const events: Event[] = [
  {
    title: 'AI Literacy Workshop — Cohort 3',
    date: 'March 22, 2026',
    time: '10:00 AM – 2:00 PM',
    location: 'Kalyan Municipal School, Hall B',
    type: 'Workshop',
    desc: 'Our flagship 4-hour AI Literacy session covering prompt engineering, safe AI use, and hands-on project building. Open to registered students from partner schools.',
    upcoming: true,
  },
  {
    title: 'Mentor Orientation Webinar',
    date: 'March 28, 2026',
    time: '6:00 PM – 7:30 PM',
    location: 'Online (Zoom)',
    type: 'Webinar',
    desc: 'New to mentoring with ShaktiPath? This onboarding session covers how to connect with students on the app, session structures, and safety guidelines.',
    upcoming: true,
  },
  {
    title: 'ShaktiPath Open Day — School Applications',
    date: 'April 5, 2026',
    time: '11:00 AM – 3:00 PM',
    location: 'Kalyan Community Centre',
    type: 'Open Day',
    desc: 'School principals and teachers are invited to learn about partnering with ShaktiPath for the 2026 academic year. Curriculum demo, Q&A, and registration support available.',
    upcoming: true,
  },
  {
    title: 'Teacher Training — Digital Skills Facilitation',
    date: 'April 12, 2026',
    time: '9:00 AM – 5:00 PM',
    location: 'Ambernath Training Centre',
    type: 'Training',
    desc: 'Full-day training for school teachers who will co-deliver the ShaktiPath curriculum. Covers pedagogy, the app, and student engagement techniques.',
    upcoming: true,
  },
  // Past
  {
    title: 'AI Literacy Workshop — Cohort 2',
    date: 'January 18, 2026',
    time: '10:00 AM – 2:00 PM',
    location: 'Ulhasnagar Girls School',
    type: 'Workshop',
    desc: 'Second cohort workshop. 65 students participated, with 48 completing their first AI-generated project.',
    upcoming: false,
  },
  {
    title: 'Cohort 1 Graduation & Project Showcase',
    date: 'November 30, 2025',
    time: '3:00 PM – 6:00 PM',
    location: 'Kalyan Municipal School, Main Hall',
    type: 'Open Day',
    desc: 'Students presented projects they built during the programme — including websites, AI-generated content, and digital portfolios — to parents and local community members.',
    upcoming: false,
  },
];

const typeColors: Record<Event['type'], string> = {
  Workshop: 'bg-brand-magenta/10 text-brand-magentaDark',
  Webinar: 'bg-cyan-100 text-cyan-800',
  'Open Day': 'bg-amber-100 text-amber-800',
  Training: 'bg-purple-100 text-purple-800',
};

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-l-4 ${event.upcoming ? 'border-brand-magenta' : 'border-gray-200'}`}>
    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
      <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeColors[event.type]}`}>
        {event.type}
      </span>
      {event.upcoming && (
        <span className="text-xs bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full">Upcoming</span>
      )}
    </div>

    <h3 className="text-lg font-bold text-gray-900 mb-3">{event.title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed mb-4">{event.desc}</p>

    <div className="flex flex-wrap gap-4 text-xs text-gray-400">
      <span className="flex items-center gap-1.5"><Calendar size={13} /> {event.date}</span>
      <span className="flex items-center gap-1.5"><Clock size={13} /> {event.time}</span>
      <span className="flex items-center gap-1.5"><MapPin size={13} /> {event.location}</span>
    </div>
  </div>
);

const Events: React.FC = () => {
  const upcoming = events.filter(e => e.upcoming);
  const past = events.filter(e => !e.upcoming);

  return (
    <div className="bg-brand-surface min-h-screen">
      {/* Hero */}
      <section className="bg-white py-16 px-4 border-b border-gray-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Workshops</h1>
          <p className="text-gray-500 text-lg mb-8">
            In-person workshops, online webinars, and open days — all the ways you can connect with ShaktiPath.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-brand-magenta text-white px-8 py-3 rounded-full font-bold hover:bg-brand-magentaDark transition-colors shadow-md"
          >
            <Bell size={16} /> Register Interest
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-12">
          {/* Upcoming */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-magenta inline-block"></span>
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcoming.map((ev, i) => <EventCard key={i} event={ev} />)}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-brand-magenta to-brand-magentaDark text-white rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Want to host a workshop at your school?</h3>
            <p className="text-white/80 mb-6 text-sm">We're actively onboarding new partner schools for the 2026 cohort.</p>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 bg-white text-brand-magentaDark font-bold px-8 py-3 rounded-full hover:bg-brand-surface transition-colors"
            >
              Partner with us <ChevronRight size={16} />
            </Link>
          </div>

          {/* Past Events */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block"></span>
              Past Events
            </h2>
            <div className="space-y-4">
              {past.map((ev, i) => <EventCard key={i} event={ev} />)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
