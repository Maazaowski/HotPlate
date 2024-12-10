import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Public pages
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Menu } from './components/sections/Menu';
import { Gallery } from './components/sections/Gallery';
import { Contact } from './components/sections/Contact';

// Admin pages
import { AdminLayout } from './components/admin/AdminLayout';
import { LoginPage } from './pages/admin/LoginPage';
import { MenuManagement } from './pages/admin/MenuManagement';
import { EventManagement } from './pages/admin/EventManagement';
import { GalleryManagement } from './pages/admin/GalleryManagement';
import { InvoiceGeneration } from './pages/admin/InvoiceGeneration';
import { Analytics } from './pages/admin/Analytics';
import { StaffManagement } from './pages/admin/StaffManagement';

const queryClient = new QueryClient();

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

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  
  if (auth.loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
      </div>
    );
  }
  
  if (!auth.user) {
    return <Navigate to="/admin/login" />;
  }
  
  return <>{children}</>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<PublicLayout />} />
            
            {/* Admin routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Analytics />} />
              <Route path="menu" element={<MenuManagement />} />
              <Route path="events" element={<EventManagement />} />
              <Route path="gallery" element={<GalleryManagement />} />
              <Route path="invoices" element={<InvoiceGeneration />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="staff" element={<StaffManagement />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster position="top-right" />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;