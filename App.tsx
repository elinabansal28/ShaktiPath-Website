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
          <Route path="/workshops" element={<div className="container mx-auto py-20 text-center text-2xl font-bold text-gray-500">Workshops Coming Soon</div>} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impact" element={<Impact />} />
          {/* Fallback routes */}
          <Route path="/stories" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;