import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Menu } from './components/sections/Menu';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';
import { AdminLayout } from './components/admin/AdminLayout';
import { LoginPage } from './pages/admin/LoginPage';
import { DashboardPage } from './pages/admin/DashboardPage';
import { MenuPage } from './pages/admin/MenuPage';
import { EventsPage } from './pages/admin/EventsPage';
import { GalleryPage } from './pages/admin/GalleryPage';
import { InvoicePage } from './pages/admin/InvoicePage';
import { StaffPage } from './pages/admin/StaffPage';

function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Menu />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="invoices" element={<InvoicePage />} />
            <Route path="staff" element={<StaffPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;