import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        {/* Header Spacer for Fixed Navbar */}
        <div className="h-16 md:h-20 shrink-0"></div>
        <main className="flex flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
