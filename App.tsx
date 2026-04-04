import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AppPage from './pages/AppPage';
import Contact from './pages/Contact';
import Curriculum from './pages/Curriculum';
import About from './pages/About';
import GetInvolved from './pages/GetInvolved';
import WhyShaktiPath from './pages/WhyShaktiPath';
import Impact from './pages/Impact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Stories from './pages/Stories';
import NotFound from './pages/NotFound';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Donate from './pages/Donate';
import Workshops from './pages/Workshops';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-shaktipath" element={<WhyShaktiPath />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Navigate to="/curriculum" replace />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
