import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import ErrorBoundary from './components/ErrorBoundary';

import Home from './pages/Home';
import ClientLogin from './pages/ClientLogin';
import ArtisanLogin from './pages/ArtisanLogin';
import ClientRegister from './pages/ClientRegister';
import ArtisanRegister from './pages/ArtisanRegister';
import AdminLogin from './pages/AdminLogin';
import FindExpert from './pages/FindExpert';
import ServiceDetails from './pages/ServiceDetails';
import ArtisanDashboard from './pages/ArtisanDashboard';
import ArtisanProjects from './pages/ArtisanProjects';
import ArtisanServices from './pages/ArtisanServices';
import ArtisanSettings from './pages/ArtisanSettings';
import ClientInbox from './pages/ClientInbox';
import AdminDashboard from './pages/AdminDashboard';
import RequestQuote from './pages/RequestQuote';
import AdminArtisans from './pages/AdminArtisans';
import AdminClients from './pages/AdminClients';
import AdminDisputes from './pages/AdminDisputes';
import ClientProfileSettings from './pages/ClientProfileSettings';
import ProfilArtisan from './pages/ProfilArtisan';
import ClientProjects from './pages/ClientProjects';

// Bulk Migrated Components
import VerificationsAdmin from './pages/VerificationsAdmin';
import PaiementsAdmin from './pages/PaiementsAdmin';
import ServicePricing from './pages/ServicePricing';
import JardinageNouveau from './pages/JardinageNouveau';
import AdminConfigurationPlateforme from './pages/AdminConfigurationPlateforme';
import ParametresAdmin from './pages/ParametresAdmin';
import VoirLesPreuvesAdmin from './pages/VoirLesPreuvesAdmin';
import MovingBooking from './pages/MovingBooking';
import MessageSuccess from './pages/MessageSuccess';
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
        {/* Public Routes - Wrapped in MainLayout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login/client" element={<MainLayout><ClientLogin /></MainLayout>} />
        <Route path="/login/artisan" element={<MainLayout><ArtisanLogin /></MainLayout>} />
        <Route path="/register/client" element={<MainLayout><ClientRegister /></MainLayout>} />
        <Route path="/register/artisan" element={<MainLayout><ArtisanRegister /></MainLayout>} />
        <Route path="/login/admin" element={<AdminLogin />} />
        <Route path="/search" element={<MainLayout><FindExpert /></MainLayout>} />
        <Route path="/artisan/:id" element={<MainLayout><ProfilArtisan /></MainLayout>} />
        <Route path="/service/:id" element={<MainLayout><ServiceDetails /></MainLayout>} />
        <Route path="/moving-booking" element={<MainLayout><MovingBooking /></MainLayout>} />
        <Route path="/message-success" element={<MainLayout><MessageSuccess /></MainLayout>} />
        <Route path="/about-us" element={<MainLayout><AboutUs /></MainLayout>} />
        <Route path="/request-quote" element={<RequestQuote />} />

        {/* Private / Dashboard Routes - Rendered without MainLayout nav/footer */}
        <Route path="/dashboard/artisan" element={<ArtisanDashboard />} />
        <Route path="/dashboard/artisan/projects" element={<ArtisanProjects />} />
        <Route path="/dashboard/artisan/settings" element={<ArtisanSettings />} />
        <Route path="/dashboard/artisan/pricing" element={<ArtisanServices />} />
        
        {/* Client Routes */}
        <Route path="/dashboard/client/inbox" element={<ClientInbox />} />
        <Route path="/dashboard/client/projects" element={<ClientProjects />} />
        <Route path="/dashboard/client/bookings" element={<ClientProjects />} />
        <Route path="/dashboard/client/quotes" element={<ClientProjects />} />
        <Route path="/profile/settings" element={<ClientProfileSettings />} />
        <Route path="/category/jardinage" element={<JardinageNouveau />} />
        
        {/* Public Pages wrapped in MainLayout */}
        <Route path="/services/pricing" element={<MainLayout><ServicePricing /></MainLayout>} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/admin/artisans" element={<AdminArtisans />} />
        <Route path="/dashboard/admin/clients" element={<AdminClients />} />
        <Route path="/dashboard/admin/disputes" element={<AdminDisputes />} />
        <Route path="/dashboard/admin/verifications" element={<VerificationsAdmin />} />
        <Route path="/dashboard/admin/payments" element={<PaiementsAdmin />} />
        <Route path="/dashboard/admin/configuration" element={<AdminConfigurationPlateforme />} />
        <Route path="/dashboard/admin/settings" element={<ParametresAdmin />} />
        <Route path="/dashboard/admin/evidence" element={<VoirLesPreuvesAdmin />} />
      </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
